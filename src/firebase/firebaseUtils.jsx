import { auth, db } from "./firebase";

import { set, push, ref, get } from "firebase/database";

const addToFav = async (code, colorName) => {
    const color = { code, colorName };

    try {
        const uid = auth.currentUser.uid;
        const codePath = code.replaceAll("#", "");

        const favColorsRef = ref(db, `users/${uid}/favColors/${codePath}`);

        

        await set(favColorsRef, color);

        // console.log("Document successfully written with ID:", entryId);
    } catch (error) {
        console.error("Error writing document:", error);
    }
};

const getFavColors = async () => {
    try {
        const uid = auth.currentUser.uid;

        const favColorsRef = ref(db, `users/${uid}/favColors`);

        // Fetch data once
        const snapshot = await get(favColorsRef);

        if (snapshot.exists()) {
            // Convert the snapshot to an array of objects
            const favColorsArray = Object.entries(snapshot.val()).map(
                ([key, value]) => ({
                    id: key,
                    ...value,
                })
            );

            return favColorsArray;
        } else {
            console.log("No fav colors found");
            return [];
        }
    } catch (error) {
        console.error("Error reading fav colors:", error);
        return [];
    }
};


const deleteFavColor = async (color) => {

    const colorPath = color.replaceAll("#", "");

    try {
        const uid = auth.currentUser.uid;

        const favColorsRef = ref(db, `users/${uid}/favColors/${colorPath}`);

        // Fetch data once
        await set(favColorsRef, null);
    } catch (error) {
        console.error("Error deleting fav color:", error);
    }
}

export { addToFav, getFavColors, deleteFavColor };
