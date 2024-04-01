import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AUTH, DB } from "../config/firebase";
import { setDoc, doc } from "firebase/firestore";

async function register(username, email, password) {
  return await new Promise(async (resolve, reject) => {
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
        reject(err.message);
      });
  });
}

async function login(email, password) {
  return await new Promise(async (resolve, reject) => {
    await signInWithEmailAndPassword(AUTH, email, password)
      .then(() => {
        resolve("success");
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}

async function logout() {
  await signOut(AUTH);
}

export { register, login, logout };
