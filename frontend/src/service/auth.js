import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AUTH, DB } from "../config/firebase";
import { setDoc, doc, getDoc, collection, getDocs } from "firebase/firestore";

async function register(username, email, password) {
  return await new Promise(async (resolve, reject) => {
    await getAllUsers().then((res) => {
      const usernameExist = res.find((x) => x.username === username);
      if (usernameExist) {
        reject("auth/username already exist");
      }
    });

    await createUserWithEmailAndPassword(AUTH, email, password)
      .then(async (res) => {
        const docRef = doc(DB, "users", res.user.uid);
        await setDoc(docRef, {
          username,
          email,
        })
          .then(() => resolve("success"))
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(
          err.message
            .replace("Firebase: Error (", "")
            .replace(").", "")
            .replaceAll("-", " ")
        );
      });
  });
}

async function login(email, password) {
  return await new Promise(async (resolve, reject) => {
    await signInWithEmailAndPassword(AUTH, email, password)
      .then(async () => {
        const result = await getUser(AUTH.currentUser.uid);
        resolve({ ...result.data(), uid: AUTH.currentUser.uid });
      })
      .catch((err) => {
        reject(
          err.message
            .replace("Firebase: Error (", "")
            .replace(").", "")
            .replaceAll("-", " ")
        );
      });
  });
}

async function getUser(uid) {
  const docRef = doc(DB, "users", uid);
  return new Promise(async (resolve, reject) => {
    await getDoc(docRef)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function getAllUsers() {
  const docRef = collection(DB, "users");
  return new Promise(async (resolve, reject) => {
    await getDocs(docRef)
      .then((res) => {
        resolve(res.docs.map((item) => item.data()));
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function logout() {
  await signOut(AUTH);
}

export { register, login, getUser, getAllUsers, logout };
