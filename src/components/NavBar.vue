<template>
  <nav v-if="user">
    <div>
      <p>Hi {{user.displayName}}</p>
      <p class="email">Sign In as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { auth } from "@/firebase/config";
import { ref } from "vue";
import getAuth from "../composables/getAuthUser"
export default {
  setup() {
    let errMsg = ref(null);
    let {user} = getAuth();
    let logout = async () => {
      try {
        await auth.signOut();
        console.log("User Logout!");
      } catch (err) {
        errMsg.value = err.message;
        console.log(errMsg.value);
      }
    };

    
    return { logout, user }
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  font-size: 16px;
  color: #444;
  margin: 2px auto;
}

nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
