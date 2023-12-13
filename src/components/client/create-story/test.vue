<template >
    <div @scroll="onScroll" style="height: 200vh;">a</div>
</template>
<script>
export default {
    methods: {
        onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
            if (scrollTop + clientHeight >= scrollHeight) {
                this.loadMorePosts()
                console.log(123);
            }
        }
    },

}
</script>
<style ></style>