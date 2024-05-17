<template>
    <div class="shadow-sm d-flex flex-column gap-2" style="height: 100% ">
        <button @click="setFilter('account')" class="admin__nav--button">Account management</button>
        <button @click="setFilter('post')" class="admin__nav--button">Post management</button>
    </div>
    <div class="position-absolute p-3" style="left: 200%; width: 1200px;">
        <component :is="currentComponent" />
    </div>
</template>

<script>
import AccountManagement from "./accountManagement/accountManagement.vue";
import PostManagement from "./postManagement/postManagement.vue";

export default {
    data() {
        return {
            filter: "account", // This should be set based on your filter
        };
    },
    computed: {
        currentComponent() {
            return this.filter === "account" ? AccountManagement : PostManagement;
        },
    },
    methods: {
        setFilter(filter) {
            this.filter = filter;
        },
    },
    components: {
        AccountManagement,
        PostManagement,
    },
};
</script>

<style scoped>
.admin__nav--button {
    padding: 0.3rem 1rem;
    width: 100%;
    text-align: left;
    border: none;
    background-color: #f8f9fa;
}

.admin__nav--button:hover {
    background-color: #c0e4ec;
}
</style>
