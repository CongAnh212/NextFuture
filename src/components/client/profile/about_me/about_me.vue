<template >
    <div class="card" style="box-shadow: 0 0 10px #00000029;">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12 ps-4">
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="v-pills-basicinfo-tab" role="tabpanel"
                            aria-labelledby="v-pills-basicinfo-tab">
                            <h4 class="text-center">
                                <b class="text-dark">Information</b>
                            </h4>
                            <hr>
                            <div class="row">
                                <div class="col-3">
                                    <h6>Email</h6>
                                </div>
                                <div class="col-9">
                                    <p class="mb-0">{{ info.email }}</p>
                                </div>
                                <div class="col-3">
                                    <h6>Mobile</h6>
                                </div>
                                <div class="col-9">
                                    <p class="mb-0">{{ info.phone_number }}</p>
                                </div>
                                <div class="col-3">
                                    <h6>Address</h6>
                                </div>
                                <div class="col-9">
                                    <p class="mb-0">{{ info.address }}</p>
                                </div>
                            </div>
                            <div v-if="link_address.length > 0">
                                <h4 class="mt-3">Websites and Social Links</h4>
                                <hr>
                                <div class="row" v-for="(v, k) in link_address">
                                    <div class="col-1 d-flex align-items-center">
                                        <h6>
                                            <i :class="v.icon" style="font-size: 1.5rem;"></i>
                                        </h6>
                                    </div>
                                    <div class="col-11 d-flex align-items-center">
                                        <p class="mb-0">
                                            <a target="_blank" class="f-500" :href="v.link">{{ v.link }}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div v-else></div>
                            <h4 class="mt-3">Basic Information</h4>
                            <hr>
                            <div class="row">
                                <div class="col-3">
                                    <h6>Date of birth</h6>
                                </div>
                                <div class="col-9">
                                    <p class="mb-0">{{ info.date_of_birth }}</p>
                                </div>
                                <div class="col-3">
                                    <h6>Gender</h6>
                                </div>
                                <div class="col-9">
                                    <p class="mb-0">{{ info.gender == 0 ? 'Female' : info.gender == 1 ? 'Male' : 'Other' }}
                                    </p>
                                </div>
                                <div class="row" v-if="info.bio">
                                    <div class="col-3">
                                        <h6>Bio</h6>
                                    </div>
                                    <div class="col-9">
                                        <p class="mb-0" style="white-space: pre-line;">
                                            {{ info.bio }}
                                        </p>
                                    </div>
                                </div>
                                <div v-else></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest'
import baseFunction from '../../../../core/coreFunction'
export default {
    data() {
        return {
            info: {},
            urlImg: url,
            link_address: [],
        }
    },
    mounted() {
        this.getInformation();
    },
    watch: {
        '$route.params.username'() {
            this.getInformation()
        }
    },
    methods: {
        getInformation() {
            axios
                .get(this.$route.params.username + '/data-about-me')
                .then((res) => {
                    this.info = res.data.data
                    this.link_address = res.data.link_address
                });
        }
    },
}
</script>
<style ></style>