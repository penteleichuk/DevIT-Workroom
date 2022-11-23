import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.rooms");

export const Database = {
  createTabel() {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(40) NOT NULL default '0', position varchar(35) NOT NULL default '', email varchar(50) UNIQUE, password varchar(36)  NULL, phone  varchar(35) NOT NULL default '', skype varchar(19) NOT NULL default '')"
          );

          resolve("success");
        },
        (err) => {
          reject("error");
        }
      );
    });
  },
  registration(params: RegistrationRequestType) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Users (name, email, password, phone) VALUES (?,?,?,?)",
          [params.name, params.email, params.password, params.phone],
          () => {
            this.login({ email: params.email, password: params.password })
              .then((res) => {
                resolve(res);
              })
              .catch((err) => {
                reject(err);
              });
          },
          (_, err): boolean | any => reject(err)
        );
      });
    });
  },
  login(params: LoginRequestType) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Users WHERE email = ? AND password = ? LIMIT 1",
          [params.email, params.password],
          (_, { rows: { _array } }) => {
            _array[0] ? resolve(_array[0]) : reject("Error password or email");
          },
          (_, err): boolean | any => reject("Server error")
        );
      });
    });
  },
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type UserType = RegistrationRequestType & {
  id: number;
  skype: string | undefined;
  position: string | undefined;
};

export type RegistrationRequestType = {
  name: string;
  email: string;
  password: string;
  phone: string;
};
