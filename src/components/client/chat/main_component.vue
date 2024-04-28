<template>
    <header-component :myInfo="myInfo" />

    <div class="">
        <div class="iq-sidebar-fix sidebar-default ">
            <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1" style="overflow: hidden; outline: none;">
                <div class="scroll-content">
                    <nav class="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" class="iq-menu">
                            <list-component :myInfo="myInfo" :listConversation="listConversation"
                                @selectConversation="handleSelectConversation" />
                        </ul>
                    </nav>
                </div>
                <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                    <div class="scrollbar-thumb scrollbar-thumb-x"
                        style="width: 250px; transform: translate3d(0px, 0px, 0px);">
                    </div>
                </div>
                <div class="scrollbar-track scrollbar-track-y" style="display: none;">
                    <div class="scrollbar-thumb scrollbar-thumb-y"
                        style="height: 514px; transform: translate3d(0px, 0px, 0px);"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="px-0 mx-0"
        style="position: absolute; right: 0; width: 79%;top: 4.688rem; min-height: calc(100vh - 4.688rem);">
        <!-- <chat-box-component :myInfo="myInfo" :listMessage="['CAMNH']" /> -->
        <ChatBoxComponent v-if="listMessage" :myInfo="myInfo" :listMessage="listMessage" :conversation="conversation"
            @sendMessage="handleSendMessage" />
    </div>
</template>

<!-- import  -->
<script>
import HeaderComponent from '../../../layout/wrapper/client/master_page/HeaderClient.vue'
import ListComponent from './conversation_list.vue'
import ChatBoxComponent from './conversation_chat_box.vue'
import axios from '../../../core/coreRequest';

import {
    database,
    ref,
    push,
    onValue,
    query,
    orderByChild,
    equalTo,
    limitToLast,
} from "../../../firebase";
const messageRef = ref(database, "messages/");
const conversationRef = ref(database, "conversations/");

export default {
    components: {
        HeaderComponent,
        ListComponent,
        ChatBoxComponent
    },
    data() {
        return {
            myInfo: null,
            listConversation: null,
            listMessage: null,
            conversation: null,
        }
    },
    mounted() {
        this.getMyInfo()
        this.getConversation()
    },
    methods: {
        getMyInfo() {
            axios
                .get('profile/data')
                .then((res) => {
                    this.myInfo = res.data.myInfo;
                });
        },
        handleSelectConversation(conv) {
            this.getMessage(conv.id)
            this.conversation = conv
        },
        async getConversation() {
            let listConversation = [];

            await new Promise((resolve, reject) => {
                onValue(
                    conversationRef,
                    (data) => {
                        data.forEach((value) => {
                            listConversation.push({
                                ...value.val(),
                                id: value.key,
                            });
                        });
                        resolve();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            });

            await this.getMessage(listConversation[0].id) //đợi có tin nhắn của cuộc hội thoại đầu
            this.listConversation = listConversation;
            this.conversation = listConversation[0] // để load cuộc hội thoại đầu tiên
            this.listConversation.forEach(async (conv) => {
                conv.nearMess = await this.getNearMessage(conv.id)
            })
            console.log('this.listConversation: (before)', this.listConversation);
        },
        async getMessage(conversationId) {
            const queryRef = query(
                messageRef,
                orderByChild("conversation_id"),
                equalTo(conversationId)
            );

            await new Promise((resolve, reject) => {
                onValue(
                    queryRef,
                    (snapshot) => {
                        this.listMessage = []
                        snapshot.forEach((childSnapshot) => {
                            const messageData = childSnapshot.val();
                            const messageId = childSnapshot.key;
                            this.listMessage.push({ ...messageData, id: messageId });
                        });

                        resolve();
                    },
                );
            });
        },
        handleSendMessage(message) {
            push(messageRef, message).then((data) => {
                console.log("send message success");
            });
            this.listConversation.map((data) => {
                if (data.id == message.conversation_id) {
                    data.nearMess = message
                }
            })
        },
        async getNearMessage(conversationId) {
            const queryRef = query(
                messageRef,
                orderByChild('conversation_id'),
                equalTo(conversationId),
                limitToLast(1)
            );
            var nearMess = {}
            await new Promise((resolve, reject) => {
                onValue(
                    queryRef,
                    (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            nearMess = childSnapshot.val();
                        });

                        resolve();
                    },
                );
            });

            return nearMess
        },

    }
}
</script>
<style></style>