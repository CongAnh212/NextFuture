<template>
    <div class="col-lg-3 chat-data-left scroller  w-100">
        <div class="chat-search pt-3 ps-3">
            <div class="d-flex align-items-center">
                <div class="chat-profile me-3 avatar-4">
                    <img src="http://127.0.0.1:8000/img/avatar/659bf5439b7c2.jpg" alt="chat-user">
                </div>
                <div class="chat-caption">
                    <h5 class="mb-0">Bni Jordan</h5>
                    <p class="m-0">Web Designer</p>
                </div>
                <button type="submit" class="close-btn-res p-3"><i class="ri-close-fill"></i></button>
            </div>
            <div class="chat-searchbar mt-4">
                <div class="form-group chat-search-data m-0">
                    <input type="text" class="form-control round" id="chat-search" placeholder="Search">
                    <i class="ri-search-line"></i>
                </div>
            </div>
        </div>
        <div class="mt-4 ps-3">
            <h5 class="">Public Channels</h5>
            <ul v-if="listConversation" class="iq-chat-ui nav flex-column nav-pills">
                <li v-for="(v, k) in listConversation" class="bg-hover" @click="selectConversation(v)">
                    <a data-bs-toggle="pill" href="#chatbox1">
                        <div class="d-flex align-items-center w-100">
                            <div class="position-relative">
                                <div class="avatar-3 bg-pink">
                                    <img :src="urlImg + (v?.sender?.id != myInfo?.id ? v?.sender?.avatar : v?.receiver?.avatar)"
                                        alt="chatuserimage" class=" ">
                                </div>
                                <span class="avatar-status position-absolute" style="right: -1rem; bottom: -0.2rem;"><i
                                        class="ri-checkbox-blank-circle-fill text-success"></i></span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between" style="flex: 1;">
                                <div class="chat-sidebar-name ms-2">
                                    <h6 class="mb-0">{{ (v?.sender?.id != myInfo?.id ? v?.sender?.fullname :
                                        v?.receiver?.fullname) }}
                                    </h6>
                                    <span>Lorem Ipsum is</span>
                                </div>
                                <div class="chat-meta float-right text-center mt-2 me-1">
                                    <div class="chat-msg-counter bg-primary text-white">20</div>
                                    <span class="text-nowrap">{{ handleTime(v.timestamp) }}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import firebase from './handle_chat'
import axios, { url } from '../../../core/coreRequest'
import baseFunction from '../../../core/coreFunction'
export default {
    props: {
        myInfo: {
            type: Object,
        }
    },
    watch: {
        myInfo(data) {

        }
    },
    data() {
        return {
            listConversation: [],
            urlImg: url
        }
    },
    mounted() {
        this.getConversation()
    },
    methods: {
        async getConversation() {
            try {
                this.listConversation = await firebase.getConversation();
                console.log('this.listConversation: ', this.listConversation);
            } catch (error) {
                console.error("Error getting conversation:", error);
            }
        },
        handleTime(a) {
            return baseFunction.handleSwitchingFromTimestampToCountdownHours(a)
        },
        selectConversation(v) {
            this.$emit('selectConversation', v)
        }
    },
}
</script>
<style></style>