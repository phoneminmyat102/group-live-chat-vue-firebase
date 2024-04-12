import { auth } from "@/firebase/config"
import { ref } from "vue"

let errMsg = ref(null);

let refactorLogin = async (email,password) => {
    try {
      let res = await auth.signInWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Login Fails!");
      }
      return res;
    } catch (err) {
      let errObj = JSON.parse(err.message);
    //   console.log(errObj);
      errMsg.value = errObj.error.message.replace(/_/g, " ");
    }
}

let useLogin = () => {
    return {errMsg, refactorLogin};
}

export {useLogin};