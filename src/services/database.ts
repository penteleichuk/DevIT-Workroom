import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.rooms");

export const Database = {
  async createTabel() {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(40) NOT NULL default '0', position varchar(35) NOT NULL default '', email varchar(50) UNIQUE, password varchar(36)  NULL, phone  varchar(35) NOT NULL default '', skype varchar(19) NOT NULL default '')"
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  registration(params: RegistrationRequestType) {
    return db.transaction((tx) => {
      return tx.executeSql(
        "INSERT INTO Users (name, position, email, password, phone, skype) VALUES (?,?,?,?,?,?)",
        [
          params.name,
          params.position,
          params.email,
          params.password,
          params.phone,
          params.skype,
        ]
      );
    });
  },
  login(params: LoginRequestType) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        return tx.executeSql(
          "SELECT * FROM Users WHERE email = ? AND password = ? LIMIT 1",
          [params.email, params.password],
          (_, { rows: { _array } }) => resolve(_array[0]),
          (_, err) => reject(err)
        );
      });
    });
  },
};

export type LoginRequestType = {
  email: string;
  password: string;
};

type UserType = RegistrationRequestType & {
  id: number;
};

type RegistrationRequestType = {
  name: string;
  position: string;
  email: string;
  password: string;
  phone: string;
  skype: string;
};
