/*
    Blz.one - Global App State
*/

import { reactive } from 'vue'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from '../config/firebaseConfig';

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export const firebase = reactive({
    app,
    analytics,
    db
})