<template>
    <div v-if="myInfo && conversation && receiver" class="w-100 bg-box " style="height: calc(100vh - 4.688rem); ">
        <nav class="w-100  flex-between px-4 bg-white py-2" style="box-sizing: border-box;
        box-shadow: 0 3px 2px -3px gray;">
            <div class="d-flex align-items-center" style="gap: 0.3rem;">
                <div class="avatar-4" style="width: 2.5rem; height: 2.5rem;">
                    <img :src="urlImg + (myInfo.id == conversation.sender.id ?
                        conversation.receiver.avatar : conversation.sender.avatar)" alt="">
                </div>
                <b>{{ myInfo.id == conversation.sender.id ?
                    conversation.receiver.fullname : conversation.sender.fullname }}</b>
            </div>
            <!-- <span class="dropdown bg-soft-primary c-pointer">
                <i class="ri-more-2-line p-1" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="true" role="menu"></i>
                <span class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1"
                    style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(10px, 34px);"
                    data-popper-placement="bottom-start">
                    <a class="dropdown-item" href="#"><i class="ri-pushpin-2-line me-1 h5"></i>Pin to top</a>
                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-line me-1 h5"></i>Delete chat</a>
                    <a class="dropdown-item" href="#"><i class="ri-time-line me-1 h5"></i>Block</a>
                </span>
            </span> -->
        </nav>

        <div class="w-100 py-4 chat-box-content" :style="{ height: isReply ? '80%' : 'calc(100vh - 12rem)' }">
            <div class="d-flex align-items-center justify-content-center mb-4">
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
            <div v-if="listMessage.length >= 1" class="d-flex flex-col" style="gap: 13px;" :class="isReply ? '' : ''">
                <div v-for="(v, k) in listMessage" class="w-100 d-flex px-4 form-chat" :class="myInfo.id == v.sender_id ? 'justify-end' : '',
                    v.reply ? 'mt-4' : ''">
                    <div class="d-flex w-100" style="gap: 20px;"
                        :class="myInfo.id == v.sender_id ? 'right-chat' : 'left-chat'">
                        <div class="w-fit relative d-flex" style="align-items: end;">
                            <div class="avatar-3">
                                <img :src="urlImg + (v.sender_id == myInfo.id ? sender.avatar : receiver.avatar)"
                                    alt="">
                            </div>
                            <!-- <span class="chat-time absolute" style="bottom: -24px; right: 0;">{{
                                switchtimestamptToNomalTime(v.timestamp) }}</span> -->
                        </div>
                        <div v-if="v.isDelete" class="box-delete">
                            message has been recalled
                        </div>
                        <div v-else class="relative w-100 d-flex box-message align-items-center" style="gap: 10px;">
                            <div class="message h-fit">
                                {{ v.message }}
                            </div>
                            <div class="box-icon" style="gap: 10px; display: none;">
                                <i @click="deleteMessage(v)" class="fas fa-trash-alt"></i>
                                <i @click="replyMessage(v)" class="fas fa-reply"></i>
                            </div>
                            <div v-if="v.reply" class="absolute box-reply">
                                {{ v.reply.isDelete ? 'message has been recalled' : v.reply.message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="chat-box-footer">
            <div v-if="isReply" class="" style="border-top: 1px solid #dee2e6; padding: 0px 40px; position: relative;">
                <div style=" color: black">Replying to <span style="font-weight: 700">{{ receiver.fullname }}</span>
                </div>
                <div>{{ reply.message }}</div>
                <div @click="hiddenReply"
                    style="cursor: pointer;;position: absolute; right: 40px; top: 0px; font-size: 1.2rem">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="d-flex align-items-center chat-form" style="padding: 0 20px 10px 40px;">
                <input type="text" v-model="message" @keyup.enter="sendMessage()" ref="inputChat"
                    class="form-control me-3" placeholder="Type your message">
                <button class="btn btn-primary d-flex align-items-center p-2">
                    <i class="far fa-paper-plane"></i>
                    <span class="d-none d-lg-block ms-1" @click="sendMessage()">Send</span>
                </button>
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
            this.isReply = false

            this.selectUser()
        }
    },
    data() {
        return {
            message: '',
            sender: null,
            receiver: null,
            urlImg: url,
            reply: {
                message: 'test'
            },
            isReply: false,
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
                reply_id: this.isReply ? this.reply.id : null,
                timestamp: Date.now(),
            })
            this.message = ''
            this.isReply = false
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
            this.$refs.inputChat.focus()
            this.isReply = true
            this.reply = message
            console.log(this.listMessage);
        },
        hiddenReply() {
            this.isReply = false
        }
    },
}
</script>
<style scoped lang="scss">
.right-chat {
    text-align: right;
    flex-direction: row-reverse;

    &>.box-message {
        flex-direction: row-reverse;

        .message {
            border-radius: 25px 25px 5px 25px;
        }

        .box-reply {
            border-radius: 20px 20px 5px 20px;
        }
    }
}

.left-chat {
    text-align: left;

    &>.box-message {
        &>.box-icon {
            flex-direction: row-reverse;
        }

        .message {
            border-radius: 25px 25px 25px 5px;
        }

        .box-reply {
            border-radius: 20px 20px 20px 5px;
        }
    }

}

.form-chat {
    &:hover {
        .box-icon {
            display: flex !important;

            &>i {
                cursor: pointer;
            }
        }
    }
}

.box-reply {
    width: fit-content;
    max-width: 400px;
    background-color: #33333324;
    z-index: -1;
    padding: 10px 20px 25px 20px;
    top: -32px;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.message {
    max-width: 400px;
    background-color: var(--bs-primary);
    color: white;
    padding: 10px 20px;
}

.bg-box {
    background-color: rgba(192, 249, 266, .3) !important;
}



.chat-box-content {
    position: relative;
    overflow-y: scroll;
}

.chat-box-footer {
    position: fixed;
    bottom: 0px;
    right: 0;
    width: 80%;
    z-index: 10;
    // padding: 0 20px 10px 40px;
}


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

.box-delete {
    border: 1px solid #33333324;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 15px;
    text-align: center;
    pointer-events: none;
    user-select: none;
}

.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.w-fit {
    width: fit-content;
}

.h-fit {
    height: fit-content;
}

.flex-col {
    flex-direction: column;
}

.justify-end {
    justify-content: end
}
</style>