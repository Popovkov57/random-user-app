import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Update with your firebase config 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID
}

const app = initializeApp(firebaseConfig);
export const base = getDatabase(app);

// this is a default export
export default base