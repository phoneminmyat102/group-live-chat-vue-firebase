<template>
  <div class="container welcome">
    <div v-if="showLogin">
      <sign-up @toChatRoom="toChatRoom"></sign-up>
      <p>
        Already a member?
        <span @click="showLogin = !showLogin">Login your account!</span>
      </p>
    </div>

    <div v-else>
      <Login @toChatRoom="toChatRoom"></Login>
      <p>
        Not a member?
        <span @click="showLogin = !showLogin">Create new account!</span>
      </p>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
import SignUp from "@/components/SignUp.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Login,
    SignUp,
  },

  setup() {
    let showLogin = ref(true);
    let router = useRouter();
    let toChatRoom = () => {
      router.push({ name: "chatRoom" });
    };
    return { showLogin, toChatRoom };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  max-width: 400px;
  margin: 20px auto;
  padding: 0 20px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #524747;
  outline: none;
  margin: 10px auto;
  box-sizing: border-box;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome .error {
  color: crimson;
  font-weight: bold;
}

.welcome button {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #4caf50;
  color: white;
  margin: 20px auto;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .welcome form {
    max-width: 80%;
  }
}

@media screen and (max-width: 400px) {
  .welcome input {
    padding: 8px;
  }

  .welcome button {
    padding: 8px;
  }
}
</style>
