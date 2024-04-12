<template>
  <form class="new-chat" @submit.prevent="handleTextEnter">
    <textarea
      v-model="message"
      @keypress.enter="handleTextEnter"
      placeholder="Text Message Here"
    ></textarea>
    <div class="send"><button>Send</button></div>
  </form>
</template>

<script>
import { ref } from "vue";
import { auth, timestamp } from "@/firebase/config";
import getAuth from "@/composables/getAuthUser";
import useCollection from "@/composables/useCollection";
export default {
  setup() {
    let message = ref("");
    let { user } = getAuth();

    let { errMsg, addDoc } = useCollection("messages");

    let handleTextEnter = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: timestamp(),
      };
      message.value = "";
      await addDoc(chat);
      // console.log(chat);
    };

    return { message, handleTextEnter, errMsg };
  },
};
</script>

<style>
.new-chat {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

textarea {
  width: 90%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
