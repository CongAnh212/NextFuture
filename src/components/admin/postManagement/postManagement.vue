<template>
    <div style="" class="d-flex flex-column overflow-y-auto">
        <div style="" class="mb-1">
            <div
                class="shadow-sm fs-4 fw-bold"
                style="background-color: white; padding: 1rem 2rem 0">
                Post management
            </div>
            <div class="d-flex gap-3" style="background-color: white; padding: 1rem 2rem">
                <div class="flex-1">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search by caption"
                        v-model="searchTerm"
                        @change="searchPosts" />
                </div>
                <div class="flex-1">
                    <select class="form-select" @change="selectType($event)">
                        <option value="3">All</option>
                        <option value="0">Public</option>
                        <option value="1">Friends</option>
                        <option value="2">Deleted</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column" style="height: 70vh; overflow-y: auto">
            <div
                v-for="(post, index) in postsFilter"
                :key="index"
                class="bg-white p-3 overflow-y-auto border-bottom"
                style="">
                <div
                    class="d-flex justify-content-between align-items-center mb-2"
                    :style="{
                        padding: '1rem 1rem',
                        backgroundColor: '#f8f9fa',
                    }">
                    <div class="d-flex align-items-center gap-2">
                        <img
                            :src="urlImg + post.avatar"
                            alt="avatar"
                            :style="{
                                width: '50px',
                                height: '50px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                            }" />
                        <div class="fs-5" style="color: black">
                            {{ post.fullname }}
                        </div>
                    </div>
                    <div v-if="post.privacy == 2">
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
                        <div class="d-flex gap-2" style="">
                            <img
                                v-for="(image, index) in post.images"
                                :key="index"
                                :src="urlImg + image"
                                alt="image"
                                :style="getImageStyle(index)" />
                            <div v-if="post.images.length > 1" class="position-relative">
                                <div
                                    style="
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
                        <div
                            class="text-wrap"
                            style="
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
                            <div><i class="far fa-heart" style=""></i> {{ post.like }}</div>
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
export default {
    data() {
        return {
            searchTerm: "",
            postType: 0,
            urlImg: url,
            posts: [
                {
                    id: 1,
                    fullname: "nguyenhongphat0",
                    created_at: coreFunctions.hoursDifference("2024-01-01 00:00:00"),
                    avatar: "post/1704797387_1S7A1656.JPG",
                    images: [
                        "post/1704797387_1S7A1656.JPG",
                        "post/1704797387_1S7A1708.JPG",
                        "post/1704797387_1S7A1708.JPG",
                        "post/1704797387_1S7A1708.JPG",
                        "post/1704797387_1S7A1708.JPG",
                    ],
                    caption:
                        "Hello World, I'm Phat, I'm a developer, I'm a dev, I'm a coder, I'm a programmer, I'm a software engineer, I'm a web developer, I'm a web designer, I'm a web coder, I'm a web programmer, I'm a web software engineer, I'm a web engineer, I want money, jobs, happiness",
                    like: 2,
                    comment: 3,
                    privacy: 1,
                },
                {
                    id: 2,
                    fullname: "nguyenhongphat0",
                    created_at: coreFunctions.hoursDifference("2024-01-01 00:00:00"),
                    avatar: "post/1704797387_1S7A1656.JPG",
                    images: ["post/1704797387_1S7A1656.JPG", "post/1704797387_1S7A1708.JPG"],
                    caption: "Hehe",
                    like: 5,
                    comment: 2,
                    privacy: 0,
                },
                {
                    id: 3,
                    fullname: "nguyenhongphat0",
                    created_at: coreFunctions.hoursDifference("2024-01-01 00:00:00"),
                    avatar: "post/1704797387_1S7A1656.JPG",
                    images: ["post/1704797387_1S7A1656.JPG", "post/1704797387_1S7A1708.JPG"],
                    caption: "cdmmmm",
                    like: 7,
                    comment: 4,
                    privacy: 1,
                },
                {
                    id: 4,
                    fullname: "nguyenhongphat0",
                    avatar: "post/1704797387_1S7A1656.JPG",
                    images: ["post/1704797387_1S7A1656.JPG", "post/1704797387_1S7A1708.JPG"],
                    caption: "cdmmmm",
                    like: 7,
                    comment: 4,
                    privacy: 2,
                },
                // Add more posts here
            ],
            postsFilter: [],
        };
    },
    created() {
        this.postsFilter = this.posts;
    },
    name: "PostManagement",
    methods: {
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
            if (privacy === 0) {
                return "fas fa-globe";
            } else if (privacy === 1) {
                return "fas fa-users";
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
                            post.privacy = 2;
                        }
                        return post;
                    });
                    axios.post("/admin/delete-post", id).then((res) => {
                        console.log(res);
                    });
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
            this.postType = event.target.value;
            if (this.postType == 3) {
                this.postsFilter = this.posts;
                return;
            }
            this.postsFilter = this.posts.filter((post) => {
                console.log(this.postType == post.privacy);
                return post.privacy == this.postType;
            });
        },
    },
};
</script>

<style scoped>
.admin--delete-button {
    padding: 0.3rem 1rem;
    border: none;
    background-color: #f8f9fa;
    color: #f9405f;
    font-weight: bold;
}
.admin--delete-button:hover {
    background-color: #f9405f;
    color: white;
}
</style>
