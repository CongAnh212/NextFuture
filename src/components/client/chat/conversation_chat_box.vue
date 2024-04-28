<template>
    <div v-if="myInfo && conversation && receiver" class="w-100 " style="height: calc(100vh - 4.688rem);">
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
        <div class="chat-content  relative" style="background-color: rgba(192, 249, 266, .3)">
            <!-- <img src="https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg"
                class="w-100 h-100 absolute" style="left: 0; bottom: 0; object-fit: fill; opacity: 0.3; "
                alt=""> -->
            <template v-if="listMessage">
                <div class="chat " style="" v-for="(v, k) in listMessage"
                    :class="v.sender_id == myInfo.id ? 'd-flex other-user' : 'chat-left'">
                    <div class="z-1">
                        <div class="avatar-3 m-0 " style="opacity: 1;">
                            <img :src="urlImg + (v.sender_id == myInfo.id ? sender.avatar : receiver.avatar)"
                                alt="avatar" class="">
                        </div>
                        <span class="chat-time mt-1">{{ switchtimestamptToNomalTime(v.timestamp) }}</span>
                    </div>
                    <div class="chat-detail">
                        <div class="chat-message" style="box-shadow: 0 10px 10px -12px gray;">
                            <p>{{ v.message }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
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
</template>
<script>
import axios, { url } from '../../../core/coreRequest'
import baseFunction from '../../../core/coreFunction'
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
        sendMessage() {
            this.$emit('sendMessage', {
                message: this.message,
                sender_id: this.sender.id,
                receiver_id: this.receiver.id,
                conversation_id: this.conversation.id,
                timestamp: Date.now(),
            })
            this.message = ''
        },
        switchtimestamptToNomalTime(a) {
            return baseFunction.switchtimestamptToNomalTime(a).split(' ')[1]
        }
    },
}
</script>
<style></style>