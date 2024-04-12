<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
        <div class="single" v-for="message in modifiedMessages" :key="message.id">
            <span class="created-at">{{ message.created_at }}</span>
            <span class="name">{{message.name}} >> </span>
            <span class="message">{{message.message}}</span>
        </div>
        
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { computed, onUpdated, ref } from 'vue'
import {formatDistanceToNow} from "date-fns"
export default {
    setup() {

        let msgBox = ref(null);

        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        })

        let messages = ref([]);
        db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
            let results = [];
            snap.docs.forEach((doc) => {
                let document = {...doc.data(), id:doc.id};   
                  doc.data().created_at &&  results.push(document);
            });
            messages.value = results;
            // console.log(messages.value)
        });

        let modifiedMessages = computed(()=>{
            return messages.value.map((msg)=>{
                let formattedTime = formatDistanceToNow(msg.created_at.toDate());
                return {...msg,created_at:formattedTime}
            })
        })
        return { modifiedMessages , msgBox }
    }
}
</script>

<style>
.chat-window {
        background: #d1c8c8;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #5b76a2;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }

      .message{
        color: purple;
      }
</style>