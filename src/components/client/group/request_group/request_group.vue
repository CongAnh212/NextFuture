<template >
    <div style="min-height: calc(100vh - 4.688rem);">
        <div class="bg-white mb-4">
            <div class="flex-center pt-4 pb-2" style="gap:17%">
                <div>
                    <h5>
                        <b>
                            Request to join the group ({{ data_come_in.length }})
                        </b>
                    </h5>
                </div>
                <div v-if="data_come_in.length >= 2">
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
                        <div action="#" class="searchbox w-100"><a class="search-link my-auto h-100 flex-center" href="#"><i
                                    class="ri-search-line my-auto"></i></a><input type="text" class="text search-input"
                                placeholder="Search by name..." style="border-radius:50px;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="(v, k) in data_come_in" class="flex-center" style="width: 100%;">
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
                            <button class="btn btn-primary me-2 btn-sm" style="width: 150px;" @click="approveConnection(v)">
                                Approve
                            </button>
                            <button class="btn btn-secondary  btn-sm" style="width: 150px;"
                                @click="refuseConnection(v)">Refuse</button>
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
    data() {
        return {
            data_come_in: [],
            urlImg: url,
        }
    },
    mounted() {
        this.getDataComeIn();
    },
    methods: {
        getDataComeIn() {
            axios
                .post('groups/data-come-in-group', { id_group: this.$route.params.id_group })
                .then((res) => {
                    this.data_come_in = res.data.data
                })
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
                    this.getDataComeIn()
                })
        },
        approveConnectionAll() {
            var payLoad = {
                ...this.data_come_in,
                status: true,
                add_member: this.data_come_in.length
            }
            this.$emit("approve_connection", payLoad)
            var payload = {
                ...this.data_come_in,
                id_group: this.$route.params.id_group
            }
            axios
                .post('groups/approve-connection-all', payload)
                .then((res) => {
                    coreFuntion.displaySuccess(res)
                    this.getDataComeIn()
                })
        },
        refuseConnection(v) {
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
                    this.getDataComeIn()
                })
        },
        refuseConnectionAll() {
            var payLoad = {
                ...this.data_come_in,
                status: true
            }
            this.$emit("refuse_connection", payLoad)
            var payload = {
                ...this.data_come_in,
                id_group: this.$route.params.id_group
            }
            axios
                .post('groups/refuse-connection-all', payload)
                .then((res) => {
                    coreFuntion.displaySuccess(res)
                    this.getDataComeIn()
                })

        }
    },
}
</script>
<style ></style>