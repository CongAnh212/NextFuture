<template>
    <div v-if="myInfo && loading" class="d-flex align-items-center flex-column">
        <div v-if="listSearchClient.length > 0" class=" p-2 mt-4 bg-white radius-7"
            style="width: 48%; box-shadow: 0 0 10px #8b8b8b34;">
            <h4><b class="text-dark">Everyone</b></h4>
            <div>
                <div v-for="(v, k) in listSearchClient" class="d-flex  align-items-center p-2 ps-0">
                    <div class="avatar-4 me-2">
                        <img :src="urlImg + v.avatar" alt="">
                    </div>
                    <div class="d-flex flex-column flex-1" style="line-height: 1.3rem;">
                        <router-link :to="{ name: 'detailProfile', params: { username: v.username } }">
                            <b class="text-dark text-hover">{{ v.fullname }} ({{ v.nickname }})</b>
                        </router-link>
                        <span>{{ v.relationship == 'a' ? 'Friend' : 'Stranger' }} - sống tại {{ v.address }}</span>
                        <span>{{ v.mutual }} tỷ bạn chung</span>
                    </div>
                    <button v-if="v.relationship == 'a'" class="btn btn-secondary"
                        style="width: 9rem;;height: fit-content;">Message</button>
                    <button v-else-if="v.relationship == 'b'" class="btn btn-primary"
                        style="width: 9rem;;height: fit-content;">Confirm</button>
                    <button v-else class="btn btn-primary" style="width: 9rem;;height: fit-content;"
                    @click="addFriend(v, k)">
                    Add Friend</button>
                </div>
                <button @click="handleClickSeeMore('client')" v-if="listSearchClient.length == 5"
                    class="btn btn-light w-100"><b>See more</b></button>
            </div>
        </div>
        <div v-if="listSearchGroup.length > 0" class=" p-2 mt-4 bg-white radius-7"
            style="width: 48%; box-shadow: 0 0 10px #8b8b8b34;">
            <h4><b class="text-dark">Groups</b></h4>
            <div>
                <div v-for="(v, k) in listSearchGroup" class="d-flex  align-items-center p-2 ps-0">
                    <div class=" me-2 flex-center radius-10" style="width: 4rem; height: 4rem; overflow: hidden;">
                        <img :src="urlImg + v.cover_image" alt="" style="object-fit: cover; width: 100%; height: 100%;">
                    </div>
                    <div class="d-flex flex-column flex-1" style="line-height: 1.3rem;">
                        <router-link :to="{ name: 'home-group', params: { id_group: v.id } }">
                            <b class="text-dark text-hover">{{ v.group_name }}</b>
                        </router-link>
                        <span>public - {{ v.member }} member</span>
                        <span>{{ v.posts }} bài viết / năm</span>
                    </div>
                    <button v-if="v.checkJoin" class="btn btn-secondary" style="height: fit-content; width: 9rem">Access to
                        group</button>
                    <button v-else class="btn btn-primary" style="height: fit-content; width: 9rem">Join group</button>
                </div>
            </div>
            <button @click="handleClickSeeMore('group')" v-if="listSearchGroup.length == 5"
                class="btn btn-light w-100"><b>See more</b></button>

        </div>
        <div v-if="listSearchClient.length == 0 && listSearchGroup.length == 0">
            <div class=" d-flex flex-column align-items-center p-5">
                <div class="circle bg-xanh flex-center mb-3" style="width:6rem; height:6rem;">
                    <i class="fas fa-search fa-2x"></i>
                </div>
                <h3 style="font-weight: 700;">No result is found.</h3>
            </div>
        </div>
    </div>
    <div v-else class="flex-center">
        <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest'
export default {
    props: {
        myInfo: Object,
        keySearch: {
            type: String,
        },
        typeViewSearch: String
    },
    watch: {
        keySearch: {
            handler(newV, oldV) {
                if (newV) {
                    if (!this.typeViewSearch) {
                        this.search(newV, 'all')
                        console.log('search-all');
                    } else {
                        this.search(newV, this.typeViewSearch)
                        console.log('this.typeViewSearch: ', this.typeViewSearch);
                    }
                }
            },
            // immediate: true
        },
        typeViewSearch: {
            handler(newV, oldV) {
                console.log('oldV: ', oldV);
                console.log('newV: ', newV);
                if (newV) {
                    this.search(this.keySearch, newV)
                } else {
                    this.search(this.keySearch, 'all')

                }
            },
            immediate: true
        },
    },
    data() {
        return {
            urlImg: url,
            listSearchClient: [],
            listSearchGroup: [],
            loading: 0
        }
    },
    mounted() {
        console.log('runb mounasdf');
    },
    methods: {
        search(v, type) {
            this.loading = 0
            axios
                .post('search', { keySearch: v, type: type })
                .then((res) => {
                    this.loading = 1
                    this.listSearchClient = res.data.dataSearchClient
                    this.listSearchGroup = res.data.dataSearchGroup
                })
        },
        handleClickSeeMore(a) {
            this.$emit('sendFromSearchComponent', a)
        },
        addFriend(v, k) {
            axios
                .post('follower/add-friend', v)
                .then((res) => {
                    this.listSearchClient[k].relationship = 'a'
                })
        }
    },
}
</script>
<style></style>