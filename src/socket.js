import { reactive } from "vue";
import io from "socket.io-client";

export const state = reactive({
  connected: false,
  onlineUsers: [],
  activeAccounts: 0,
});

const URL = process.env.NODE_ENV === "production" ? undefined : "http://127.0.0.1:3001";

export const socket = io(URL, {
    autoConnect: true,
});

function pushData(itemOnlineUser) {
  let newItem = {};
  let itemArray = [];
  itemOnlineUser.map((item) => {
    newItem = {
      id: item.id,
      socketId: item.socketId,
    };
    itemArray.push(newItem);
  });
  state.onlineUsers.push(itemArray);
}

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
  const newUsers = args;
  newUsers.forEach((item) => pushData(item));
  if (state.onlineUsers.length >= 10) {
    state.onlineUsers.shift();
  }
});

// Add this block
socket.on("activeAccounts", (activeAccounts) => {
  state.activeAccounts = activeAccounts;
});
