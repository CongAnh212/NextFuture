<template>
    <div class="modal fade" id="modalFriend" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
                <div class="modal-body ">
                    <div class="d-flex align-items-center">
                        <div style="flex:1">
                            <h1 class="modal-title fs-5 f-500" id="exampleModalLabel">Friends</h1>
                        </div>
                        <i data-bs-dismiss="modal" aria-label="Close" class="fa-solid fa-xmark text-dark me-1"
                            style="font-size: 25px; cursor: pointer;"></i>
                    </div>
                    <div class="text-white">
                        <div type="button" data-bs-dismiss="modal" aria-label="Close">
                        </div>
                    </div>
                    <hr class="m-0 w-100">
                    <div>
                        <div class="iq-search-bar device-search w-100 mt-1 mb-1 ">
                            <div action="#" class="searchbox w-100">
                                <a class="search-link flex-center h-100" href="#">
                                    <i class="ri-search-line">
                                    </i>
                                </a>
                                <input v-model="key_search" @input="search_name()" type="text" class="text search-input"
                                    placeholder="Search friend..." style="border-radius:50px;">
                            </div>
                        </div>
                        <div class="mt-3 ms-3 me-3" style="overflow-y: auto; height: 20rem ;">
                            <div class="d-flex align-items-center" v-for="(v, k) in list_search">
                                <div class="d-flex " style="flex:1">
                                    <router-link :to="{ name: 'detailProfile', params: { username: v.username } }"
                                        class="text-dark f-500">
                                        <div style="height: 3rem; width: 3rem;margin-left: 0px; overflow: hidden;"
                                            class="circle me-2 mb-2 flex-center ">
                                            <img :src="urlImg + v.avatar" class="img-fluid " alt="user"
                                                style="object-fit: cover; width: 100%; height: 100%;" data-bs-dismiss="modal"
                                                aria-label="Close">
                                        </div>
                                    </router-link>
                                    <div style="line-height: 20px;">
                                        <div class="text-start">
                                            <router-link :to="{ name: 'detailProfile', params: { username: v.username } }"
                                                class="text-dark f-500">
                                                <span data-bs-dismiss="modal" aria-label="Close" class="oke ">
                                                    {{ v.nickname }}
                                                </span>
                                            </router-link>
                                        </div>
                                        <div class="text-start">{{ v.fullname }}</div>
                                    </div>
                                </div>
                                <button v-if="v.status == 'Confirm'" class="btn btn-primary btn-sm me-1 f-500"
                                    style="width: 6rem;" @click="confirm(v, k)">
                                    Confirm
                                </button>
                                <button v-else-if="v.status == 'Add friend'" class="btn btn-primary btn-sm me-1 f-500"
                                    style="width: 6rem;" @click="addFriend(v, k)">
                                    Add friend
                                </button>
                                <button v-else-if="v.status == 'Tancel'" class="btn btn-light btn-sm me-1 f-500"
                                    style="width: 6rem;" @click="cancel(v, k)">
                                    Cancel
                                </button>
                                <button v-else-if="v.status == 'Unfriend'" class="btn btn-light btn-sm me-1 f-500"
                                    style="width: 6rem;" @click="unfriend(v, k)">
                                    Unfriend
                                </button>
                                <button v-else-if="v.status == 'Loading'" class="btn btn-light btn-sm me-1 f-500"
                                    style="width: 6rem;">
                                    <img src="../../../assets/client/images/page-img/loading.gif" alt="loader"
                                        style="height: 1.5rem;object-fit: cover;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest'
import baseFunction from '../../../core/coreFunction'
export default {
    data() {
        return {
            urlImg: url,
            key_search: '',
            list_search: [],
        }
    },
    props: {
        listFriend: {
            type: Array,
            required: true
        }
    },
    watch: {
        listFriend(newData, oldData) {
            if (oldData) {
                this.key_search = ""
                this.list_search = this.listFriend
            }
        }
    },
    mounted() {
        this.list_search = this.listFriend
        this.key_search = ""
    },
    methods: {
        search_name() {
            const lowercaseSearch = this.key_search.toLowerCase();

            this.list_search = this.listFriend.filter((value) => {
                const lowercaseFullname = value.fullname.toLowerCase();
                const lowercaseNickname = value.nickname.toLowerCase();

                return lowercaseFullname.includes(lowercaseSearch) ||
                    lowercaseNickname.includes(lowercaseSearch);
            });
        },
        unfriend(v, k) {
            this.listFriend[k].status = 'Loading'
            axios
                .post('delete-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.listFriend[k].status = 'Add friend'
                    } else {
                        baseFunction.displaySuccess(res)
                    }
                })
        },
        cancel(v, k) {
            this.listFriend[k].status = 'Loading'
            axios
                .post('follower/cancel-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.listFriend[k].status = 'Add friend'
                    } else {
                        baseFunction.displaySuccess(res)
                    }
                })
        },
        confirm(v, k) {
            this.listFriend[k].status = 'Loading'
            axios
                .post('follower/accept-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.listFriend[k].status = 'Unfriend'
                        this.listFriend
                    } else {
                        baseFunction.displaySuccess(res)
                    }
                })
        },
        addFriend(v, k) {
            this.listFriend[k].status = 'Loading'
            axios
                .post('follower/add-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.listFriend[k].status = 'Cancel'
                    } else {
                        baseFunction.displaySuccess(res)
                    }
                })
        },
    },
}
</script>
<style></style>