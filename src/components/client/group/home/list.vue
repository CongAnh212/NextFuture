<template>
    <template v-if="viewType == 1">
        <div class="w-100 d-flex " style="border-radius: 10px; padding: 0.45rem 0rem;">
            <div class="me-2 flex-center" style="overflow: hidden; width: 53px; height: 53px; border-radius: 15px;"><img
                    :src="urlImg + data.cover_image" alt="" style="object-fit: cover; height: 100%;"></div>
            <div class="d-flex justify-content-center"
                style="flex: 1 1 0%; flex-direction: column; line-height: 1.25rem;">
                <b style="font-size: 15px;">{{ data.group_name }}</b>
                <p class="p-0 m-0"> {{ data.privacy == 1 ? 'Public' : 'Private' }} group -
                    <span class="members_hover" @click="fullMemberActive('member')">
                        {{ data.member }} members
                    </span>
                </p>
            </div>
        </div>
        <div class="w-100 d-flex">
            <button class="btn btn-primary me-2" style="flex: 1">
                <i class="fas fa-plus me-1"></i>Invite
            </button>
            <button class="btn btn-light" style=""><i class="fas fa-ellipsis-h"></i></button>
        </div>
        <div class="w-100 d-flex  pt-2">
            <div class="text-center " style="flex: 1">
                <div class=" flex-center " style="width: 100%; cursor: pointer; ">
                    <router-link :to="{ name: 'group' }" class=" py-1 pe-0 bg-hover aa"
                        style="width: 98%; border-radius: 7px;">
                        <div>
                            <i class="fa-solid fa-arrow-left me-1"></i>
                            Back to groups
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="text-center " style="flex: 1">
                <div class=" flex-center border-bottomm" style="width: 100%; cursor: pointer; ">
                    <div class=" py-1 pe-0 aa" @click="setList" style="width: 98%; border-radius: 7px;">Manager</div>
                </div>
            </div>
        </div>
        <hr class="mt-0 pt-0">
        <div @click="community('home-group', $event)" class="w-100  d-flex p-2 home-active group-active"
            style="border-radius: 7px; cursor: pointer;">
            <i class=" del-event fas fa-home  me-2 " style="font-size: 20px; padding-top: 0.2rem;"></i>
            <span class="del-event">Community homepage</span>
        </div>
        <div @click="community('overview', $event)" class="w-100  d-flex p-2 overview-active"
            style="border-radius: 7px; cursor: pointer;">
            <i class=" del-event fas fa-layer-group me-2 " style="font-size: 20px; padding-top: 0.2rem;"></i>
            <span class="del-event">Overview</span>
        </div>
        <hr class="pt-0">
        <div @click="community('setting', $event)" class="w-100  d-flex p-2 setting-active"
            style="border-radius: 7px; cursor: pointer;">
            <i class=" del-event fas fa-cog me-2 " style="font-size: 20px; padding-top: 0.2rem;"></i>
            <span class="del-event">Group management</span>
        </div>
        <div @click="community('request_group', $event)" class="w-100  d-flex p-2 member-requests-active"
            style="border-radius: 7px; cursor: pointer;">
            <i class="fa-solid fa-user-pen me-2" style="font-size: 20px; padding-top: 0.2rem;"></i>
            <span class="del-event">Request to join the group ({{ count }})</span>
        </div>
        <div @click="community('browse-posts', $event)" class="w-100 browse-posts-active d-flex p-2 "
            style="border-radius: 7px; cursor: pointer;">
            <i class="fa-solid fa-user-pen me-2" style="font-size: 20px; padding-top: 0.2rem;"></i>
            <span class="del-event">Browse posts ({{ countPost }})</span>
        </div>
    </template>
    <template v-else-if="viewType == 0 || viewType == 2">
        <div class="w-100 d-flex align-items-center" style="border-radius: 10px; padding: 0.45rem 0rem;">
            <div class="me-2 flex-center" style="overflow: hidden; width: 53px; height: 53px; border-radius: 15px;"><img
                    :src="urlImg + data.cover_image" alt="" style="object-fit: cover; height: 100%;"></div>
            <div class="d-flex justify-content-center"
                style="flex: 1 1 0%; flex-direction: column; line-height: 1.25rem;">
                <b style="font-size: 15px;">{{ data.group_name }}</b>
                <p class="p-0 m-0"> {{ data.privacy == 1 ? 'Public' : 'Private' }} group - {{ data.member }} members</p>
            </div>
            <router-link class="circle btn-light flex-center bg-hover"
                style="width: 40px; height: 40px; cursor: pointer;" :to="{ name: 'group' }">
                <i class="fas fa-sign-out-alt"></i>
            </router-link>
        </div>
    </template>
    <template v-else>
        <div class="flex-center">
            <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader"
                style="height: 100px;">
        </div>
    </template>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
export default {
    data() {
        return {
            id_group: '',
            data: {},
            urlImg: url,
            count: 0,
            viewType: null,
            send_all_member: {},
            infoGroup: {},
            listPost: [],
            countPost: 0,
        }
    },
    created() {

    },
    mounted() {
        this.id_group = this.$route.params.id_group;
        this.getInfo();
        this.getPost();
        this.getDataComeIn();
        this.checkRole();
        this.handleEmitter();
    },
    props: {
        sendAnonymous: {
            type: Object,
        },
        approve_Connection: {
            type: Object,
        },
        refuse_Connection: {
            type: Object,
        },
        getPrivacy: {
            type: Number,
        },
        send_active_overview_group: {
            type: Object,
        },
        send_rename_group: {
            type: String,
        }
    },
    watch: {
        sendAnonymous(newData) {
            console.log("newData: ", newData);
            if (newData) {
                this.data.anonymity = newData
            }
        },
        send_active_overview_group(value) {
            setTimeout(() => {
                $('.group-active').removeClass('group-active')
                $('.' + value.path + '-active').addClass('group-active')
            }, 1);
        },
        approve_Connection(newData, oldData) {
            // console.log('newData: ', newData);
            // console.log('oldData: ', oldData);
            if (newData.status == false) {
                this.count -= 1
                this.data.member += 1;
            } else {
                this.count = 0;
                this.data.member += newData.add_member
            }
        },
        refuse_Connection(newData, oldData) {
            // console.log('newData: ', newData);
            // console.log('oldData: ', oldData);
            if (newData.status == false) {
                this.count -= 1
            } else {
                this.count = 0;
            }
        },
        '$route.params.id_group'(id_group) {
            this.id_group = id_group;
            this.getInfo();
        },
        getPrivacy(newData, oldData) {
            this.data.privacy = newData;
        },
        send_rename_group(newData, oldData) {
            this.data.group_name = newData
        }

    },
    methods: {
        handleEmitter() {
            this.emitter.on('addPost', (a) => {
                this.listPost.unshift(a)
                this.countPost = this.listPost.length
            })
            this.emitter.on('deleteSelectPostInBrowsePost', (data) => {
                this.listPost = this.listPost.filter((value) => !data.includes(value.id));
                this.countPost = this.listPost.length
                this.$emit('reloadListPostToMainMasterPage', this.listPost)
            })
        },
        fullMemberActive(a) {
            this.send_all_member = {
                path: a,
                status: true,
            }
            $('.group-active').removeClass('group-active')
            $('.home-active').addClass('group-active')
            this.$emit('fullMemberActive', this.send_all_member)
            this.send_all_member.status = false
            this.$router.push({ name: a })
        },
        checkRole() {
            axios
                .post('groups/check-role', { id_group: this.id_group })
                .then((res) => {
                    this.viewType = res.data.viewType
                    var currentPath = window.location.href.split('/').pop();
                    if (currentPath == 'member' || currentPath == this.id_group) {
                        setTimeout(() => {
                            $('.' + currentPath + '-active').addClass('group-active')
                        }, 1);
                    } else {
                        setTimeout(() => {
                            $('.group-active').removeClass('group-active')
                            $('.' + currentPath + '-active').addClass('group-active')
                        }, 1);
                    }
                })
        },
        getInfo() {
            axios
                .get('groups/' + this.id_group)
                .then((res) => {
                    this.data = res.data.info;
                    this.infoGroup = res.data
                });
        },
        getPost() {
            axios
                .post('groups/post/data-approve', { id: this.$route.params.id_group })
                .then((res) => {
                    this.listPost = res.data.listPost
                    this.countPost = this.listPost.length

                })
        },
        getDataComeIn() {
            axios
                .post('groups/data-come-in-group', { id_group: this.id_group })
                .then((res) => {
                    this.count = res.data.data.length
                    var send = {
                        getDataComeIn: res.data.data,
                        infoGroup: this.infoGroup,
                        listPost: this.listPost
                    }
                    this.$emit('sendFromListHomeGroup', send)
                })
        },
        community(a, event) {
            const el = event.target;
            $('.group-active').removeClass('group-active')
            el.classList.add('group-active');
            this.$router.push({ name: a, params: { id_group: this.id_group } })
        },
        setList(event) {
            const e = event.target;
            $('.border-bottomm').removeClass('border-bottomm')
            const parentElement = e.parentElement;
            parentElement.classList.add('border-bottomm');
            $('.aa:not(.bg-hover)').addClass('bg-hover');
            e.classList.remove('bg-hover');
        },
    },
}
</script>
<style>
@import './style.css';
</style>