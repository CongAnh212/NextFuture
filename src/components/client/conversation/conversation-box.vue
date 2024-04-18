<template>
  <div class="col-lg-9 chat-data p-0 chat-data-right">
    <div class="tab-content">
      <div v-if="!choseConversation" class="tab-pane fade active show" id="default-block" role="tabpanel">
        <div class="chat-start">
          <span class="iq-start-icon text-primary"><i class="ri-message-3-line"></i></span>
          <span class="mt-3">No chat selected yet</span>
        </div>
      </div>
      <div v-if="choseConversation" class="tab-pane fade active show" id="chatbox10" role="tabpanel">
        <div class="chat-head">
          <header class="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3">
            <div class="d-flex align-items-center">
              <div class="sidebar-toggle">
                <i class="ri-menu-3-line"></i>
              </div>
              <div class="avatar chat-user-profile mb-3 me-3">
                <img src="https://i.pinimg.com/736x/25/2c/10/252c105532a920109cc8fa1029c68579.jpg" alt="avatar"
                     class="avatar-50 ">
                <span class="avatar-status">
                  <i
                      :class="{
                    'ri-checkbox-blank-circle-fill text-success': choseConversation.isOnline,
                    'ri-checkbox-blank-circle-fill text-dark': !choseConversation.isOnline }">
                  </i>
                </span>
              </div>
              <h5 class="mb-0">{{ this.conversation ? this.conversation.fullname : '...' }}</h5>
            </div>
          </header>
        </div>
        <div class="chat-content scroller">
          <div class="chat d-flex other-user">
            <div class="chat-user">
              <a class="avatar m-0">
                <img src="https://i.pinimg.com/736x/25/2c/10/252c105532a920109cc8fa1029c68579.jpg" alt="avatar"
                     class="avatar-35 ">
              </a>
              <span class="chat-time mt-1">6:53</span>
            </div>
            <div class="chat-detail">
              <div class="chat-message">
                <p>Thanks, from ThemeForest.</p>
              </div>
            </div>
          </div>
          <div class="chat chat-left">
            <div class="chat-user">
              <a class="avatar m-0">
                <img src="https://i.pinimg.com/736x/25/2c/10/252c105532a920109cc8fa1029c68579.jpg" alt="avatar"
                     class="avatar-35 ">
              </a>
              <span class="chat-time mt-1">6:54</span>
            </div>
            <div class="chat-detail">
              <div class="chat-message">
                <p>I will purchase it for sure. 👍</p>
              </div>
            </div>
          </div>
          <div class="chat d-flex other-user">
            <div class="chat-user">
              <a class="avatar m-0">
                <img src="https://i.pinimg.com/736x/25/2c/10/252c105532a920109cc8fa1029c68579.jpg" alt="avatar"
                     class="avatar-35 ">
              </a>
              <span class="chat-time mt-1">6:56</span>
            </div>
            <div class="chat-detail">
              <div class="chat-message">
                <p>Okay Thanks..</p>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-footer p-3 bg-white">
          <form @submit.prevent class="d-flex align-items-center">
            <div class="chat-attagement d-flex">
              <a href="#"><i class="far fa-smile pe-3" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-paperclip pe-3" aria-hidden="true"></i></a>
            </div>
            <input v-model="this.messageText" @keyup.enter="sendMessage"
                   type="text" class="form-control me-3" placeholder="Type your message">
            <button type="submit" class="btn btn-primary d-flex align-items-center p-2">
              <i class="far fa-paper-plane" aria-hidden="true"></i>
              <span @click="sendMessage" class="d-none d-lg-block ms-1">Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conversation-box',
  props: {
    choseConversation: Object
  },
  data() {
    return {
      conversation: null,
      messageText: ''
    }
  },
  watch: {
    choseConversation: {
      handler(newVal) {
        if (newVal) {
          this.conversation = this.choseConversation
        }
      },
      immediate: true
    }
  },
  created() {
    this.conversation = this.choseConversation
  },
  methods: {
    sendMessage() {
      if (this.messageText) {
        console.log('send message: ', this.messageText)
        this.messageText = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
