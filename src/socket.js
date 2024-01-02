import { reactive } from "vue";
import io from 'socket.io-client';

export const state = reactive({
  connected: false,
});

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001";

export const socket = io(URL, {
  autoConnect: true,
});

socket.on("connect", () => {
  state.connected = true;
  socket.emit('newUser', user)
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("welcome", (msg) => {
  console.log(msg);
});
