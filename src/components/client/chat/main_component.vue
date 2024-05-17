<template>
    <header-component :myInfo="myInfo" />

    <div class="">
        <div class="iq-sidebar-fix sidebar-default ">
            <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1" style="overflow: hidden; outline: none;">
                <div class="scroll-content">
                    <nav class="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" class="iq-menu">
                            <list-component :myInfo="getMyInfo" :listConversation="getListConversation" />
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
        <ChatBoxComponent v-if="getListMessage" :myInfo="getMyInfo" :listMessage="listMessage"
            :conversation="getConversation" @sendMessage="handleSendMessage" />
    </div>
</template>

<!-- import  -->
<script>
import HeaderComponent from '../../../layout/wrapper/client/master_page/HeaderClient.vue'
import ListComponent from './conversation_list.vue'
import ChatBoxComponent from './conversation_chat_box.vue'

import { mapGetters } from 'vuex'

export default {
    components: {
        HeaderComponent,
        ListComponent,
        ChatBoxComponent
    },
    data() {
        return {
            listMessage: null,
        }
    },
    watch: {
        getListMessage:{
            handler(newValue) {
                this.listMessage = newValue;
            },
            immediate: true
        },
    },
    computed: {
        ...mapGetters([
            'getListMessage',
            'getListConversation',
            'getConversation',
            'getMyInfo',
        ])
    },
    async mounted() {
        if (!this.getMyInfo) await this.$store.dispatch('fetchMyInfo')
        if (!this.getListConversation) {
            this.$store.dispatch('getConversation')
        }
    },
    methods: {

    }
}
</script>
<style></style>