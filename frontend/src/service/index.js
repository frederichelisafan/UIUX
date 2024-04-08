import { AUTH, DB } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";

async function updateLevel(level) {
  return await new Promise(async (resolve, reject) => {
    const docRef = doc(DB, "users", AUTH.currentUser.uid);
    await updateDoc(docRef, {
      level,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function updatePoints(keyName, points, userPoints) {
  return await new Promise(async (resolve, reject) => {
    const docRef = doc(DB, "users", AUTH.currentUser.uid);
    await updateDoc(docRef, {
      points: {
        ...userPoints,
        [keyName]: points,
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { updateLevel, updatePoints };
