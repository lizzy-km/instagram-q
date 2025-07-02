import { getAuth } from "firebase/auth";
import { app, firestore } from "../config/firebase/FirebaseConfig";
import sign from "jwt-encode";
import { addDoc, doc, setDoc } from "firebase/firestore";
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

export const BrowserDetails = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export async function generateSessionToken(uid, email, loginTime, token) {
  const data = {
    uid,
    BrowserDetails,
    sub: email,
    iat: loginTime,
  };
  const secret = token;

  const jwtToken = sign(data, secret);

  return jwtToken;
}

export async function saveSessionToDb(sessionToken, uid, deviceId) {
  const userSessionRef = doc(
    firestore,
    "userSession",
    `/${uid}/sessions/${deviceId}`
  );

  await setDoc(
    userSessionRef,
    {
      sessionToken: sessionToken,
      deviceId: deviceId,
      createdAt: new Date().getTime(),
      isPrimary: false,
      isTerminated: false,
      userAgent: BrowserDetails.userAgent,
      platform: BrowserDetails.platform,
    },
    { merge: true }
  );
}
