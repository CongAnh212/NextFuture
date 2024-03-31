<template>
    <div style="" class="d-flex flex-column overflow-y-auto">
        <div style="" class="mb-1">
            <div class="shadow-sm fs-4 fw-bold" style="background-color: white; padding: 1rem 2rem 0">
                Post management
            </div>
            <div class="d-flex gap-3" style="background-color: white; padding: 1rem 2rem">
                <div class="flex-1">
                    <input type="text" class="form-control" placeholder="Search by caption" v-model="searchTerm"
                        @change="searchPosts" />
                </div>
                <div class="flex-1">
                    <select class="form-select" @change="selectType($event)">
                        <option value="5">All</option>
                        <option value="1">Public</option>
                        <option value="2">Friends</option>
                        <option value="4">Private</option>
                        <option value="0">Deleted</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column" style="height: 70vh; overflow-y: auto">
            <div v-for="(post, index) in postsFilter" :key="index"
                class=" p-3 overflow-y-auto position-relative bg-hover text-dark"
                style="border-bottom: 0.2px solid rgba(212, 208, 208, 1)">
                <!-- chưa tạo router cho post -->
                <div class="d-flex justify-content-between align-items-center mb-2 " :style="{
                        padding: '1rem 1rem',
                    }">
                    <div class="d-flex align-items-center gap-2">
                        <img :src="urlImg + post.avatar" alt="avatar" :style="{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                    }" />
                        <div class="fs-5" style="color: black">
                            {{ post.fullname }}
                        </div>
                    </div>
                    <div v-if="post.privacy == 0">
                        <div class="deleted-post">This post has been deleted.</div>
                    </div>
                    <div v-else>
                        <button class="admin--delete-button" @click="deletePost(post.id)">
                            Delete
                        </button>
                    </div>
                </div>
                <div>
                    <div class="d-flex align-items-center gap-3">
                        <div class="d-flex gap-2" v-if="post.images && post.images.length > 0">
                            <img v-for="(image, index) in post.images" :key="index" :src="urlImg + image" alt="image"
                                :style="getImageStyle(index)" />
                            <div v-if="post.images.length > 1" class="position-relative">
                                <div style="
                                        width: 90px;
                                        height: 50px;
                                        background-color: rgba(0, 0, 0, 0.5);
                                        color: white;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    ">
                                    +{{ post.images.length - 1 }}
                                </div>
                            </div>
                        </div>
                        <div class="text-wrap" style="
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            ">
                            {{ post.caption }}
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-5 mt-2">
                        <div class="d-flex align-items-center gap-3">
                            <div><i class="far fa-heart" style=""></i> {{ post.react }}</div>
                            <div><i class="far fa-comment" style=""></i> {{ post.comment }}</div>
                            <div><i :class="getPrivacyIcon(post.privacy)"></i></div>
                        </div>
                        <div class="">Posted: {{ post.created_at }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios, { url } from "../../../core/coreRequest";
import Swal from "sweetalert2";
import coreFunctions from "../../../core/coreFunction";
import { toRaw } from "vue";
export default {
    data() {
        return {
            searchTerm: "",
            postType: {
                0: "Deleted",
                1: "Public",
                2: "Friends",
                3: "",
                4: "Private",
                5: "All",
            },
            urlImg: url,
            posts: [],
            postsFilter: [],
        };
    },
    name: "PostManagement",
    methods: {
        getAllPosts() {
            axios
                .get("admin/post/getAllPosts")
                .then((response) => {
                    this.posts = response.data.data
                        .map((post) => {
                            post.created_at = coreFunctions.hoursDifference(post.created_at);
                            return post;
                        })
                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    this.postsFilter = this.posts;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        getImageStyle(index) {
            if (index < 1) {
                return {
                    width: "80px",
                    height: "50px",
                    objectFit: "cover",
                };
            } else {
                return {
                    display: "none",
                };
            }
        },
        getPrivacyIcon(privacy) {
            if (privacy === 1) {
                return "fas fa-globe";
            } else if (privacy === 2) {
                return "fas fa-users";
            } else if (privacy === 4) {
                return "fas fa-lock";
            }
        },
        deletePost(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#f9405f",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    this.posts = this.posts.map((post) => {
                        if (post.id == id) {
                            post.privacy = 0;
                        }
                        return post;
                    });
                    //nhét link api vô đây
                    axios.post("admin/post/deletePost", { id: id });
                    this.postsFilter = this.posts;
                }
            });
        },
        searchPosts() {
            if (this.searchTerm === "") {
                this.postsFilter = this.posts;
                return;
            }
            this.postsFilter = this.posts.filter((post) => {
                let caption = String(post.caption);
                return caption.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
        },
        selectType(event) {
            const postType = event.target.value;
            if (postType == 5) {
                this.getAllPosts();
                this.postsFilter = this.posts;
                return;
            }
            this.postsFilter = this.posts.filter((post) => {
                return post.privacy == postType;
            });
        },
        viewPost(id) {
            //nhét link bài viết vô đây
            this.$router.push({ name: "Profile", params: { id: id } });
        },
    },
    created() {
        this.getAllPosts();
    },
};
</script>

<style scoped>
.admin--button-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    border: none;
    background-color: rgba(212, 208, 208, 0);
    z-index: 1;
}

.admin--button-overlay:hover {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgba(212, 208, 208, 0.2);
}

.admin--delete-button {
    padding: 0.3rem 1rem;
    border: none;
    background-color: transparent;
    color: #f9405f;
    font-weight: bold;
    border-radius: 5px;
}

.admin--delete-button:hover {
    background-color: #f9405f;
    color: white;
}

.bg-hover:hover {
    background-color: var(--bg-hover-color);
}
</style>
