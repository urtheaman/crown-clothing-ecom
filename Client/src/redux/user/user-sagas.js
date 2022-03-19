import { takeLatest, put, call, all } from "redux-saga/effects";
import userActionTypes from "./user-action-types";
import { addDoc, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  emailSigninHandler,
  fireStoreDb,
  getCurrentUser,
  provider,
  signOutUser,
} from "../../firebase/init.firebase";
import {
  emailSigninStart,
  signinFailure,
  signinSuccess,
  signoutFailure,
  signoutSuccess,
} from "./user-action";

// Google Signin

function* googleSignin() {
  try {
    const res = yield call(signInWithPopup, auth, provider);
    const credential = yield call(GoogleAuthProvider.credentialFromResult, res);
    const user = {
      token: credential.accessToken,
      user: res.user,
    };
    yield put(signinSuccess(user));
  } catch (err) {
    yield put(signinFailure(err.message));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignin);
}

// Email Password Signin

function* emailSignin({ payload: { email, password } }) {
  try {
    yield emailSigninHandler(email, password);
    const user = yield getCurrentUser();
    yield put(signinSuccess(user));
  } catch (err) {
    yield put(signinFailure(err.message));
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignin);
}

// Signup

function* signup({ payload: { name, email, password } }) {
  try {
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    console.log(userCredential);
    const user = userCredential.user;
    const userData = {
      name: name,
      email: user.email,
      uid: user.uid,
    };
    yield call(addUserToFirestore, userData);
    yield put(emailSigninStart({ email: email, password: password }));
  } catch (err) {
    put(signoutFailure(err.message));
  }
}

export function* onSignup() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signup);
}

// Add user to Firestore

export function* addUserToFirestore(user) {
  try {
    const collectionRef = yield call(collection, fireStoreDb, "users");
    const documentReference = yield call(addDoc, collectionRef, { ...user });
    console.log("document added", documentReference.id);
  } catch (err) {
    throw err;
  }
}

// Sign out
function* signout() {
  try {
    yield signOutUser();
    yield put(signoutSuccess());
  } catch (err) {
    put(signoutFailure(err.message));
  }
}

export function* onSignout() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signout);
}

// Check User Session

function* isUserAuthenticated() {
  try {
    const currentUser = yield getCurrentUser();
    yield put(signinSuccess(currentUser));
  } catch (err) {
    yield put(signinFailure(err.message));
  }
}

export function* onCheckUserSignin() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onSignout),
    call(onSignup),
    call(onCheckUserSignin),
  ]);
}
