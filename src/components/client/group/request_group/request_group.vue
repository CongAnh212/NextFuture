<template>
    <div v-if="dataComeIn" style="min-height: calc(100vh - 4.688rem);">
        <div class="bg-white mb-4">
            <div class="flex-center pt-4 pb-2" style="gap:17%">
                <div>
                    <h5>
                        <b>
                            Request to join the group ({{ dataComeIn.length }})
                        </b>
                    </h5>
                </div>
                <div v-if="dataComeIn.length >= 2">
                    <button class="btn btn-primary me-2" @click="approveConnectionAll()">
                        Approve all
                    </button>
                    <button class="btn btn-secondary" @click="refuseConnectionAll()">
                        Refuse all
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
                            <input v-model="key_search" @input="searchRequestGroup()" type="text"
                                class="text search-input" placeholder="Search by name..." style="border-radius:50px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="(v, k) in list_search_request_group" class="flex-center" style="width: 100%;">
            <div class="card" style="width: 63%;">
                <div class="card-body">
                    <div class="d-flex" style="gap: 20%;">
                        <div class="d-flex align-items-center">
                            <div class="circle flex-center"
                                style="width: 4.5rem; height: 4.5rem; overflow: hidden; margin-right: 0.7em;">
                                <img :src="urlImg + v.avatar" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <div>
                                <b class="text-dark">{{ v.fullname }}</b>
                                <div class="text-nowrap">Request sent about {{ formatTime(v.created_at) }} ago</div>
                            </div>
                        </div>
                        <div class="flex-center">
                            <button class="btn btn-primary me-2 btn-sm" style="width: 150px;"
                                @click="approveConnection(v, k)">
                                Approve
                            </button>
                            <button class="btn btn-secondary  btn-sm" style="width: 150px;"
                                @click="refuseConnection(v, k)">Refuse</button>
                        </div>
                    </div>
                    <div style="width: 100%; padding-left: 10%;" class="mt-1">
                        <div class="mb-2">
                            <i class="fa-solid fa-user-group me-2" style="font-size: 15px;"></i>
                            <b class="text-dark">1 mutual friend</b>
                        </div>
                        <div class="mb-2">
                            <i class="fa-solid fa-users me-2" style="font-size: 15px;"></i>
                            <b class="text-dark">{{ v.groupParticipated }} group</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
import coreFuntion from '../../../../core/coreFunction'
export default {
    props: {
        dataComeIn: Array
    },
    watch: {
        dataComeIn(oldData) {
            if (oldData) {
                this.key_search = ""
                this.list_search_request_group = this.dataComeIn
            }
        }
    },
    data() {
        return {
            urlImg: url,
            key_search: '',
            list_search_request_group: [],
        }
    },
    mounted() {
        this.list_search_request_group = this.dataComeIn;
        this.key_search = "";
    },
    methods: {
        searchRequestGroup() {
            const lowercaseSearch = this.key_search.toLowerCase();
            this.list_search_request_group = this.dataComeIn.filter((value) => {
                const lowercaseFullname = value.fullname.toLowerCase();
                return lowercaseFullname.includes(lowercaseSearch);
            });
        },
        formatTime(a) {
            return coreFuntion.hoursDifference(a)
        },
        approveConnection(v, k) {
            var payLoad = {
                ...v,
                status: false,
            }
            this.$emit("approve_connection", payLoad)
            var payload = {
                ...v,
                id_group: this.$route.params.id_group
            }
            axios
                .post('groups/approve-connection', payload)
                .then((res) => {
                    coreFuntion.displaySuccess(res)
                    this.dataComeIn.splice(k, 1)
                })
        },
        approveConnectionAll() {
            var payLoad = {
                ...this.dataComeIn,
                status: true,
                add_member: this.dataComeIn.length
            }
            this.$emit("approve_connection", payLoad)
            var payload = {
                ...this.dataComeIn,
                id_group: this.$route.params.id_group
            }
            axios
                .post('groups/approve-connection-all', payload)
                .then((res) => {
                    coreFuntion.displaySuccess(res)
                    this.dataComeIn.splice(0, this.dataComeIn.length)
                })
        },
        refuseConnection(v, k) {
            var payLoad = {
                ...v,
                status: false
            }
            this.$emit("refuse_connection", payLoad)
            var payload = {
                ...v,
                id_group: this.$route.params.id_group
            }
            axios
                .post('groups/refuse-connection', payload)
                .then((res) => {
                    coreFuntion.displaySuccess(res)
                    this.dataComeIn.splice(k, 1)
                })
        },
        refuseConnectionAll() {
            var payLoad = {
                ...this.dataComeIn,
                status: true
            }
            this.$emit("refuse_connection", payLoad)
            var payload = {
                ...this.dataComeIn,
                id_group: this.$route.params.id_group
            }
            axios
                .post('groups/refuse-connection-all', payload)
                .then((res) => {
                    coreFuntion.displaySuccess(res)
                    this.dataComeIn.splice(0, this.dataComeIn.length)
                })

        }
    },
}
</script>
<style></style>