<template>
    <div v-if="isView">
        <div class="w-100  main-group" style="">
            <div class="w-100 h-100" style="">
                <div class="w-100 bg-primary flex-center"
                    style="overflow: hidden; border-radius: 0px 0px 10px 10px; height: 30em;">
                    <img :src="urlImg + data.cover_image" class="w-100 " style="object-fit: cover; width: 100%;">
                </div>
                <div class="w-100 px-2 pt-3 c">
                    <h3><b style="color: rgb(0, 0, 0);">{{ data.group_name }}</b></h3>
                    <div class="flex-between">
                        <div class="d-flex">
                            <div v-for="(v, k) in member" class="circle bg-primary"
                                style="height: 35px; width: 35px; outline: 2px solid rgb(255, 255, 255); overflow: hidden; margin-right: -2px;">
                                <img :src="urlImg + v.avatar" class="img-fluid" style="object-fit: cover; width: 100%;"
                                    alt="">
                            </div>
                        </div>
                        <div class="d-flex">
                            <div @click="open()" class="btn-primary px-2 f-500 radius-7 text-white me-2 invite"
                                data-bs-toggle="modal" data-bs-target="#inviteModal" style="cursor: pointer;">
                                <span style="font-size: 20px;">+
                                </span>
                                <span class="del-event">Invite</span>
                            </div>

                            <div class="btn-light px-2 f-500 radius-7 text-dark align-self-center py-1"
                                style="cursor: pointer;">
                                <i class="fas fa-share m-0 p-0 me-1"></i>
                                <span class="del-event">Share</span>
                            </div>

                        </div>
                        <div class="modal fade  " id="inviteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                                                                class="search-link my-auto h-100 flex-center" href="#"><i
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
                                                        <div class="  flex-center" style="width: 40px; height: 40px;">
                                                            <div class="form-check flex-center">
                                                                <input class="form-check-input check_input" type="checkbox"
                                                                    :value="k" :id="'invite' + k" style="cursor: pointer;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-5 " style="background-color: #33333315;">
                                                <p style="font-weight: 500; color: #333333b3;">selected {{
                                                    this.list_invite.length }} friends</p>
                                                <div @click="choose(k, v)" v-for="(v, k) in list_invite"
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
                                                    <div class="  flex-center" style="width: 40px; height: 40px;">
                                                        <i class="fas fa-times"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cancel</button>
                                        <button :disabled="list_invite.length == 0" @click="sendInvite()" type="button"
                                            class="btn btn-primary" data-bs-dismiss="modal">Send invite</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="w-100 bg-dark pb-0 mb-0">
                    <div class="text-dark flex-between" style="display:flex;gap:20px; margin-top: 5px;">
                        <div class="d-flex"> <!-- Left navbar -->
                            <div class="flex-center border-bottomm ct" style="width: 100%; cursor: pointer;">
                                <div @click="setView" class="py-1 p-2 px-3 bb f-500" style="border-radius: 7px; ">
                                    <span class="del-event">Discuss</span>
                                </div>
                            </div>
                            <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                <div @click="setView" class="py-1 p-2 px-3  bg-hover bb f-500" style="border-radius: 7px;">
                                    <span class="del-event">Member</span>
                                </div>
                            </div>
                            <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                <div @click="setView" class="py-1 p-2 px-3  bg-hover bb f-500" style="border-radius: 7px;">
                                    <span class="del-event">Event</span>
                                </div>
                            </div>
                            <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                                <div @click="setView" class="py-1 p-2 px-3  bg-hover bb f-500" style="border-radius: 7px;">
                                    <span class="del-event">Photos</span>
                                </div>
                            </div>
                        </div>
                        <div class="btn-light px-2 " data-bs-toggle="dropdown" aria-expanded="false"
                            style="border-radius: 5px; cursor: pointer;">
                            <div class="dropdown">
                                <i class="fas fa-ellipsis-h"></i>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">send invite</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-2" style="padding: 0px 8%;">
            <div class="w-100 px-2 mx-0 pt-2 row" style="flex: 1;  position: relative;   ">
                <div class=" col-7" style="">
                    <div class="card" style="border-radius: 10px; ">
                        <div class="card-body" style=" border-radius: 10px; box-shadow: 0px 0px 5px #33333345;">
                            <div class="w-100 d-flex align-items-center mb-3" style="gap:10px;pointer-events: none;">
                                <i class="far fa-user-circle " style="font-size: 30px;"></i>
                                <input type="text" class="form-control" placeholder="what are you thinking?"
                                    style="border-radius: 50px; user-select: none;">
                            </div>
                            <ul class="post-opt-block flex-around list-inline m-0 p-0 ">
                                <li class="mb-md-0"><a style="cursor: pointer;" class="">
                                        <img src="/src/assets/client/images/small/07.png" alt="icon" class="img-fluid">
                                        Photo/Video </a>
                                </li>
                                <li class="mb-md-0"><a style="cursor: pointer;" class="">
                                        <img src="/src/assets/client/images/small/08.png" alt="icon" class="img-fluid"> Tag
                                        Friend </a>
                                </li>
                                <li class=""><a style="cursor: pointer;" class="">
                                        <img src="/src/assets/client/images/small/09.png" alt="icon" class="img-fluid">
                                        Feeling/Activity </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class=" col-5">
                    <div class="card " style="border-radius: 10px;">
                        <div class="card-body b " style="border-radius: 10px; box-shadow: 0px 0px 5px #33333324;">

                            <span style="font-weight: 600;">Introduct</span>
                            <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                style="height: 65px; line-height: 18px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-globe-asia text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center"
                                    style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Public</b></h5>
                                        <p>Anyone can see everyone in the group and what they post</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="false" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                style="height: 65px; line-height: 18px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-lock text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center"
                                    style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Private</b></h5>
                                        <p>only members can see everyone in the group and what they post</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center" style="height: 65px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-eye text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center"
                                    style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Visible</b></h5>
                                        <p>Anyone can see this group</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="false" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                style="height: 65px;  line-height: 18px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-eye-slash text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center"
                                    style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Hidden</b></h5>
                                        <p>Only group members can see this group</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="col-sm-12 text-center">
                    <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
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
            isView: false,
        }
    },
    watch: {
        '$route.params.id_group'(id_group) {
            this.id_group = id_group;
            this.getInfo();
        },
        data: {
            handler(newValue, oldValue) {
                if (oldValue) {
                    this.isView = true;
                }
            },
            deep: true, // Sử dụng deep watch để theo dõi các thay đổi sâu
            immediate: true, // Kích hoạt handler ngay từ khi component được khởi tạo
        },
    },
    mounted() {
        this.id_group = this.$route.params.id_group;
        this.getInfo();
        this.getListFriend();
    },
    methods: {
        sendInvite() {
            var payload = {
                id_invites: this.list_invite,
                id_group: this.id_group
            }
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
        getInfo() {
            axios
                .get('groups/' + this.id_group)
                .then((res) => {
                    this.data = res.data.info;
                    this.member = res.data.member
                });
        },
        open() {
            this.list_invite.splice(0);
            $('.check_input').prop('checked', false);
        },
        setView(event) {
            const el = event.target;
            $('.ct').removeClass('border-bottomm');
            const parent = el.parentElement;
            parent.classList.add('border-bottomm')
            $('.bb:not(.bg-hover)').addClass('bg-hover');
            el.classList.remove('bg-hover');
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
            } else {
                $('#invite' + k).prop('checked', true);
                this.list_invite.push(v);
            }
        }
    },
}
</script>
<style>
@import './style.css';
</style>