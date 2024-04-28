<template>
    <div style="min-height: calc(100vh - 4.688rem);">
        <div v-if="isView && myInfo">
            <div class="w-100  main-group " style="border-bottom: 3px solid #3e3e3e10;">
                <div class="w-100 h-100">
                    <div class="w-100 bg-primary flex-center respon_cover">
                        <img :src="urlImg + data.cover_image" class="w-100 " style="object-fit: cover; width: 100%;">
                    </div>
                    <div class="w-100 px-2 pt-3 c">
                        <h3><b style="color: rgb(0, 0, 0);">{{ data.group_name }}</b></h3>
                        <div v-if="!isViewInvite" class="flex-between"> <!-- xử lý lời mời -->
                            <div class="d-flex align-items-center" style="position: relative; cursor: pointer;">
                                <router-link
                                    :to="{ name: 'detailProfile', params: { username: info.username == null ? ' ' : info.username } }"
                                    @mouseover="over(v)" v-if="member" v-for="(v, k) in member"
                                    class="circle bg-primary imge-hover flex-center"
                                    style="height: 2.5rem; width: 2.5rem; outline: 2px solid rgb(255, 255, 255); overflow: hidden; margin-right: -5px;">
                                    <img :src="urlImg + v.avatar" style="object-fit: cover; width: 100%; height: 100%;"
                                        alt="">
                                </router-link>
                                <div v-else></div>
                                <div class="bg-white modal-component pb-1" ref="modalComponent">
                                    <div class=" d-flex align-items-center py-3 px-3" style="gap: 15px;">
                                        <div>
                                            <router-link style="overflow: hidden; width: 7rem; height: 7rem;"
                                                class="circle flex-center"
                                                :to="{ name: 'detailProfile', params: { username: info.username == null ? ' ' : info.username } }">
                                                <img style="object-fit: cover; width: 100%; height: 100%;"
                                                    :src="urlImg + info.avatar">
                                            </router-link>
                                        </div>
                                        <div style="flex:1">
                                            <div style="font-size: 18px; line-height: 1rem;">
                                                <router-link
                                                    :to="{ name: 'detailProfile', params: { username: info.username == null ? ' ' : info.username } }">
                                                    <b class="text-dark">{{ info.fullname }}</b>
                                                </router-link>
                                            </div>
                                            <div class="text-dark py-2">
                                                <i class="fa-solid fa-user-group me-2 text-secondary"
                                                    style="font-size: 15px;"></i>
                                                <span style="font-size: 15px;" v-if="info.mutual >= 2">
                                                    {{ info.mutual }} mutual friends include
                                                    <b>
                                                        <router-link
                                                            :to="{ name: 'detailProfile', params: { username: info.friends[0].username } }">
                                                            {{ info.friends[0].fullname }}
                                                        </router-link>
                                                    </b> and
                                                    <b>
                                                        <router-link
                                                            :to="{ name: 'detailProfile', params: { username: info.friends[1].username } }">
                                                            {{ info.friends[1].fullname }}
                                                        </router-link>
                                                    </b>
                                                </span>
                                                <span v-else-if="info.mutual == 1">
                                                    {{ info.mutual }} mutual friend is
                                                    <b>
                                                        <router-link
                                                            :to="{ name: 'detailProfile', params: { username: info.friends[0].username } }">
                                                            {{ info.friends[0].fullname }}
                                                        </router-link>
                                                    </b>
                                                </span>
                                                <span v-else>
                                                    <b class="text-primary">{{ info.follower }}</b> followers
                                                </span>
                                            </div>
                                            <div class="text-dark">
                                                <i class="fa-solid fa-house-chimney me-2 text-secondary"
                                                    style="font-size: 15px;"></i>
                                                <span style="font-size: 15px;">Live in <b class="text-primary">{{
                                                    info.address
                                                        }}</b></span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="flex-center " style="gap: 7px;">
                                    <button v-if="info.status == 1" class="btn btn-light f-500"
                                        style="width: 140px;">Friend</button>
                                    <button class="btn btn-primary f-500" style="width: 140px;"> Message</button>
                                    <button class="btn btn-light f-500" style="width: 35px;">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </button>
                                </div> -->
                                </div>
                            </div>
                            <div v-if="viewType == 1 || viewType == 2" class="d-flex">
                                <div @click="open()"
                                    class="btn-primary px-2 f-500 radius-7 text-white me-2 invite flex-center"
                                    data-bs-toggle="modal" data-bs-target="#inviteModal" style="cursor: pointer;">
                                    <span style="font-size: 20px;font-weight: bold;">
                                        +
                                    </span>
                                    <span class="del-event">Invite</span>
                                </div>
                                <div class="btn-light px-2 f-500 radius-7 text-dark flex-center py-1"
                                    style="cursor: pointer;">
                                    <i class="fas fa-share m-0 p-0 me-1"></i>
                                    <span class="del-event">Share</span>
                                </div>
                            </div>
                            <div v-else-if="viewType == 0" class="d-flex">
                                <div v-if="checkRequest == 0" @click="joinGroup"
                                    class="btn-primary px-2 f-500 radius-7 text-white me-2 invite "
                                    style="cursor: pointer; padding: 0.5rem">
                                    <i class="fas fa-users me-2"></i>
                                    <span class="del-event">Join Group</span>
                                </div>
                                <div v-else @click="undoRequest"
                                    class="btn-primary px-2 f-500 radius-7 text-white me-2 invite "
                                    style="cursor: pointer; padding: 0.5rem">
                                    <i class="fas fa-undo-alt me-2"></i>
                                    <span class="del-event">
                                        Cancel request
                                    </span>
                                </div>
                                <div @click="copyLink" class="btn-light px-2 f-500 radius-7 text-dark me-2 invite "
                                    style="cursor: pointer; padding: 0.5rem">
                                    <i class="fas fa-copy me-2"></i>
                                    <span class="del-event">Copy Link</span>
                                </div>
                            </div>
                            <div class="modal fade" id="inviteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header ">
                                            <h1 class="modal-title fs-5 " id="exampleModalLabel">Invite friends to join
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-7 ">
                                                    <div class="w-100">
                                                        <div class="iq-search-bar device-search w-100 mt-1 mb-1"
                                                            style="padding:0px !important;">
                                                            <div action="#" class="searchbox w-100"><a
                                                                    class="search-link my-auto h-100 flex-center"
                                                                    href="#"><i
                                                                        class="ri-search-line my-auto text-light"></i></a><input
                                                                    type="text" class="text search-input"
                                                                    placeholder="Search for friends by name"
                                                                    style="border-radius:50px;"></div>
                                                        </div>
                                                    </div>
                                                    <h4>Suggest</h4>
                                                    <div style="max-height: 50vh; overflow: auto;">

                                                        <div @click="choose(k, v)" v-for="(v, k) in list_friends"
                                                            class="d-flex p-2 py-1 radius-7 bg-hover text-dark"
                                                            style="cursor: pointer;">
                                                            <div class="circle "
                                                                style="width: 40px; height: 40px; overflow: hidden;">
                                                                <img :src="urlImg + v.avatar"
                                                                    style="object-fit: cover; width: 100%;" alt="">
                                                            </div>
                                                            <div class="  d-flex align-items-center px-2 del-event"
                                                                style="width: 40px; height: 40px; flex: 1; font-weight: 600;">
                                                                {{ v.fullname }}
                                                            </div>
                                                            <div class="  flex-center"
                                                                style="width: 40px; height: 40px;">
                                                                <div class="form-check flex-center">
                                                                    <input class="form-check-input check_input"
                                                                        type="checkbox" :value="k" :id="'invite' + k"
                                                                        style="cursor: pointer;">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-5" style="background-color: #33333315; border-radius: 10px;">
                                                    <p style="font-weight: 500; color: #333333b3;">Selected {{
                                                        this.list_invite.length }} friends</p>
                                                    <div v-for="(v, k) in list_invite"
                                                        class="d-flex p-2 py-2 radius-7 bg-hover text-dark"
                                                        style="cursor: pointer;">
                                                        <div class="circle "
                                                            style="width: 40px; height: 40px; overflow: hidden;">
                                                            <img :src="urlImg + v.avatar"
                                                                style="object-fit: cover; width: 100%;" alt="">
                                                        </div>
                                                        <div class="  d-flex align-items-center px-2 del-event"
                                                            style="width: 40px; height: 40px; flex: 1; font-weight: 600;">
                                                            {{ v.fullname }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button :disabled="list_invite.length == 0" @click="sendInvite()"
                                                type="button" class="btn btn-primary" data-bs-dismiss="modal">Send
                                                invite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="card radius-7">
                                <div class="card-body  radius-7"
                                    style="padding: 1rem 1.2rem; background-color: rgb(192, 249, 255);">
                                    <div class="flex-between">
                                        <div class=" d-flex" style="flex: 1">
                                            <div class="circle" style="width: 40px; height: 40px; overflow: hidden;">
                                                <img :src="urlImg + infoClient.avatar"
                                                    style="object-fit: cover; width: 100%;" alt="">
                                            </div>
                                            <div class=" px-2 " style="flex: 1; line-height: 1.2rem;">
                                                <b>{{ infoClient.fullname }} has invited you to join this group.</b>
                                                <br>
                                                <span>This invitation was sent {{ dateCountdown(infoClient.time) }}
                                                    ago</span>
                                            </div>
                                        </div>
                                        <div class=" d-flex" style="width: 40%; gap: 10px;">
                                            <button @click="acceptInvite()" style="flex: 1;"
                                                class="btn btn-primary">Join
                                                group</button>
                                            <button @click="removeInvite()" style="flex: 1;"
                                                class="btn btn-white">Decline
                                                the
                                                invitation</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="post_approval.length > 0" class="bg-xanh d-flex my-2 text-dark align-items-center"
                            style="border-radius: 7px; padding: 1rem;">
                            <div style="flex:1;line-height: 1.3rem;">
                                <b>Posts are pending</b>
                                <br>
                                <span class="f-500">
                                    {{ post_approval.length }} posts
                                </span>
                            </div>
                            <div>
                                <router-link :to="{ name: 'browse-posts' }">
                                    <button class="btn btn-primary">Manage posts</button>
                                </router-link>
                            </div>
                        </div>
                        <hr class="w-100 bg-dark pb-0 mb-0">
                        <div class="text-dark flex-between"
                            style="display:flex;gap:20px; margin-top: 5px; margin-bottom: -3px;">
                            <div v-if="viewType == 1 || viewType == 2" class="d-flex"> <!-- Left navbar -->
                                <div class="flex-center border-bottomm ct " style="width: 100%; cursor: pointer;">
                                    <div @click="setView('discuss')" class="py-2 p-2 px-3 bb f-500 discuss"
                                        style="border-radius: 7px; ">
                                        <span class="del-event">Discuss</span>
                                    </div>
                                </div>
                                <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                    <div @click="setView('member')" class="py-2 p-2 px-3  bg-hover bb f-500 member"
                                        style="border-radius: 7px;">
                                        <span class="del-event">Member</span>
                                    </div>
                                </div>
                                <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                    <div @click="setView('event')" class="py-2 p-2 px-3  bg-hover bb f-500 event"
                                        style="border-radius: 7px;">
                                        <span class="del-event">Event</span>
                                    </div>
                                </div>
                                <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                    <div @click="setView('photo')" class="py-2 p-2 px-3  bg-hover bb f-500 photo"
                                        style="border-radius: 7px;">
                                        <span class="del-event">Photos</span>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="viewType == 0 && data.privacy == 1" class="d-flex"> <!-- Left navbar -->
                                <div class="flex-center border-bottomm ct " style="width: 100%; cursor: pointer;">
                                    <div @click="setView('discuss')" class="py-2 p-2 px-3 bb f-500 discuss"
                                        style="border-radius: 7px; ">
                                        <span class="del-event">Discuss</span>
                                    </div>
                                </div>
                                <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                    <div @click="setView('introduce')"
                                        class="py-2 p-2 px-3  bg-hover bb f-500 introduce" style="border-radius: 7px;">
                                        <span class="del-event">Introduce</span>
                                    </div>
                                </div>
                                <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                    <div @click="setView('member')" class="py-2 p-2 px-3  bg-hover bb f-500 member"
                                        style="border-radius: 7px;">
                                        <span class="del-event">Member</span>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="d-flex"> <!-- Left navbar -->
                                <div class="flex-center border-bottomm ct " style="width: 100%; cursor: pointer;">
                                    <div @click="setView('discuss')" class="py-2 p-2 px-3 bb f-500 discuss"
                                        style="border-radius: 7px; ">
                                        <span class="del-event">Discuss</span>
                                    </div>
                                </div>
                                <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                    <div @click="setView('introduce')"
                                        class="py-2 p-2 px-3  bg-hover bb f-500 introduce" style="border-radius: 7px;">
                                        <span class="del-event">Introduce</span>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-light px-2 " data-bs-toggle="dropdown" aria-expanded="false"
                                style="border-radius: 5px; cursor: pointer;">
                                <div class="dropdown">
                                    <i class="fas fa-ellipsis-h"></i>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Send invite</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <router-view v-if="view == 'discuss'" :info="data" :viewType="viewType"
                @countPostApproval="handleCountPostApproval" name="discuss" :myInfo="myInfo"></router-view>
            <router-view v-else-if="view == 'member'" :viewType="viewType" name="member"></router-view>
            <router-view v-else-if="view == 'introduce'" :info="data" name="introduce"></router-view>
        </div>

        <div v-else>
            <div class="col-sm-12 text-center">
                <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader"
                    style="height: 100px;">
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
import baseFunction from '../../../../core/coreFunction';
export default {
    data() {
        return {
            list_friends: [],
            urlImg: url,
            list_invite: [],
            id_group: '',
            data: {},
            member: [],
            isView: null,
            isViewInvite: false,
            view: 'discuss',
            id_notification: null,
            infoClient: {},
            notification: {},
            moveOver: false,
            info: {},
            viewType: null,
            checkRequest: null,
            process: null,
            wait: {
                status: false,
                path: ''
            },
            post_approval: [],
        }

    },
    props: {
        send_active_all_member: {
            type: Object,
            required: true
        },
        myInfo: {
            type: Object,
            required: true
        },
        infoGroup: {
            type: Object
        },
        listPost: {
            type: Array,
        },
    },
    watch: {
        infoGroup: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.isView = true;
                    this.data = newValue.info;
                    this.member = newValue.member;
                }
            },
            immediate: true
        },
        send_active_all_member: {
            handler(value) {
                if (value != null) {
                    this.wait.status = true
                    this.wait.path = value.path
                }
            },
            deep: true,
            immediate: true
        },
        '$route.params.id_group'(id_group) {
            this.id_group = id_group;
        },
        data: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.id_notification = this.$route.query.id_notification;
                    if (this.id_notification) {
                        this.getInfoInvite(this.id_notification);
                        this.isViewInvite = true;
                    }

                    setTimeout(() => {
                        const currentPath = this.$route.fullPath.toString().split('/').pop()
                        if (currentPath == 'discuss' || currentPath == 'member' || currentPath == 'event' || currentPath == 'photo' || currentPath == 'introduce') {
                            this.setView(currentPath)
                        } else {
                            this.setView('discuss')
                        }
                    }, 1);
                }
            },
            deep: true, // Sử dụng deep watch để theo dõi các thay đổi sâu
            immediate: true, // Kích hoạt handler ngay từ khi component được khởi tạo
        },
        listPost: {
            handler(newValue) {
                if (newValue) {
                    this.post_approval = [...newValue]
                }
            }
        }
    },
    mounted() {
        this.id_group = this.$route.params.id_group;
        this.getListFriend();
        this.checkRole();
        this.checkRequestGroup();
    },
    methods: {
        handleCountPostApproval(value) {
            this.post_approval.push(value)
        },
        dateCountdown(a) {
            return baseFunction.hoursDifference(a);
        },
        undoRequest() {
            axios
                .post('groups/undo-request', { id_group: this.id_group })
                .then((res) => {
                    baseFunction.displaySuccess(res);
                    this.checkRequest = 0;
                })
        },
        checkRequestGroup() {
            axios
                .post('groups/check-request', { id_group: this.id_group })
                .then((res) => {
                    this.checkRequest = res.data.check;
                    if (this.checkRequest == -1) {
                        this.infoClient = res.data.client[0]
                        this.isViewInvite = true
                    }
                })
        },
        joinGroup() {
            axios
                .post('groups/come-in-group', this.data)
                .then((res) => {
                    baseFunction.displaySuccess(res);
                    this.checkRequest = 1
                })
        },
        checkRole() {
            axios
                .post('groups/check-role', { id_group: this.id_group })
                .then((res) => {
                    this.viewType = res.data.viewType
                    if (this.wait.status == true) {
                        setTimeout(() => {
                            $('.ct').removeClass('border-bottomm');
                            const parent = $('.' + this.wait.path).parent();
                            parent.addClass('border-bottomm');
                            $('.bb:not(.bg-hover)').addClass('bg-hover');
                            $('.' + this.wait.path).removeClass('bg-hover');
                        }, 1);
                    }
                })
        },
        copyLink() {
            const inputElement = document.createElement('input');
            inputElement.value = window.location.href;
            document.body.appendChild(inputElement);
            inputElement.select();
            document.execCommand('copy');
            document.body.removeChild(inputElement);
            var res = {
                data: {
                    status: 1,
                    message: "Copy path successfully!"
                }
            }
            baseFunction.displaySuccess(res);
        },
        getInfoInvite(a) {
            axios
                .post('notification/info-invite', { id: a })
                .then((res) => {
                    this.infoClient = res.data.client;
                    this.notification = res.data.notification;
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'error');
                    });
                });
        },
        sendInvite() {
            var payload = {
                id_invites: this.list_invite,
                id_group: this.id_group
            };
            axios
                .post('groups/send-invite', payload)
                .then((res) => {
                    baseFunction.displaySuccess(res);
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'error');
                    });
                });
        },
        open() {
            this.list_invite.splice(0);
            $('.check_input').prop('checked', false);
        },
        setView(a) {
            $('.ct').removeClass('border-bottomm');
            const parent = $('.' + a).parent();
            parent.addClass('border-bottomm');
            $('.bb:not(.bg-hover)').addClass('bg-hover');
            $('.' + a).removeClass('bg-hover');
            this.view = a;
            this.$router.push({ name: a });
        },
        getListFriend() {
            axios
                .post('groups/data-invite-detail', { id_group: this.$route.params.id_group })
                .then((res) => {
                    this.list_friends = res.data.data;
                });
        },
        choose(k, v) {
            if ($('#invite' + k).is(':checked')) {
                $('#invite' + k).prop('checked', false);
                this.list_invite.splice(this.list_invite.indexOf(k), 1);
            }
            else {
                $('#invite' + k).prop('checked', true);
                this.list_invite.push(v);
            }
        },
        acceptInvite() {
            var payload = {
                status: true,
                notify: this.notification
            };
            var a = {
                id_client: this.myInfo.id,
                my_id: this.infoClient.id,
                id_group: this.data.id
            }
            axios
                .post('notification/accept-invite', a)
                .then((res) => {
                    baseFunction.displaySuccess(res);
                    this.isViewInvite = false;
                    if (this.data.join_approval == 1) {
                        this.viewType = 3;
                    } else {
                        this.viewType = 1;
                    }
                    this.$emit('removeNotify', payload);
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'error');
                    });
                });
        },
        removeInvite() {
            var payload = {
                status: false,
                notify: this.notification
            };
            axios
                .post('notification/remove-invite', this.notification)
                .then((res) => {
                    this.isViewInvite = false;
                    this.$emit('removeNotify', payload);
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'error');
                    });
                });
        },
        over(v) {
            this.info = v;
            const myDiv = this.$refs.modalComponent;
            const mh = window.innerHeight;
            const rect = myDiv.getBoundingClientRect();
            this.bottomPosition = rect.bottom - mh;
            if (this.bottomPosition > 10) {
                $('.modal-component').css('transform', 'translate(1.3rem, -2.7rem)');
                $('.modal-component').css('inset', ' auto auto 0px 0px');
            } else {
                $('.modal-component').css('transform', 'translate(1.3rem, 2.7rem)');
                $('.modal-component').css('inset', ' 0px auto auto  0px');
            }
        },

    },
}
</script>
<style>
@import './style.css';
</style>