<template>
  <div class="content-page mt-5 mx-0">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body chat-page p-0">
            <div class="chat-data-block">
              <div class="row">
                <conversation-list
                    :routeParams="routeParams"
                    :personalInformation="personalInformation"
                    @choseConversation="handleChoseConversation"
                ></conversation-list>
                <conversation-box
                    :choseConversation="conversation"
                ></conversation-box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ConversationList from "./conversation-list.vue";
import ConversationBox from "./conversation-box.vue";

export default {
  name: 'conversation',
  components: {
    ConversationList,
    ConversationBox
  },
  data() {
    return {
      personalInformation: null,
      routeParams: '',
      conversation: null,
    }
  },
  created() {
    this.routeParams = this.$route.params.username
    this.personalInformation = this.fetchPersonalInformation()
  },
  methods: {
    fetchPersonalInformation() {
      try {
        const jsonInformation = localStorage.getItem('information-my-profile')
        return jsonInformation != null ? JSON.parse(jsonInformation) : null
      } catch (e) {
        console.log('error fetch information data: ', e)
      }
    },
    handleChoseConversation(value) {
      this.conversation = value
    }
  }
}
</script>

<style scoped>

</style>
