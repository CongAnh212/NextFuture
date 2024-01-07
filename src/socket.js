import { reactive } from "vue";
import io from 'socket.io-client';

export const state = reactive({
  connected: false,
  onlineUsers: []
});

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://127.0.0.1:3001";

export const socket = io(URL, {
  autoConnect: true,
});

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("welcome", (msg) => {
  console.log(msg);
});

socket.on("onlineUser", (...args) => {
  console.log("️⚡→(socket.js:29) ~ online: ", args);
  state.onlineUsers.push(args);
})
