import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Update with your firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
};

const app = initializeApp(firebaseConfig);
export const base = getDatabase(app);

// this is a default export
export default base;
