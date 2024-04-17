<template>
    <div v-if="loading == 0">
        <div class="flex-center">
            <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
        </div>
    </div>
    <div v-else-if="listPost.length > 0 && myInfo" style="min-height: calc(100vh - 4.688rem);">
        <div class="mb-4">
            <div class="flex-center pt-4 pb-2" style="gap:17%">
                <div>
                    <h5>
                        <b>
                            Awaiting Approval ({{ listPost.length }})
                        </b>
                    </h5>
                </div>
                <div>
                    <button @click="approveSelect" style="width: 7rem;" class="btn btn-primary me-2">
                        {{ (listChecked.length == 0 || listChecked.length == listPost.length) ? 'Approve all' : 'Approve' }}
                    </button>
                    <button @click="refuseSelect" style="width: 7rem;" class="btn btn-secondary">
                        {{ (listChecked.length == 0 || listChecked.length == listPost.length) ? 'Refuse all' : 'Refuse' }}
                    </button>
                </div>

            </div>
            <div class="flex-center pb-3">
                <div class="" style="width: 50vw;">
                    <div class="iq-search-bar device-search w-100 mt-1 mb-1" style="padding:0px !important;">
                        <div action="#" class="searchbox w-100">
                            <a class="search-link my-auto h-100 flex-center" href="#">
                                <i class="ri-search-line my-auto">
                                </i>
                            </a>
                            <input v-model="key_search" @input="searchPost()" type="text" class="text search-input"
                                placeholder="Search by name..." style="border-radius:50px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container ">
            <template v-for="(v, k) in list_search_post">
                <div v-if="true">
                    <div class="d-flex" style="position: relative">
                        <div class="d-flex flex-column align-items-center">
                            <div class="circle-50" style="overflow: hidden">
                                <img v-if="!v.privacy" :src="urlImg + v.avatar"
                                    style="object-fit: cover; width: 100%; height: 100%" alt="" />
                                <img v-else src="../../../../assets/img/avatar-an-danh.png"
                                    style="object-fit: cover; width: 100%; height: 100%" alt="" />
                            </div>
                            <div class="flex-1 radius-10 my-1" style="border-left: 3px solid #3f3f3f4e; width: 0" />
                            <div class="circle flex-center bg-hover"
                                style="width: 1.5rem; height: 1.5rem; overflow: hidden">
                                <img :src="urlImg + myInfo.avatar" style="object-fit: cover; height: 100%; width: 100%"
                                    alt="" />
                            </div>
                        </div>
                        <div class="flex-1 ps-3" style="position: relative">
                            <div class="flex-between">
                                <div class="d-flex flex-column">
                                    <div class="flex-center">
                                        <router-link v-if="!v.privacy" class="text-hover text-dark" :to="{
                                            name: 'detailProfile',
                                            params: { username: v.username ? v.username : ' ' },
                                        }"><b style="color: #000; font-size: 1.1rem">
                                                {{ v.fullname }}</b>
                                        </router-link>
                                        <div v-else class="text-hover text-dark c-pointer">
                                            <b style="color: #000; font-size: 1.1rem">Anonymous member</b>
                                        </div>

                                        <i class="fa-solid fa-circle mx-1" style="font-size: 0.3em"></i>
                                        <small>{{ formatTime(v.created_at) }}</small>
                                    </div>
                                    <span v-if="v.caption" class="f-500 text-dark">{{ v.caption }}</span>
                                </div>
                                <div class="d-flex flex-column">
                                    <div class="flex-center" style="height: 3rem">
                                        <div class="d-flex align-items-center" style="gap: 1px; font-size: 1.5rem">
                                            <input @click="selectPost(v, k)" type="checkbox" class="false-checkbox"
                                                style="width: 1.5rem; height: 1.5rem;">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ViewImageComponent v-if="v.images" :images="v.images" :k="k" class="mt-1" style="
                            position: relative;
                            left: calc(-100px + 1.25rem);
                            width: calc(100% + 80px);
                        " @openModal="getIndexOpenModal" />


                            <button @click="approvePost(v, k)" class="btn btn-primary me-2">
                                Approve
                            </button>
                            <button @click="refusePost(v, k)" class="btn btn-secondary">
                                Refuse
                            </button>

                        </div>
                    </div>
                    <hr class="my-3" />
                </div>
            </template>
        </div>
    </div>
    <div v-else class="pt-5 w-100" style="min-height: calc(100vh - 4.688rem);">
        <div style="height: fit-content;" class=" flex-center flex-column"><img style="width: 10rem;"
                src="https://www.facebook.com/images/comet/empty_states_icons/files/null_states_files_dark_mode.svg" alt="">
            <h3><b>There are no posts to review yet</b></h3>
        </div>

    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest'
import baseFunction from '../../../../core/coreFunction'
import ViewImageComponent from '../../home/viewImage.vue'
export default {
    components: { ViewImageComponent },
    props: {
        myInfo: Object,
        listPost: Array,
    },
    watch: {
        listPost: {
            handler(newV, oldV) {
                console.log('newV: ', newV);
                this.list_search_post = newV
                this.loading = 1
            },
            deep: true,
            immediate: true,
            listPost(oldData) {
                console.log('oldData: ', oldData);
                if (oldData) {
                    this.key_search = ""
                    this.list_search_post = oldData
                }
            }
        },
    },
    data() {
        return {
            loading: 0,
            urlImg: url,
            listChecked: [],
            key_search: '',
            list_search_post: [],
        }
    },
    mounted() {
        this.list_search_post = this.listPost;
        this.key_search = '';
    },
    methods: {
        searchPost() {
            const lowercaseSearch = this.key_search.toLowerCase();
            this.list_search_post = this.listPost.filter((value) => {
                const lowercaseFullname = value.fullname.toLowerCase();
                const lowercaseCaption = value.caption.toLowerCase();
                return lowercaseFullname.includes(lowercaseSearch) || lowercaseCaption.includes(lowercaseSearch);
            });
        },
        approvePost(v, k) {
            axios
                .post('groups/post/approve', v)
                .then((res) => {
                    this.emitter.emit('deleteSelectPostInBrowsePost', [v.id]) // đưa đến groups/home/list
                    baseFunction.displaySuccess(res)
                    this.searchPost();
                })
        },
        approveSelect() {
            if (this.listChecked.length == 0) {
                this.listChecked = this.listPost.map(element => element.id);
            }
            axios
                .post('groups/post/approve-select', { listID: this.listChecked })
                .then((res) => {
                    this.emitter.emit('deleteSelectPostInBrowsePost', this.listChecked) // đưa đến groups/home/list
                    this.listChecked = []
                    $('.false-checkbox').prop('checked', false);
                    baseFunction.displaySuccess(res)
                    this.searchPost();
                })
        },
        refusePost(v, k) {
            axios
                .post('groups/post/refuse', v)
                .then((res) => {
                    this.emitter.emit('deleteSelectPostInBrowsePost', [v.id]) // đưa đến groups/home/list
                    baseFunction.displaySuccess(res)
                    this.searchPost();
                })
        },
        refuseSelect() {
            if (this.listChecked.length == 0) {
                this.listChecked = this.listPost.map(element => element.id);
            }
            axios
                .post('groups/post/refuse-select', { listID: this.listChecked })
                .then((res) => {
                    this.emitter.emit('deleteSelectPostInBrowsePost', this.listChecked) // đưa đến groups/home/list
                    this.listChecked = []
                    $('.false-checkbox').prop('checked', false);
                    baseFunction.displaySuccess(res)
                    this.searchPost();
                })
        },
        selectPost(v, k) {
            if (this.listChecked.includes(v.id)) {
                this.listChecked.splice(this.listChecked.indexOf(v.id), 1)
            } else {
                this.listChecked.push(v.id)
            }
        },
        formatTime(a) {
            return baseFunction.hoursDifference(a)
        },
    },
}
</script>
<style></style>