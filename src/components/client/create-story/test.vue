<template>
    <div>
        <div id="container" @dragover.prevent @drop="dragDrop">
            <div class="draggable" draggable="true" @dragstart="dragStart" @dragend="dragEnd"
                :style="{ left: x + 'px', top: y + 'px' }">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Văn bản 1',
            x: 0,
            y: 0,
        };
    },
    methods: {
        dragStart(event) {
            event.dataTransfer.setData('text', this.text);
        },
        dragEnd() {
            // Không cần làm gì cả
        },
        dragDrop(event) {
            event.preventDefault();
            const data = event.dataTransfer.getData('text');
            this.text = data;
            this.x = event.clientX - event.target.getBoundingClientRect().left - 50; // Điều chỉnh giá trị trừ điều chỉnh vị trí
            this.y = event.clientY - event.target.getBoundingClientRect().top - 15; // Điều chỉnh giá trị trừ điều chỉnh vị trí
        },
    },
};
</script>

<style>
#container {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: relative;
}

.draggable {
    width: 100px;
    height: 30px;
    background-color: #3498db;
    color: #fff;
    text-align: center;
    line-height: 30px;
    cursor: move;
    position: absolute;
}
</style>
