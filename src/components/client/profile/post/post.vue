<template >
    <ListPost v-if="listPost.length > 0" :listPost="listPost" />
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
import ListPost from '../../home/list_post.vue';
export default {
    components: { ListPost },
    data() {
        return {
            listPost: [],
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
                    console.log('this.listPost: ', this.listPost);
                })

        }
    }
}
</script>
<style ></style>