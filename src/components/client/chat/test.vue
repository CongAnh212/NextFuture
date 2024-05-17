<template>
    <div v-if="myInfo && conversation && receiver" class="w-100  " style="height: calc(100vh - 4.688rem); ">
        <nav class="w-100  flex-between px-4 bg-white py-1" style="box-sizing: border-box;
        box-shadow: 0 3px 2px -3px gray;">
            <div class="d-flex align-items-center" style="gap: 0.3rem;">
                <div class="avatar-4" style="width: 2.5rem; height: 2.5rem;">
                    <img :src="urlImg + (myInfo.id == conversation.sender.id ?
                        conversation.receiver.avatar : conversation.sender.avatar)" alt="">
                </div>
                <b>{{ myInfo.id == conversation.sender.id ?
                    conversation.receiver.fullname : conversation.sender.fullname }}</b>
            </div>
        </nav>
        <div class="chat-content bg-pink relative" style="background-color: rgba(192, 249, 266, .3);">
            <div class="d-flex align-items-center justify-content-center mt-4 mb-4">
                <div class="d-flex align-items-center flex-col" style="width: fit-content;">
                    <div class="avatar-4" style="width: 6rem; height: 6rem;">
                        <img :src="urlImg + receiver.avatar" alt="">
                    </div>
                    <div style="line-height: 20px; margin-top: 13px">
                        <span class="text-dark" style="font-size: 1.5rem; ">{{ receiver.fullname }}</span>
                        <span class="d-flex align-items-center gap-1">
                            <span>{{ receiver.username }}</span>
                            <i class="fas fa-circle " style="font-size: 3px;"></i>
                            <span>NextFuture</span>
                        </span>
                    </div>
                    <router-link :to="{ name: 'detailProfile', params: { username: receiver.username } }">
                        <button class="btn-see-personal-page">See personal page</button>
                    </router-link>
                </div>
            </div>
            <template v-if="listMessage.length >= 1">
                <div class="chat mb-2 form-chat" style="" v-for="(v, k) in listMessage"
                    :class="v.sender_id == myInfo.id ? 'd-flex other-user' : 'chat-left'">
                    <div class="z-1">
                        <div class="avatar-3 m-0 " style="opacity: 1;">
                            <img :src="urlImg + (v.sender_id == myInfo.id ? sender.avatar : receiver.avatar)"
                                alt="avatar" class="">
                        </div>
                        <span class="chat-time mt-1">{{ switchtimestamptToNomalTime(v.timestamp) }}</span>
                    </div>
                    <div v-if="v.isDelete" class="box-delete">
                        message has been recalled
                    </div>
                    <div v-else class="chat-detail d-flex " style="gap: 10px;">
                        <div class="interactive-form mt-3" style="display: none;">
                            <i @click="deleteMessage(v)" class="fas fa-trash-alt"></i>
                            <i @click="replyMessage(v)" class="fas fa-reply"></i>
                        </div>
                        <div class="chat-message" style="box-shadow: 0 10px 10px -12px gray;">
                            <p>{{ v.message }}</p>
                        </div>
                    </div>
                </div>
            </template>
            <div class="chat-footer px-3 " style="background-color: rgba(192, 249, 266, .3); ">
                <div class="d-flex align-items-center">
                    <input type="text" v-model="message" @keyup.enter="sendMessage()" class="form-control me-3"
                        placeholder="Type your message">
                    <button class="btn btn-primary d-flex align-items-center p-2">
                        <i class="far fa-paper-plane"></i>
                        <span class="d-none d-lg-block ms-1" @click="sendMessage()">Send</span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest'
import baseFunction from '../../../core/coreFunction'
import { mapGetters } from 'vuex';
export default {
    props: {
        myInfo: {
            type: Object,
        },
        listMessage: {
            type: Array,
        },
        conversation: {
            type: Object,
        }
    },
    watch: {
        conversation(newV) {
            this.selectUser()
        }
    },
    data() {
        return {
            message: '',
            sender: null,
            receiver: null,
            urlImg: url,
        }
    },
    mounted() {
        if (this.conversation) this.selectUser()
    },
    computed: {
        ...mapGetters(['getListConversation'])
    },
    methods: {
        selectUser() {
            if (this.conversation.sender.id == this.myInfo.id) {
                this.sender = this.conversation.sender
                this.receiver = this.conversation.receiver
            } else {
                this.sender = this.conversation.receiver
                this.receiver = this.conversation.sender
            }
        },
        async sendMessage() {
            if (!this.message) return
            const check = baseFunction.checkConversation(this.getListConversation, this.receiver.id)
            let conversation = this.conversation;
            if (!check) conversation = await this.$store.dispatch('createConversation', this.conversation)
            this.$store.dispatch('sendMessage', {
                message: this.message,
                sender_id: this.sender.id,
                receiver_id: this.receiver.id,
                conversation_id: conversation.id,
                timestamp: Date.now(),
            })
            this.message = ''
            this.$store.commit('setConversation', conversation)
            this.$store.dispatch('getMessage', conversation.id)
        },
        switchtimestamptToNomalTime(a) {
            return baseFunction.switchtimestamptToNomalTime(a).split(' ')[1]
        },
        deleteMessage(message) {
            this.$store.dispatch('deleteMessage', message)
        },
        replyMessage(message) {

        }
    },
}
</script>
<style scoped lang="scss">
.btn-see-personal-page {
    margin-top: 10px;
    background-color: var(--bs-primary);
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 5px 12px;
    box-shadow: 0px 0px 5px #33333324;
}

.chat-left {


    &>.chat-detail {
        flex-direction: row-reverse;

        &>.interactive-form {
            flex-direction: row-reverse;

            &>.fa-trash-alt {
                display: none;
            }
        }
    }
}

.chat-detail {
    align-self: center;
}

.form-chat {
    &:hover {
        .interactive-form {
            display: flex !important;
            gap: 10px;

            &>i {
                cursor: pointer;
            }
        }
    }
}

.box-delete {
    border: 1px solid #33333324;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    margin-right: 17px;
    border-radius: 15px;
    text-align: center;
    pointer-events: none;
    user-select: none;
}
</style>