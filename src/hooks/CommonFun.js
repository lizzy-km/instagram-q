import { getAuth } from "firebase/auth";
import { app } from "../config/firebase/FirebaseConfig";

export const {
  currentUser,
  signOut,
  settings,
  languageCode,
  updateCurrentUser,
  useDeviceLanguage,
  authStateReady,
  beforeAuthStateChanged,
  config,
  name,
} = getAuth(app);
