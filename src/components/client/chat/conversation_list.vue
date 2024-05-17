<template>
    <div class="col-lg-3 chat-data-left scroller  w-100">
        <div class="chat-search pt-3 ps-3">
            <h4 class="mb-2 f-500">Conversation</h4>
            <div class="chat-searchbar ">
                <div class="form-group chat-search-data m-0">
                    <input type="text" class="form-control round" id="chat-search" placeholder="Search">
                    <i class="ri-search-line"></i>
                </div>
            </div>
        </div>
        <div class="mt-4 ps-3">
            <ul v-if="listConversation" class="iq-chat-ui nav flex-column nav-pills">
                <li v-for="(v, k) in listConversation" class="bg-hover" @click="selectConversation(v)">
                    <a data-bs-toggle="pill" href="#chatbox1">
                        <div class="d-flex align-items-center w-100">
                            <div class="position-relative">
                                <div class="avatar-3 ">
                                    <img :src="urlImg + (v?.sender?.id != myInfo?.id ? v?.sender?.avatar : v?.receiver?.avatar)"
                                        alt="chatuserimage" class=" ">
                                </div>
                                <span class="avatar-status position-absolute" style="right: -1rem; bottom: -0.2rem;"><i
                                        class="ri-checkbox-blank-circle-fill text-success"></i></span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between" style="flex: 1;">
                                <div class="chat-sidebar-name ms-2 ">
                                    <h6 class="mb-0">{{ (v?.sender?.id != myInfo?.id ? v?.sender?.fullname :
                                        v?.receiver?.fullname) }}
                                    </h6>
                                    <div v-if="v.nearMess" class="d-flex align-items-center gap-1">
                                        <span>{{ v.nearMess.message }}</span>
                                        <i class="fas fa-circle "
                                            style="font-size: 3px; width: fit-content; margin-right: 0;"></i>
                                        <span class="text-nowrap ">
                                            {{ handleTime(v.nearMess.timestamp) }}
                                        </span>
                                    </div>
                                </div>
                                <div class="chat-meta  mt-2 me-1">
                                    <div class="chat-msg-counter bg-primary text-center text-white">20</div>

                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>'
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
        listConversation: {
            type: Array
        },
    },
    watch: {
    },
    data() {
        return {
            urlImg: url
        }
    },
    mounted() {
        // this.getConversation()
    },
    methods: {
        handleTime(a) {
            return baseFunction.handleSwitchingFromTimestampToCountdownHours(a)
        },
        selectConversation(v) {
            this.$store.dispatch('getMessage', v.id)
            this.$store.commit('setConversation', v)
        }
    },
}
</script>
<style></style>