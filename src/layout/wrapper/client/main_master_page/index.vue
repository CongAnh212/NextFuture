<template>
    <div class="wrapper bg-white">
        <HeaderClient :notify="notify" :myInfo='myInfo' @sendKeySearch="handleSendKeySearch"></HeaderClient>
        <div class="">
            <div class="iq-sidebar-fix sidebar-default ">
                <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1"
                    style="overflow: hidden; outline: none;">
                    <div class="scroll-content">
                        <nav class="iq-sidebar-menu">
                            <ul id="iq-sidebar-toggle" class="iq-menu">
                                <router-view :myInfo='myInfo' @request_friend="handleRequestFriend"
                                    :sentFriendProfile="dataProfileRequestFriend" @suggest="handleSuggest"
                                    :sentFriendProfileSuggest="dataProfileSuggest" @del_suggest="handleDelSuggest"
                                    :getPrivacy="dataPrivacy" :delFriendProfile="delDataProfileAllFriend"
                                    :approve_Connection="dataApproveConnection"
                                    :refuse_Connection="dataRefuseConnection"
                                    :send_active_overview_group="send_active_overview_group"
                                    @fullMemberActive="handleFullMemberActive"
                                    @sendFromListHomeGroup="handleGetDataFromListHoneGroup"
                                    :send_rename_group="send_rename_group"
                                    @sendActiceFromSearch="handleSendActiveFromSearch" :seeMoreSearch="seeMoreSearch">
                                </router-view>
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
            <router-view :myInfo='myInfo' name="content" :sentFriend="dataRequestFriend"
                @profile_request_friend="handleProfileRequestFriend" :sentFriendSuggest="dataSuggest"
                @profile_suggest="handleProfileSuggest" :delFriendSuggest="delDataSuggest" @removeNotify="handleNotify"
                @profile_del_friend="handleDelProfileAllFriend" @sentPrivacy="handlePrivacy"
                @approve_connection="handleApproveConnection" @refuse_connection="handleRefuseConnection"
                @send_active="handleSendActive" :send_active_all_member="send_all_member_active" :infoGroup="infoGroup"
                @sendRenameGroup="handleSendRenameGroup" :dataComeIn="dataComeIn" :listPost="listPost"
                :keySearch="keySearch" :typeViewSearch="typeViewSearch" @sendFromSearchComponent="handleSeeMoreSearch"
                @sendAnonymous="handleSendAnonymous" :conversation="conversation">
            </router-view>
        </div>
    </div>
</template>
<script>
import 'bootstrap';
import "../../../../assets/client/js/sweetalert.js";
import "../../../../assets/client/js/app.js";
import "../../../../assets/client/images/favicon.ico";
import "../../../../assets/client/js/enchanter.js";
import "../../../../assets/client/js/masonry.pkgd.min.js";
import "../../../../assets/client/js/lottie.js";
import "../../../../assets/client/vendor/vanillajs-datepicker/dist/js/datepicker.min.js"

import HeaderClient from '.././main_master_page/HeaderClient.vue';
import axios from '../../../../core/coreRequest'
export default {
    name: "app",
    components: {
        HeaderClient
    },
    data() {
        return {
            myInfo: null,
            infoGroup: null,
            dataComeIn: null,               // list xin vào nhóm
            typeViewSearch: null,           // loại search
            listPost: null,                 // list bài cần duyệt
            seeMoreSearch: null,            // dùng để chuyển view bằng cách click see more
            keySearch: null,
            dataRequestFriend: null,        // cái này là từ list gửi cho profile đọc bên mục Suggest
            dataProfileRequestFriend: null, // cài này là từ profile gửi cho list đọc bên mục Suggest
            //--------------------------------------------------------------------------------------------//
            dataSuggest: null,              // cái này là từ list gửi cho profile đọc bên mục Friend_Request
            dataProfileSuggest: null,       // cái này là từ profile gửi cho list đọc bên mục Friend_Request
            delDataSuggest: null,           // cài này là xóa từ list gửi cho profile đọc bên mục Friend_Request
            //--------------------------------------------------------------------------------------------//

            delDataProfileAllFriend: null,  // cài này là xóa từ profile gửi cho list đọc bên mục All_Friend
            dataPrivacy: null,

            delDataProfileAllFriend: null,  // cái này là xóa từ profile gửi cho list đọc bên mục All_Friend
            //--------------------------------------------------------------------------------------------//
            dataApproveConnection: null,    // cái này là duyệt lời mời từ Request_Group qua list đọc của mục Group
            //--------------------------------------------------------------------------------------------//
            dataRefuseConnection: null,     // cái này là từ chối lời mời từ Request_Group qua list đọc mục Group
            notify: null,              // cái này để xoá thông báo ở header
            //--------------------------------------------------------------------------------------------//
            send_active_overview_group: null,       //truyền active từ overview request group qua request to join the group
            //--------------------------------------------------------------------------------------------//
            send_all_member_active: null,   //truyền active từ list members qua content member
            //--------------------------------------------------------------------------------------------//
            send_rename_group: null,        //truyền thay đổi tên của group
            //--------------------------------------------------------------------------------------------//
            conversation: null,             // truyền cuộc hội thoại
        }
    },
    mounted() {
        this.getMyInfo()
    },
    methods: {
        getMyInfo() {
            axios
                .get('profile/data')
                .then((res) => {
                    this.myInfo = res.data.myInfo;
                });
        },
        handleSendActiveFromSearch(value) {
            this.typeViewSearch = value
        },
        handleReloadListPostToMainMasterPage(value) {
            this.listPost = value
        },
        handleSeeMoreSearch(value) {
            this.seeMoreSearch = value

        },
        handleGetDataFromListHoneGroup(value) {
            this.dataComeIn = value.getDataComeIn
            this.infoGroup = value.infoGroup
            this.listPost = value.listPost
        },
        handleRequestFriend(value) {
            this.dataRequestFriend = value
        },
        handleProfileRequestFriend(value) {
            this.dataProfileRequestFriend = value
        },
        handleSuggest(value) {
            this.dataSuggest = value
        },
        handleProfileSuggest(value) {
            this.dataProfileSuggest = value
        },
        handleDelSuggest(value) {
            this.delDataSuggest = value
        },
        handleDelProfileAllFriend(value) {
            this.delDataProfileAllFriend = value
        },

        handlePrivacy(value) {
            this.dataPrivacy = value
        },
        handleApproveConnection(value) {
            this.dataApproveConnection = value
        },
        handleRefuseConnection(value) {
            this.dataRefuseConnection = value

        },
        handleNotify(value) {
            this.notify = value
        },
        handleSendActive(value) {
            this.send_active_overview_group = value
        },
        handleFullMemberActive(value) {
            this.send_all_member_active = value
        },
        handleSendRenameGroup(value) {
            this.send_rename_group = value
        },
        handleSendKeySearch(value) {
            this.keySearch = value
        },
        handleSendAnonymous(value) {
            this.infoGroup.info.anonymity = value
        },
        handleSelectConversation(value) {
            this.conversation = value
        }
    }
}
</script>
<style>
@import './style.css';
@import "../../../../assets/client/css/libs.min.css";
@import "../../../../assets/client/css/socialv.css";
@import "../../../../assets/client/vendor/@fortawesome/fontawesome-free/css/all.min.css";
@import "../../../../assets/client/vendor/remixicon/fonts/remixicon.css";
@import "../../../../assets/client/vendor/vanillajs-datepicker/dist/css/datepicker.min.css";
@import "../../../../assets/client/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
</style>