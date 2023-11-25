<template>
    <div class="d-flex w-100 justify-content-around" style="object-fit: cover; position: relative;">
        <div :id="'divImg' + post.id" class="alignDivImg" style="width: 100%; overflow: hidden; background-color: rgb(0, 0, 0);">
            <img :src="urlImg + img[i]" class="w-100 alignDiv" ref="postImage">
            <div v-if="img.length > 1" class="alignDot justify-content-center">
                <span v-for="i in img.length" :id="'dot' + post.id + i" class="dotSlide"></span>
            </div>
        </div>
        <div class="left" v-if="img.length > 1">
            <div @click="prev()" class="d-flex justify-content-center align-items-center prev"
                style="aspect-ratio: 1/1; width: 30px;">
                <i class="fas fa-angle-left " style="font-size: 20px; margin-right: 1px; color: rgb(255, 255, 255);"></i>
            </div>
        </div>
        <div class="right" v-if="img.length > 1">
            <div @click="next()" class="d-flex justify-content-center align-items-center next"
                style="aspect-ratio: 1/1; width: 30px;">
                <i class="fas fa-angle-right " style="font-size: 20px; margin-left: 1px; color: rgb(255, 255, 255);"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { url } from '../../../core/coreRequest';
export default {
    props: ['post'],
    data() {
        return {
            urlImg: url,
            img: [],
            i: 0,
        }
    },
    watch: {
        post: {
            handler(newPost, oldPost) {
                // Xử lý khi thuộc tính post thay đổi
                this.img = newPost.images.split(',');
                this.setSize();
                setTimeout(() => {
                    this.dotActive(0);
                }, 500);
            },
            deep: true, 
        },
    },
    created() {
        this.img = this.post.images.split(',');
        this.setSize();
        setTimeout(() => {
            this.dotActive(0);
        }, 500);
    },
    methods: {
        next() {
            for (let j = 0; j < this.img.length; j++) {
                $('#dot' + this.post.id + (j + 1)).removeClass('dotActive');
            }
            if (this.i == this.img.length - 1) {
                this.i = 0;

            } else {
                this.i++;
            }
            this.dotActive(this.i);
        },
        prev() {
             for (let j = 0; j < this.img.length; j++) {
                $('#dot' + this.post.id + (j + 1)).removeClass('dotActive');
            }
            if (this.i == 0) {
                this.i = this.img.length - 1;
            } else {
                this.i--;
            }
            this.dotActive(this.i);
        },
        dotActive(i) {
            // $.hasClass('dotActive').removeClass('dotActive')
            $('#dot' + this.post.id + (i + 1)).addClass('dotActive');

        },
        async setSize() {
            const img = new Image();
            const imgLoaded = new Promise((resolve) => {
                img.onload = resolve;
                img.src = this.urlImg + this.img[0];
            });
            await imgLoaded;

            const isHorizontal = img.width > img.height;

            if (isHorizontal) {
                // Set the width to 100%
                this.$refs.postImage.style.width = '100%';

                // Calculate the height based on the aspect ratio
                const height = isHorizontal ? (this.$refs.postImage.offsetWidth * img.height) / img.width : '100%';

                // this.$refs.postImage.style.height = height + 'px';
                $('#divImg' + this.post.id).css("height", height + 'px')

            } else {
                $('#divImg' + this.post.id).css("aspect-ratio", '1/1')
                
            }

        },
    },
}
</script>

<style>
@import './styleImage.css';
</style>
