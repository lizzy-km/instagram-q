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


export async function generateDeviceId(uid,email){

  const combinedString = `${uid}::${email}::${navigator.userAgent}::${Date.now()}`

  const textEncoder = new TextEncoder()
  const data = textEncoder.encode(combinedString)

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const deviceId = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return deviceId;


}
