// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCbd-dGOH9x_nTTlbi4yL1dQFoFkvDUz0s",
  authDomain: "firebase-adminsdk-jxily@image-gallery-9044a.iam.gserviceaccount.com",
  projectId: "image-gallery-9044a",
  storageBucket: "XXXXXXXXXXXXXXXXXX",
  messagingSenderId: "307220208500",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;