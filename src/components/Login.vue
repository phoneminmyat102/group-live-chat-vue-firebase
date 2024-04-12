<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="email" v-model="email" placeholder="Fill Your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Fill Your Password"
    />
    <div v-if="errMsg" class="error">
      {{ errMsg }}
    </div>
    <button>Login</button>

  </form>
</template>

<script>

import { ref } from "vue";
import { useLogin } from "@/composables/useLogin";
export default {
  setup(props,context) {

    let email = ref("");
    let password = ref("");

    let { errMsg, refactorLogin} = useLogin();
    let login = async () => {
      let res = await refactorLogin(email.value, password.value);

      if(res) {
        console.log(res.user);
        context.emit("toChatRoom");
      }
    };
    return {email, password, login, errMsg };
  },
};
</script>

<style></style>
