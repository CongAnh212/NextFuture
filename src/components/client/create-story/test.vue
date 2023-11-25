<template>
    <div>
        <div ref="editableContent" @keyup.enter="comment" @input="handleClick" contenteditable="true"
            class="editable-content form-control" placeholder="Enter Your Comment">
            <span>hello</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        comment() {
            // Xử lý logic bình luận khác
        },
        handleClick() {
            const content = this.$refs.editableContent.innerHTML;
            const textContent = this.stripHTML(content);

            console.log('Content of editableContent:', content);
            console.log('Content of editableContent:', textContent);
        },
        stripHTML(html) {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return doc.body.textContent || "";
        }
    }
};
</script>

<style>
.editable-content {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 50px;
}
</style>
