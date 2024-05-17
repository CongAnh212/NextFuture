<template>
    <ListPost v-if="isView == 1" :myInfo="info" :listPost="listPost" />
    <div v-else-if="isView == 0" class="flex-center">
        <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
    </div>
    <div v-else class="flex-center flex-column">
        <div class="avatar-4 my-3" style="border: 0.18rem solid #000;">
            <img style="object-fit: cover; width: 100%;height: 100%; padding: 0.7rem"
                src="../../../../assets/img/camera.png">
        </div>
        <h2 class="text-dark"><b>No Posts Yet</b></h2>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
import ListPost from '../../home/list_post.vue';
export default {
    components: { ListPost },
    props: {
        info: Object
    },
    watch: {
        listPost(newData, old) {
            if (old) {
                if (newData.length == 0) {
                    this.isView = -1
                } else {
                    this.isView = 1

                }
            }
        }
    },
    data() {
        return {
            listPost: [],
            isView: 0
        }
    },
    mounted() {
        this.getPost()
    },
    methods: {
        getPost() {
            axios
                .post('post/data-profile', { username: this.$route.params.username })
                .then((res) => {
                    this.listPost = res.data.dataPost
                    this.$emit('updateLengthPost', res.data.quatity)
                })

        },
        // getInfo() {
        //     axios
        //         .get(this.$route.params.username + '/data')
        //         .then((res) => {
        //             console.log('res: ', res.data.myData);

        //         })
        // }
    }
}
</script>
<style></style>