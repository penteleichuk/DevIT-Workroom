import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.local");

export const Database = {
  createTabel() {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(40) NOT NULL default '0', position varchar(35) NOT NULL default '', email varchar(50) UNIQUE, password varchar(36)  NULL, phone  varchar(35) NOT NULL default '', skype varchar(19) NOT NULL default '', image varchar NOT NULL default '')"
          );

          resolve("success");
        },
        () => {
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
              .catch(() => {
                reject("Email exists");
              });
          },
          (): boolean | any => reject("Email exists")
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
          (): boolean | any => reject("Server error")
        );
      });
    });
  },
  me(id: number) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Users WHERE id = ? LIMIT 1",
          [id],
          (_, { rows: { _array } }) => {
            _array[0] ? resolve(_array[0]) : reject("User not found");
          },
          (): boolean | any => reject("Server error")
        );
      });
    });
  },
  update(id: number, params: UpdateRequestType) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE users SET name = ?, email = ?, phone = ?, position = ?, skype = ? WHERE id = ?",
          [
            params.name,
            params.email,
            params.phone,
            params.position,
            params.skype,
            id,
          ],
          () => {
            this.me(id).then((res) => {
              resolve(res);
            });
          },
          (): boolean | any => reject("Server error")
        );
      });
    });
  },
  updatePhoto(id: number, image: string) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE users SET image = ? WHERE id = ?",
          [image, id],
          () => {
            this.me(id).then((res) => {
              resolve(res);
            });
          },
          (_, error): boolean | any => reject(error)
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
  image: string | undefined;
  skype: string | undefined;
  position: string | undefined;
};

export type RegistrationRequestType = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export type UpdateRequestType = {
  name: string;
  email: string;
  phone: string;
  position: string;
  skype: string;
};
