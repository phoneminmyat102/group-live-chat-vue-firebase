import { ref } from "vue"
import { auth } from "../firebase/config.js"

let refactorSignUp = () => {
    let errMsg = ref(null);

    let createUser = async (email, password, name) => {
      try {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        if (!res) {
          throw new Error("SignUp Fails");
        }

        res.user.updateProfile({
          displayName: name,
        });
        return res;
      } catch (err) {
        errMsg.value = err.message;
        // console.log(errMsg.value);
      }
    };
    return { errMsg, createUser}
}

export default  refactorSignUp ;