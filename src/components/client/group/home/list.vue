<template>
    <div class="w-100 d-flex " style="border-radius: 10px; padding: 0.45rem 0rem;">
        <div class="me-2 flex-center" style="overflow: hidden; width: 53px; height: 53px; border-radius: 15px;"><img
                :src="urlImg + data.cover_image" alt="" style="object-fit: cover; height: 100%;"></div>
        <div class="d-flex justify-content-center" style="flex: 1 1 0%; flex-direction: column; line-height: 1.25rem;"><b
                style="font-size: 15px;">{{ data.group_name }}</b>
            <p class="p-0 m-0"> {{ data.privacy == 1 ? 'Public' : 'Private' }} group - {{ data.member }} members</p>
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
                <div class=" py-1 pe-0 bg-hover aa" @click="setList" style="width: 98%; border-radius: 7px;">Browse</div>
            </div>
        </div>
        <div class="text-center " style="flex: 1">
            <div class=" flex-center border-bottomm" style="width: 100%; cursor: pointer; ">
                <div class=" py-1 pe-0 aa" @click="setList" style="width: 98%; border-radius: 7px;">Manager</div>
            </div>
        </div>
    </div>
    <hr class="mt-0 pt-0">
    <div @click="community('home-group', $event)" class="w-100  d-flex p-2 community-active"
        style="border-radius: 7px; cursor: pointer;">
        <i class=" del-event fas fa-home  me-2 " style="font-size: 20px; padding-top: 0.2rem;"></i>
        <span class="del-event">Community homepage</span>
    </div>
    <div @click="community('overview', $event)" class="w-100  d-flex p-2 " style="border-radius: 7px; cursor: pointer;">
        <i class=" del-event fas fa-layer-group me-2 " style="font-size: 20px; padding-top: 0.2rem;"></i>
        <span class="del-event">Overview</span>
    </div>
    <hr class="pt-0">
    <div @click="community('setting', $event)" class="w-100  d-flex p-2 " style="border-radius: 7px; cursor: pointer;">
        <i class=" del-event fas fa-cog me-2 " style="font-size: 20px; padding-top: 0.2rem;"></i>
        <span class="del-event">Group management</span>
    </div>
    <div @click="community('request_group', $event)" class="w-100  d-flex p-2 "
        style="border-radius: 7px; cursor: pointer;">
        <i class="fa-solid fa-user-pen me-2" style="font-size: 20px; padding-top: 0.2rem;"></i>
        <span class="del-event">Request to join the group ({{ count }})</span>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
export default {
    data() {
        return {
            id_group: '',
            data: {},
            urlImg: url,
            data_come_in: [],
            count: 0,
        }
    },

    mounted() {
        this.id_group = this.$route.params.id_group;
        this.getInfo();
        this.getDataComeIn();
    },
    props: {
        approve_Connection: {
            type: Object,
            required: true,
        },
        refuse_Connection: {
            type: Object,
            required: true,
        }
    },
    props: {
        getPrivacy: {
            type: Number,
            required: true
        }
    },
    watch: {
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
            console.log('oldData: ', oldData);
            console.log('newData: ', newData);
            this.data.privacy = newData;
        }
    },
    methods: {
        getInfo() {
            axios
                .get('groups/' + this.id_group)
                .then((res) => {
                    this.data = res.data.info;
                });
        },
        getDataComeIn() {
            axios
                .post('groups/data-come-in-group', { id_group: this.id_group })
                .then((res) => {
                    this.data_come_in = res.data.data
                    this.count = this.data_come_in.length
                })
        },
        community(a, event) {
            const el = event.target;
            $('.community-active').removeClass('community-active')
            el.classList.add('community-active');
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