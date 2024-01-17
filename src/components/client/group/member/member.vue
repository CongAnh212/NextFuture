<template>
    <div v-if="isView" class="flex-center" style="width: 100%;">
        <div class="d-flex" style="gap: 20px; width: 80%;">
            <div class="card mt-3" style="border-radius: 15px; width: 55%;">
                <div class="card-body">
                    <b class="text-dark">All Member
                        ({{ total_member }})</b>
                    <div class="iq-search-bar device-search mt-2 mb-2">
                        <div action="#" class="searchbox">
                            <a class="search-link flex-center h-100" style="cursor: pointer;" @click="search()">
                                <i class="ri-search-line"></i>
                            </a>
                            <input v-model="keyword" @keyup.enter="search()" type="text" class="text search-input "
                                placeholder="Search member..." style="border-radius: 20px;">
                        </div>
                    </div>
                    <template v-if="member_friend.length > 0">
                        <b class="text-dark">Friends ({{ member_friend.length }})</b>
                        <div v-for="(v, k) in member_friend" class="d-flex align-items-center mb-2 mt-2" style=" ">
                            <div class="d-flex" style="flex: 1;">
                                <div class="circle flex-center me-2"
                                    style="width: 3.5rem; height: 3.5rem; overflow: hidden;">
                                    <img :src="urlImg + v.avatar" alt="" class="img-fluid"
                                        style="width: 100%; height: 100%;object-fit: cover;">
                                </div>
                                <div style="line-height: 1.5rem;">
                                    <router-link class="text-dark underline" style="font-weight: bold;"
                                        :to="{ name: 'detailProfile', params: { username: v.username } }">
                                        {{ v.fullname }}
                                    </router-link>
                                    <p class="mt-0 px-1"
                                        style="width: fit-content;background-color: #33333315; color: var(--bs-primary); border-radius: 5px;">
                                        {{ v.role }}
                                    </p>
                                </div>
                            </div>
                            <div v-if="viewType == 1" class="dropdown">
                                <button class="btn btn-light" style="position: relative; " type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <div v-if="k == indexx && role == 'friend'" style="position: relative;">
                                        <LoadingComponent />
                                    </div>
                                    <i v-else class="fa-solid fa-ellipsis"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li v-if="v.role != 'Post moderator' && v.role != 'Moderator'">
                                        <a class="dropdown-item" style="cursor: pointer;" @click="grantPermission(v, 3)">
                                            Grant permission to browse articles
                                        </a>
                                    </li>
                                    <li v-else>
                                        <a class="dropdown-item" style="cursor: pointer;" @click="removePermission(v, 3)">
                                            Remove permission to articles browse
                                        </a>
                                    </li>
                                    <li v-if="v.role != 'Member moderator' && v.role != 'Moderator'">
                                        <a class="dropdown-item" style="cursor: pointer;" @click="grantPermission(v, 4)">
                                            Grant permission to approve members
                                        </a>
                                    </li>
                                    <li v-else>
                                        <a class="dropdown-item" style="cursor: pointer;" @click="removePermission(v, 4)">
                                            Remove permission to approve members
                                        </a>
                                    </li>
                                    <li v-if="v.role == 'Moderator'">
                                        <a class="dropdown-item" style="cursor: pointer;" @click="removePermission(v, 5)">
                                            Remove moderator permissions
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" style="cursor: pointer;" data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                            @click="check_member = v; index = k; role = 'friend'">
                                            Remove member
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div v-else class="btn btn-primary ">
                                <i class="fab fa-facebook-messenger me-1"></i>
                                Message
                            </div>

                        </div>
                    </template>
                    <hr>
                    <b class="text-dark">Other members ({{ member_newbie.length }})</b>
                    <div v-for="(v, k) in member_newbie" class="d-flex align-items-center mb-2 mt-2" style=" ">
                        <div class="d-flex" style="flex: 1;">
                            <div class="circle flex-center me-2" style="width: 3.5rem; height: 3.5rem; overflow: hidden;">
                                <img :src="urlImg + v.avatar" alt="" class="img-fluid"
                                    style="width: 100%; height: 100%;object-fit: cover;">
                            </div>
                            <div style="line-height: 1.5rem;">
                                <router-link class="text-dark underline" style="font-weight: bold;"
                                    :to="{ name: 'detailProfile', params: { username: v.username } }">
                                    {{ v.fullname }}
                                </router-link>
                                <p class="mt-0 px-1"
                                    style="width: fit-content;background-color: #33333315; color: var(--bs-primary); border-radius: 5px;">
                                    {{ v.role }}
                                </p>
                            </div>
                        </div>
                        <div v-if="viewType == 1" class="dropdown">
                            <button class="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div v-if="k == indexx && role == 'other'" style="position: relative;">
                                    <LoadingComponent />
                                </div>
                                <i v-else class="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a style="cursor: pointer;" class="dropdown-item" @click="grantPermission(v, 3)">
                                        Grant permission to browse articles
                                    </a>
                                </li>
                                <li>
                                    <a style="cursor: pointer;" class="dropdown-item" @click="grantPermission(v, 4)">
                                        Grant permission to approve members
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                        @click="check_member = v; index = k; role = 'other'" style="cursor: pointer;">
                                        Remove member
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div v-else-if="viewType != 1 && v.status == 0" class="btn btn-primary "
                            @click="addFriend(v, k, 'other')">
                            <div style="font-size: 12px; width: 7rem;">
                                <i class="fas fa-user-plus me-1"></i>
                                Add friend
                            </div>
                        </div>
                        <div v-else-if="viewType != 1 && v.status == 1" class="btn btn-light "
                            @click="cancelRequest(v, k, 'other')">
                            <div style="font-size: 12px; width: 7rem;">
                                <i class="fas fa-user-times me-1"></i>
                                cancel request
                            </div>
                        </div>
                        <div v-else-if="viewType != 1 && v.status == -1" class="btn btn-light ">
                            <div style="font-size: 12px; width: 7rem;">
                                <img src="/src/assets/img/output-onlinegiftools.gif" style="width: 25px; height: 25px;">
                                Processing
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>

            </div>
            <div class="card mt-3 " style="border-radius: 15px; width: 45%; height: fit-content; position: sticky; top: 6rem;">
                <div class="card-body">
                    <b class="text-dark">Administrators ({{ member_admin.length }})</b>
                    <div v-for='(v, k) in member_admin' class="d-flex align-items-center mb-2 mt-2" style=" ">
                        <div class="d-flex" style="flex: 1">
                            <div class="circle flex-center me-2" style="width: 3.5rem; height: 3.5rem; overflow: hidden;">
                                <img :src="urlImg + v.avatar" alt="" class="img-fluid"
                                    style="width: 100%; height: 100%;object-fit: cover;">
                            </div>
                            <div style="line-height: 1.25rem;">
                                <router-link class="text-dark underline" style="font-weight: bold;"
                                    :to="{ name: 'detailProfile', params: { username: v.username } }">
                                    {{ v.fullname }}
                                </router-link>
                                <p class="mt-0 px-1"
                                    style="width: fit-content;background-color: #33333315; color: var(--bs-primary); border-radius: 5px;">
                                    {{ v.role }}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div v-if="viewType != 1 && v.status == 0" class="btn btn-primary "
                                @click="addFriend(v, k, 'admin')">
                                <div style="font-size: 12px; width: 7rem;">
                                    <i class="fas fa-user-plus me-1"></i>
                                    Add friend
                                </div>
                            </div>
                            <div v-else-if="viewType != 1 && v.status == 1" class="btn btn-light "
                                @click="cancelRequest(v, k, 'admin')">
                                <div style="font-size: 12px; width: 7rem;">
                                    <i class="fas fa-user-times me-1"></i>
                                    cancel request
                                </div>
                            </div>
                            <div v-else-if="viewType != 1 && v.status == -1" class="btn btn-light ">
                                <div style="font-size: 12px; width: 7rem;">
                                    <img src="/src/assets/img/output-onlinegiftools.gif" style="width: 25px; height: 25px;">
                                    Processing
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <b class="text-dark">Moderators ({{ member_moderator.length }})</b>
                    <div v-for="(v, k) in member_moderator" class="d-flex align-items-center mb-2 mt-2" style=" ">
                        <div class="d-flex" style="flex: 1;">
                            <div class="circle flex-center me-2" style="width: 3.5rem; height: 3.5rem; overflow: hidden;">
                                <img :src="urlImg + v.avatar" alt="" class="img-fluid"
                                    style="width: 100%; height: 100%;object-fit: cover;">
                            </div>
                            <div style="line-height: 1.25rem;">
                                <router-link class="text-dark underline" style="font-weight: bold;"
                                    :to="{ name: 'detailProfile', params: { username: v.username } }">
                                    {{ v.fullname }}
                                </router-link>
                                <p class="mt-0 px-1"
                                    style="width: fit-content;background-color: #33333315; color: var(--bs-primary); border-radius: 5px;">
                                    {{ v.role }}
                                </p>
                            </div>
                        </div>
                        <div v-if="viewType == 1" class="dropdown">
                            <button class="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div v-if="k == indexx && role == 'moderator'" style="position: relative;">
                                    <LoadingComponent />
                                </div>
                                <i v-else class="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li v-if="v.role != 'Post moderator' && v.role != 'Moderator'">
                                    <a style="cursor: pointer;" class="dropdown-item" @click="grantPermission(v, 3)">
                                        Grant permission to browse articles
                                    </a>
                                </li>
                                <li v-else>
                                    <a style="cursor: pointer;" class="dropdown-item" @click="removePermission(v, 3)">
                                        Remove permission to articles browse
                                    </a>
                                </li>
                                <li v-if="v.role != 'Member moderator' && v.role != 'Moderator'">
                                    <a style="cursor: pointer;" class="dropdown-item" @click="grantPermission(v, 4)">
                                        Grant permission to approve members
                                    </a>
                                </li>
                                <li v-else>
                                    <a style="cursor: pointer;" class="dropdown-item" @click="removePermission(v, 4)">
                                        Remove permission to approve members
                                    </a>
                                </li>
                                <li v-if="v.role == 'Moderator'">
                                    <a style="cursor: pointer;" class="dropdown-item" @click="grantPermission(v, 5)">
                                        Remove moderator permissions
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                        @click="check_member = v; index = k; role = 'moderator'" style="cursor: pointer;">
                                        Remove member
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div v-else-if="viewType != 1 && v.status == 0" class="btn btn-primary "
                            @click="addFriend(v, k, 'moderator')">
                            <div style="font-size: 12px; width: 7rem;">
                                <i class="fas fa-user-plus me-1"></i>
                                Add friend
                            </div>
                        </div>
                        <div v-else-if="viewType != 1 && v.status == 1" class="btn btn-light "
                            @click="cancelRequest(v, k, 'moderator')">
                            <div style="font-size: 12px; width: 7rem;">
                                <i class="fas fa-user-times me-1"></i>
                                cancel request
                            </div>
                        </div>
                        <div v-else-if="viewType != 1 && v.status == -1" class="btn btn-light ">
                            <div style="font-size: 12px; width: 7rem;">
                                <img src="/src/assets/img/output-onlinegiftools.gif" style="width: 25px; height: 25px;">
                                Processing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Remove member</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to remove
                            <b class="text-red">{{ check_member.fullname }}</b>
                            from the group?
                        </p>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-red" @click="removeMember()"
                            data-bs-dismiss="modal">Remove</button>
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
import baseFunction from '../../../../core/coreFunction'
import axios, { url } from '../../../../core/coreRequest'
import LoadingComponent from '../../../loading/loading.vue'
export default {
    components: {
        LoadingComponent
    },
    props: {
        viewType: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            member_newbie: [],
            member_friend: [],
            member_admin: [],
            member_moderator: [],
            urlImg: url,
            total_member: 0,
            check_member: {},
            index: 0,   // gắn index = k để lấy id 
            isView: false,
            role: null,
            indexx: null,
            keyword: '',
        }
    },
    mounted() {
        this.getMember();
        this.getMemberFriend();
        this.getMemberAdmin();
        this.getMemberModeration();
    },
    watch: {
        member_friend: {
            handler(newValue, oldValue) {
                this.indexx = -1
                if (oldValue) {
                    this.isView = true
                }
            },
        },
    },
    methods: {
        cancelRequest(v, k, obj) {
            if (obj == 'other') {
                this.member_newbie[k].status = -1;
            } else if (obj == 'admin') {
                this.member_admin[k].status = -1;
            } else {
                this.member_moderator[k].status = -1
            }
            axios
                .post('follower/cancel-friend', v)
                .then((res) => {
                    if (obj == 'other') {
                        this.member_newbie[k].status = 0;
                    } else if (obj == 'admin') {
                        this.member_admin[k].status = 0
                    } else {
                        this.member_moderator[k].status = 0
                    }
                })
        },
        addFriend(v, k, obj) {
            if (obj == 'other') {
                this.member_newbie[k].status = -1;
            } else if (obj == 'admin') {
                this.member_admin[k].status = -1;
            } else {
                this.member_moderator[k].status = -1
            }
            axios
                .post('follower/add-friend', v)
                .then((res) => {
                    if (obj == 'other') {
                        this.member_newbie[k].status = 1;
                    } else if (obj == 'admin') {
                        this.member_admin[k].status = 1
                    } else {
                        this.member_moderator[k].status = 1
                    }
                })
        },
        getMember() {
            axios
                .post('groups/members/data', { id_group: this.$route.params.id_group })
                .then((res) => {
                    this.member_newbie = res.data.data
                    this.total_member = res.data.count
                })
        },
        getMemberFriend() {
            axios
                .post('groups/members/data-friend', { id_group: this.$route.params.id_group })
                .then((res) => {
                    this.member_friend = res.data.data
                })
        },
        getMemberAdmin() {
            axios
                .post('groups/members/data-admin', { id_group: this.$route.params.id_group })
                .then((res) => {
                    this.member_admin = res.data.data
                })
        },
        getMemberModeration() {
            axios
                .post('groups/members/data-moderation', { id_group: this.$route.params.id_group })
                .then((res) => {
                    this.member_moderator = res.data.data
                })
        },
        removeMember() {
            this.indexx = this.index;
            var payload = {
                ...this.check_member,
                id_group: this.$route.params.id_group,
            }
            axios
                .post('groups/members/remove-member', payload)
                .then((res) => {
                    this.getMember();
                    this.getMemberFriend();
                    this.getMemberModeration();
                    baseFunction.displaySuccess(res)
                })
        },
        grantPermission(v, role) {
            var payload = {
                id_group: this.$route.params.id_group,
                id: v.id,
                id_role: role,
            }
            axios
                .post('groups/members/grant-permission', payload)
                .then((res) => {
                    this.getMember();
                    this.getMemberFriend();
                    this.getMemberModeration();
                    setTimeout(() => {
                        baseFunction.displaySuccess(res)
                    }, 500);
                })
        },
        removePermission(v, role) {
            var payload = {
                id_group: this.$route.params.id_group,
                id: v.id,
                id_role: role,
            }
            axios
                .post('groups/members/remove-permission', payload)
                .then((res) => {
                    this.getMember();
                    this.getMemberFriend();
                    this.getMemberModeration();
                    setTimeout(() => {
                        baseFunction.displaySuccess(res)
                    }, 500);
                })
        },
        search() {
            axios
                .post('groups/members/search-member', { id_group: this.$route.params.id_group, keyword: this.keyword })
                .then((res) => {
                    this.member_friend = res.data.dataFriend;
                    this.member_newbie = res.data.dataOther;
                    this.member_moderator = res.data.dataModerator;
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'Error');
                    });
                });
        }


    },
}
</script>
<style>
@import './style.css'
</style>