import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome.vue"
import ChatRoom from "../views/ChatRoom.vue"
import { auth } from '@/firebase/config'
const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
    beforeEnter(to, from, next) {
      let user = auth.currentUser;
      if (!user) {
        next();
      } else {
        next({ name: "chatRoom" });
      }
    },
  },
  {
    path: "/chatRoom",
    name: "chatRoom",
    component: ChatRoom,
    beforeEnter(to, from, next) {
      let user = auth.currentUser;
      if (user) {
        next();
      } else {
        next({ name: "welcome" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
