import { db } from "@/components/items/firebaseapp";
import { ref } from "firebase/database";

import { get } from "firebase/database";

function GetImages() {
    let data = [];

    let pic_ref = ref(db, "/pictures/data");

    try {
        get(pic_ref).then((snapshot) => {
            let temp_data = snapshot.val();
            data.push(temp_data);
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }

    return data
}

export default GetImages