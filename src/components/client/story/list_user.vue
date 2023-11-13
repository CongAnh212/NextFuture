<template >
    <ul id="iq-sidebar-toggle" class="iq-menu mx-3" style="margin: 0px; max-height: calc(100vh - 100px); overflow-y: auto;">
        <div class="d-flex justify-content-between">
            <h4 style="font-family: &quot;Segoe UI&quot;, Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;">
                <b>Story</b>
            </h4>
        </div>
        <div class="d-flex justify-content-between mt-3">
            <h5 style="font-family: &quot;Segoe UI&quot;, Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;">
                Your Story
            </h5>
        </div>
        <router-link :to="{ name: 'story' }">
            <li style="cursor: pointer;">
                <div class="px-0 mt-2 mb-2  d-flex align-items-center">
                    <div class="img-fluid rounded-circle me-3 bg-light d-flex justify-content-center align-items-center"
                        style="height: 60px; width: 60px;">
                        <i class="fas fa-plus text-dark"></i>
                    </div>
                    <div class="" style="line-height: 1.3;">
                        <span class="text-dark" style="font-weight: 600; font-size: 14px;">Create Story</span>
                        <br>
                        <span class="text-dark" style="white-space: normal; font-size: 12px;">You can share a photo or write
                            something.</span>
                    </div>
                </div>
            </li>
        </router-link>

        <div class="d-flex justify-content-between mt-3">
            <h5 style="font-family: &quot;Segoe UI&quot;, Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;">
                All Stories
            </h5>
        </div>
        <li v-for="(v, k) in stories" class="bg-hover">
            <router-link @click="getIndex(k)" :to="{ name : 'detailStory', params: { idStory: v.id } }">
                <div class="px-0 w-100 d-flex align-items-center">
                    <img v-if="!v.avatar" src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg"
                        class="img-fluid rounded-circle me-3 " alt="user"
                        style="outline: 3px solid rgb(0, 89, 255);height: 50px; width: 50px;margin-left: 5px ;">
                    <img v-else :src="urlImg + v.avatar" class="img-fluid rounded-circle me-3 " alt="user"
                        style="outline: 3px solid rgb(0, 89, 255);height: 50px; width: 50px;margin-left: 5px ; object-fit: cover;image-rendering: pixelated;">
                    <div class="" style="line-height: 1.3;">
                        <span class="text-dark" style="font-weight: 600; font-size: 14px;">{{ v.fullname }}</span>
                        <br>
                        <span class="text-dark" style="white-space: normal; font-size: 12px;">{{
                            hoursDifference(v.created_at)
                        }} ago</span>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
import funcBasic from '../../../core/coreFunction';
export default {
    data() {
        return {
            count: 0,
            stories: [],
            urlImg: url,
            currentStoryIndex: 0,

        }
    },
    mounted() {
        // this.startInterval();
        this.getStory();
    },
    beforeDestroy() {
        this.stopInterval();
    },
    methods: {
        getStory() {
            axios
                .get('story/data-all')
                .then((res) => {
                    this.stories = res.data.allStory;
                });
        },
        getIndex(k) {
            this.currentStoryIndex = k;
        },
        hoursDifference(a) {
            return funcBasic.hoursDifference(a);
        },
        startInterval() {
            this.interval = setInterval(() => {
                this.moveToNextStory();
            }, 10000); // 5 giây
        },
        stopInterval() {
            clearInterval(this.interval);
        },
        moveToNextStory() {
            this.currentStoryIndex = (this.currentStoryIndex + 1) % this.stories.length;
            const currentStory = this.stories[this.currentStoryIndex];
            this.$router.push({ name: 'detailStory', params: { idStory: currentStory.id } });
        },
    },
}
</script>
<style >
.bg-hover:hover {
    background-color: rgba(64, 64, 64, 0.1);
}
</style>