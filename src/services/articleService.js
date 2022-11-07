// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

// For this starter code, we use mock data, that is, data in memory that
// is pretty arbitrary. The service functions to create and fetch articles
// will just work on this fake data in memory.

// This intent is for you to fork this starter code and then replace the
// bodies of the service functions with code that fetches from a *real*
// database like Firebase Firestore.
import { db } from "../firebaseConfig"
import { collection, query, getDocs, addDoc, orderBy, limit, Timestamp } from "firebase/firestore"

export async function createArticle({ title, body, img }) {
  // As this is just fake data for messing around, we'll throw in a quick
  // and unreliable database id. In a real app, the id should b
  const data = {title, body, date: Timestamp.now(), img}
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id:  docRef.id, ...data};

}

export async function fetchArticles() {
  // In storage the ids are separated from the data, but in this function
  // we are going to combine the id and the data together.
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
