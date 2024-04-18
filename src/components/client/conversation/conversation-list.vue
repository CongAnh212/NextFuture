<template>
  <div class="col-lg-3 chat-data-left scroller">
    <div class="chat-search pt-3 ps-3">
      <div class="d-flex align-items-center">
        <div class="chat-profile me-3">
          <img src="https://i.pinimg.com/736x/25/2c/10/252c105532a920109cc8fa1029c68579.jpg" alt="chat-user"
               class="avatar-60 ">
        </div>
        <div class="chat-caption">
          <h5 class="mb-0">{{
              personalInformation && personalInformation.fullname ? personalInformation.fullname : 'No Username'
            }}</h5>
          <p class="m-0">{{
              personalInformation && personalInformation.nickname ? personalInformation.nickname : '...'
            }}</p>
        </div>
      </div>
      <div class="chat-searchbar mt-4">
        <div class="form-group chat-search-data m-0">
          <input v-model="searchKeyword" type="text" class="form-control round" id="chat-search" placeholder="Search">
          <i class="ri-search-line"></i>
        </div>
      </div>
    </div>
    <div class="chat-sidebar-channel scroller mt-4 ps-3">
      <ul class="iq-chat-ui nav flex-column nav-pills">
        <li v-for="(item, index) in searchListFriend || []" :key="index">
          <a data-bs-toggle="pill" :href="`#${item.username}`"
             :class="{ 'active': activeIndex === index }"
             @click="choseConversation(item)"
          >
            <div class="d-flex align-items-center">
              <div class="avatar me-2">
                <img src="https://i.pinimg.com/736x/25/2c/10/252c105532a920109cc8fa1029c68579.jpg" alt="chatuserimage"
                     class="avatar-50 ">
                <span class="avatar-status">
                  <i :class="{ 'ri-checkbox-blank-circle-fill': item.isOnline, 'ri-checkbox-blank-circle-fill text-success': item.isOnline, 'ri-checkbox-blank-circle-fill text-dark': !item.isOnline }"></i>
                </span>
              </div>
              <div class="chat-sidebar-name">
                <h6 class="mb-0">{{ item.fullname }}</h6>
                <span>{{ item.nickname }}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {state} from "../../../socket.js";

export default {
  name: 'conversation-list',
  props: {
    personalInformation: Object,
    routeParams: String
  },
  data() {
    return {
      listFriend: [],
      listOnlineFriend: null,
      searchKeyword: '',
      activeIndex: null
    }
  },
  computed: {
    searchListFriend() {
      const keyword = this.searchKeyword.toLowerCase()
      return this.listFriend.filter(item => {
        return item.fullname.toLowerCase().includes(keyword) || item.nickname.toLowerCase().includes(keyword)
      })
    }
  },
  watch: {
    listOnlineFriend: {
      handler(newVal, oldVal) {
        this.updateOnlineUser(newVal)
      },
      deep: true
    },
    searchListFriend: {
      handler: 'handleSearchListFriendChange',
      immediate: true
    }
  },
  created() {
    this.listOnlineFriend = state.onlineUsers
    this.fetchFriend()
  },
  methods: {
    async fetchFriend() {
      try {
        const token = window.localStorage.getItem('token');
        const client = JSON.parse(window.localStorage.getItem('information-my-profile'))
        const response = await axios.get(`http://127.0.0.1:3006/api/conversation?sender_id=${client.id}`, {
          headers: {Authorization: 'Bearer ' + token}
        })
        const jsonData = await response.data.data
        jsonData.forEach((item) => {
          item.isOnline = false
        })
        this.listFriend = jsonData
        this.updateOnlineUser(this.listOnlineFriend)
      } catch (e) {
        console.log('error fetch data list friend: ', e)
      }
    },
    updateOnlineUser(onlineUsers) {
      if (onlineUsers) {
        if (this.listFriend.length > 0 && onlineUsers) {
          this.listFriend.forEach(friend => {
            const onlineUser = onlineUsers[onlineUsers.length - 1].find((user) => user.id === friend.id);

            if (onlineUser) {
              friend.isOnline = true;
            } else {
              friend.isOnline = false;
            }
          });
        }
      }
    },
    choseConversation(value, index) {
      this.activeIndex = this.searchListFriend.indexOf(index);
      const username = value.username
      this.$router.push({name: 'messages', params: {username}})
      this.$emit('choseConversation', value)
    },
    async handleSearchListFriendChange() {
      if (this.routeParams && this.searchListFriend.length >0) {
        const foundItem = this.searchListFriend.find(item => item.username === this.routeParams)
        if (foundItem) {
          this.choseConversation(foundItem)
          this.activeIndex = this.searchListFriend.indexOf(foundItem)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
