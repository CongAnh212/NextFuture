<template>
    <div>
        <img class="draggable" ref="ball" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp"
            src="http://127.0.0.1:8000/img/avt_cv.jpg" draggable="false"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDragging: false,
            shiftX: 0,
            shiftY: 0,
        };
    },
    methods: {
        onMouseDown(event) {
            this.isDragging = true;
            this.shiftX = event.clientX - this.$refs.ball.getBoundingClientRect().left;
            this.shiftY = event.clientY - this.$refs.ball.getBoundingClientRect().top;
        },
        onMouseMove(event) {
            if (!this.isDragging) return;

            const ball = this.$refs.ball;
            ball.style.left = event.pageX - this.shiftX + "px";
            ball.style.top = event.pageY - this.shiftY + "px";
        },
        onMouseUp() {
            this.isDragging = false;
        },
    },
};
</script>

<style scoped>
.draggable {
    width: 100px;
    height: 50px;
    cursor: move;
    position: absolute;
    user-select: none;
}
</style>

