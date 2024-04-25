<template>
    <div v-if="myInfo && conversation" class="w-100 " style="height: calc(100vh - 4.688rem);">
        <nav class="w-100  flex-between px-4 bg-white py-1" style="box-sizing: border-box; 
        box-shadow: 0 3px 2px -2px gray;">
            <div class="d-flex align-items-center" style="gap: 0.3rem;">
                <div class="avatar-4" style="width: 2.5rem; height: 2.5rem;">
                    <img :src="urlImg + (myInfo.id == conversation.sender.id ?
                        conversation.receiver.avatar : conversation.sender.avatar)" alt="">
                </div>
                <b>{{ myInfo.id == conversation.sender.id ?
                    conversation.receiver.fullname : conversation.sender.fullname }}</b>
            </div>
            <span class="dropdown bg-soft-primary c-pointer">
                <i class="ri-more-2-line p-1" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="true" role="menu"></i>
                <span class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1"
                    style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(10px, 34px);"
                    data-popper-placement="bottom-start">
                    <a class="dropdown-item" href="#"><i class="ri-pushpin-2-line me-1 h5"></i>Pin to top</a>
                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-line me-1 h5"></i>Delete chat</a>
                    <a class="dropdown-item" href="#"><i class="ri-time-line me-1 h5"></i>Block</a>
                </span>
            </span>
        </nav>
        <div class="chat-content relative">
            <img src="https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg"
                class="absolute w-100 h-100" style="left: 0; top: 0; object-fit: fill; opacity: 0.3;" alt="">
            <div class="w-100 h-100 absolute bg-xanh" style="left: 0; top: 0; opacity: 0.3;"></div>
            <template v-if="listMessage">
                <div class="chat " v-for="(v, k) in listMessage"
                    :class="v.sender_id == myInfo.id ? 'd-flex other-user' : 'chat-left'">
                    <div class="z-1">
                        <div class="avatar-3 m-0 " style="opacity: 1;">
                            <img :src="urlImg + (v.sender_id == myInfo.id ? sender.avatar : receiver.avatar)"
                                alt="avatar" class="">
                        </div>
                        <span class="chat-time mt-1">6:45</span>
                    </div>
                    <div class="chat-detail">
                        <div class="chat-message">
                            <p>{{ v.message }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="chat-footer px-3 bg-white">
            <div class="d-flex align-items-center">
                <div class="chat-attagement d-flex">
                    <a href="#"><i class="far fa-smile pe-3" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-paperclip pe-3" aria-hidden="true"></i></a>
                </div>
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
import {
    database,
    ref,
    push,
    onValue,
    query,
    orderByChild,
    equalTo,
} from "../../../firebase";
import firebase from './handle_chat'
import axios, { url } from '../../../core/coreRequest'
import baseFunction from '../../../core/coreFunction'
export default {
    props: {
        myInfo: {
            type: Object,
        },
        // conversation: {
        //     type: Object
        // }
    },
    watch: {
        conversation(newV, oldV) {
            this.selectUser(); //để biết trong cuộc hội thoại này mình là ai
            // this.getMessage()
        },
        myInfo(newV, oldV) {
            this.selectUser()

        }
    },
    data() {
        return {
            listConversation: [],
            message: '',
            sender: null,
            receive: null,
            urlImg: url,
            listMessage: [],
            conversation: {
                "receiver": {
                    "avatar": "avatar/659bf5439b7c2.jpg",
                    "fullname": "Lê Công Anh",
                    "id": 1,
                    "username": "conganh2122003"
                },
                "sender": {
                    "avatar": "avatar/659ce7b74c8d5.jpg",
                    "fullname": "Phan Công Tánh",
                    "id": 5,
                    "username": "tanhdeptrai"
                },
                "timestamp": 1713511841390,
                "id": "-NvpFvlygM3VFhvsITX1"
            }
        }
    },
    mounted() {
        this.getMessage()
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
            firebase.sendMessage({
                message: this.message,
                sender_id: this.sender.id,
                receiver_id: this.receiver.id,
                conversation_id: this.conversation.id,
                timestamp: Date.now(),
            })
            this.message = ''
        },
        async getMessage() {
            this.listMessage = null
            this.listMessage = await firebase.getMessage('-NvpFvlygM3VFhvsITX1')
            console.log('this.lsssssistMessage: ', this.listMessage);
            // console.log("lấy đc dữ liệu");
        }
        // getMessage() {
        //     onValue(ref(database, 'messages'), (data) => {
        //         this.listMessages = []
        //         data.forEach((value) => {
        //             console.log("dô dây");
        //             this.listMessages.push(value.val().message)
        //         })
        //     })
        // },
        // async getMessage() {
        //     try {
        //         let dataMessage = await firebase.getMessage(this.conversation.id);
        //         if (dataMessage.length > 0) {
        //             console.log(dataMessage);
        //             this.listMessage = dataMessage;
        //         }
        //     } catch (error) {
        //         console.error("Error getting message:", error);
        //     }
        // }

    },
}
</script>
<style></style>