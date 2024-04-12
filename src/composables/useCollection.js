import { ref } from "vue"
import { db } from '../firebase/config'

let useCollection = (_collection) => {
    let errMsg = ref(null);

    let addDoc = async (data) => {
       try {
        await db.collection(_collection).add(data);
       } catch (err) {
        console.log(err.message);
        errMsg.value = err.message;
       }
    }
    return { errMsg, addDoc}
}

export default useCollection;