import { auth } from "@/firebase/config";
import { ref } from "vue";

let user = ref();

auth.onAuthStateChanged((_user) => {
  user.value = _user;
//   console.log(user.value);
});

let getAuth = () => {
    return {user};
}

export default  getAuth 