<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" v-model="name" placeholder="Enter Your Name" />
    <input type="email" v-model="email" placeholder="Fill Your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Fill Your Password"
    />
    <div v-if="errMsg" class="error">
      {{ errMsg }}
    </div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import refactorSignUp from "@/composables/useSignUp";
export default {
  setup(props,context) {
    let name = ref("");
    let email = ref("");
    let password = ref("");
    let { errMsg, createUser } = refactorSignUp();

    let signUp = async () => {
     let res =  await createUser(email.value, password.value, name.value);
     if(res) {
      console.log(res.user);
      context.emit("toChatRoom");
     } 
    };
    return { name, email, password, signUp, errMsg };
  },
};
</script>

<style></style>
