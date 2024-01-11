<template >
    <ListPost v-if="isView == 1" :myInfo="info" :listPost="listPost" />
    <div v-else-if="isView == 0" class="flex-center">
        <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
    </div>
    <div v-else class="flex-center flex-column">
        <img src="../../../../assets/img/camera.png" alt="">
        <h2 class="text-dark"><b>No Post Yet</b></h2>
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
            console.log('old: ', old);
            console.log('newData: ', newData);
            if (old) {

                console.log('newData.lenght: ', newData.length);
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
<style ></style>