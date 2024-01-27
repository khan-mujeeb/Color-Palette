import { auth, db } from "./firebase";

import { set, push, ref } from "firebase/database";


    const addToFav = async (code, colorName) => {
        const color = { code, colorName };

        try {
            const uid = auth.currentUser.uid;

            const favColorsRef = ref(db, `users/${uid}/favColors`);

            const newEntryRef = push(favColorsRef);

            const entryId = newEntryRef.key;

            await set(newEntryRef, color);

            console.log("Document successfully written with ID:", entryId);
        } catch (error) {
            console.error("Error writing document:", error);
        }
    };


export { addToFav}
