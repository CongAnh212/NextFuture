<template>
  <div class=" mt-3" style="width: 80%;">
    <div v-if="isView">
      <div class="card shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0 mx-auto" style="width: 70%;">
        <div class="d-flex" style="gap: 17px">
          <router-link :to="{ name: 'story' }" class="bg-primary main-story ms-2">
            <div class="hover-background">
            </div>
            <div class="img-background" style="height: 80%; width: 100%; background-color: red;">
              <img v-if="!myInfo.avatar" class="img-fluid"
                src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg" alt="">
              <img v-else class="img-fluid" :src="urlImg + myInfo.avatar" alt=""
                style="filter: blur(0.7px) grayscale(0.12);">
            </div>
            <div
              style="position: absolute; bottom: 0; height: 20%; width: 100%; background-color: #fff; display: flex; justify-content: center;">
              <div class="btn-create-story d-flex justify-content-center align-items-center" style="color: #fff;">
                <i class="las la-plus la-2x"></i>
              </div>
              <div class="mb-1" style="z-index: 1; position: absolute; bottom: 0px; color: #333;">
                <b class="name-in-story ">Create Story</b>
              </div>
            </div>
          </router-link>
          <div v-for="(v, k) in stories" class=" bg-primary main-story">
            <router-link :to="{ name: 'detailStory', params: { idStory: v.dataStory[0].id } }">

              <div class="hover-background">

              </div>
              <div class="img-background">
                <img :src="urlImg + v.dataStory[0].image" alt="">
              </div>
              <div class="avatar">
                <img v-if="!v.dataStory[0].avatar" class="img-fluid"
                  src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg" alt="">
                <img v-else class="img-fluid" :src="urlImg + v.dataStory[0].avatar" alt="">
              </div>

            </router-link>
            <div @click="viewStory(v)" class="text-light mb-1  d-flex" style="z-index: 1; flex-wrap: nowrap;">
              <span><span class="name-in-story w-100 f-500">{{ v.dataStory[0].fullname }}</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-3">
        <div class=" row m-0 p-0 mx-auto" style="width: 70%;">
          <div class="col-sm-12">
            <div id="post-modal-data" class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex align-items-center ">
                  <div style="width: 3.5rem; height: 3.5rem; overflow: hidden;" class="flex-center circle">
                    <img :src="urlImg + myInfo.avatar" alt="userimg"
                      style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <form class="post-text ms-3 w-100 btn-temp" data-bs-toggle="modal" data-bs-target="#post-modal"
                    action="javascript:void();" style="flex:1">
                    <input type="text" class="form-control rounded" placeholder="Write something here..."
                      style="border:none;">
                  </form>
                </div>
                <hr>
                <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                  <li class="me-3 mb-md-0 mb-2" @click="showModalPost">
                    <a class="btn btn-soft-primary">
                      <img src="../../../assets/client/images/small/07.png" alt="icon" class="img-fluid me-2">
                      Photo/Video
                    </a>
                  </li>
                  <li class="me-3 mb-md-0 mb-2">
                    <a class="btn btn-soft-primary">
                      <img src="../../../assets/client/images/small/08.png" alt="icon" class="img-fluid me-2"> Tag
                      Friend
                    </a>
                  </li>
                </ul>
              </div>
              <div class="modal fade" id="post-modal" tabindex="-1" aria-labelledby="post-modalLabel"
                style="display: none;" aria-hidden="true">
                <div class="modal-dialog   modal-fullscreen-sm-down">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                      <button ref="btnCloseModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i
                          class="ri-close-fill"></i></button>
                    </div>
                    <div class="modal-body" style="overflow: auto;">
                      <div class="d-flex align-items-center mb-3">
                        <div style="width: 3.5rem; height: 3.5rem; overflow: hidden;" class="flex-center circle">
                          <img :src="urlImg + myInfo.avatar" alt="userimg"
                            style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <form class="post-text ms-3 w-100" action="javascript:void(); " style="flex:1">
                          <textarea cols="10" rows="1" v-model="post.caption" class="form-control rounded"
                            placeholder="Write something here..." style="border:none;">
                          </textarea>
                        </form>
                      </div>
                      <input @change="getImage" id="input-b3" name="input-b3[]" type="file" class="file" multiple
                        data-show-upload="false" data-show-caption="true"
                        data-msg-placeholder="Select {files} for upload..." accept="image/*">
                      <!-- ****************************************************************** -->
                      <hr>
                      <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                        <li class="col-md-6 mb-3">
                          <div @click='show()' style="cursor: pointer; "
                            class="bg-soft-primary rounded p-2 pointer me-3">
                            <a></a><img src="../../../assets/client/images/small/07.png" alt="icon" class="img-fluid">
                            Photo/Video
                          </div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div style="cursor: pointer; " class="bg-soft-primary rounded p-2 pointer me-3"><a></a><img
                              src="../../../assets/client/images/small/08.png" alt="icon" class="img-fluid">
                            Tag
                            Friend
                          </div>
                        </li>


                      </ul>
                      <hr>
                      <div class="other-option">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="d-flex align-items-center">
                            <div style="width: 3.5rem; height: 3.5rem; overflow: hidden; margin-right: 0.3rem;"
                              class="flex-center circle">
                              <img :src="urlImg + myInfo.avatar" alt="userimg"
                                style="width: 100%; height: 100%; object-fit: cover; ">
                            </div>
                            <h6>Your Story</h6>
                          </div>
                          <div class="card-post-toolbar">
                            <div class="dropdown">
                              <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                <span class="btn btn-primary">Privacy</span>
                              </span>
                              <div class="dropdown-menu m-0 p-0 dropdownn">
                                <a @click="setPrivacyIndex(1)" id="privacy-1" class="dropdown-item px-3 py-1" href="#">
                                  <div class="d-flex align-items-top">
                                    <i class="ri-save-line h4"></i>
                                    <div class="data ms-2">
                                      <h6>Public</h6>
                                      <p class="mb-0">Anyone on or off Facebook</p>
                                    </div>
                                  </div>
                                </a>
                                <a @click="setPrivacyIndex(2)" id="privacy-2" class="dropdown-item px-3 py-1" href="#">
                                  <div class="d-flex align-items-top">
                                    <i class="ri-close-circle-line h4"></i>
                                    <div class="data ms-2">
                                      <h6>Friends</h6>
                                      <p class="mb-0">Your Friend on facebook</p>
                                    </div>
                                  </div>
                                </a>
                                <a @click="setPrivacyIndex(3)" id="privacy-3" class="dropdown-item px-3 py-1" href="#">
                                  <div class="d-flex align-items-top">
                                    <i class="ri-user-unfollow-line h4"></i>
                                    <div class="data ms-2">
                                      <h6>Friends except</h6>
                                      <p class="mb-0">Don't show to some friends</p>
                                    </div>
                                  </div>
                                </a>
                                <a @click="setPrivacyIndex(4)" id="privacy-4" class="dropdown-item px-3 py-1" href="#">
                                  <div class="d-flex align-items-top">
                                    <i class="ri-notification-line h4"></i>
                                    <div class="data ms-2">
                                      <h6>Only Me</h6>
                                      <p class="mb-0">Only me</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button @click="posting()" class="btn btn-primary d-block w-100 mt-3">Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" row m-0 p-0 mx-auto" style="width: 70%;">
          <list-post :listPost="list_post" :myInfo="myInfo" v-if="list_post" />
        </div>
        <div class="col-sm-12 text-center">
          <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
        </div>
      </div>
    </div>
    <div v-else class="flex-center">
      <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
    </div>
  </div>
  <div class="right-sidebar-mini " style="box-shadow: 0 0 10px #3333332e; width: 22.25rem;">
    <div class="right-sidebar-panel p-0 ">
      <div class="card shadow-none ">
        <div class="card-body p-0 ">
          <div class="media-height p-3 " data-scrollbar="true" tabindex="-1">
            <div class="scroll-content " style="overflow: auto; outline: none;">
              <div v-for="(v, k) in list_friend" class="d-flex align-items-center mb-4 ">
                <div class="flex-center " :class="{ 'iq-profile-avatar': true, 'status-online': v.isOnline }"
                  style="width: 3rem; height: 3rem; overflow:hidden ;">
                  <img class="rounded-circle " :src="urlImg + v.avatar" alt=""
                    style="object-fit: cover; width: 100%; height: 100%;">
                </div>
                <div class="ms-3" style="flex: 1;">
                  <h6 class="mb-0">{{ v.fullname }}</h6>
                  <p class="mb-0">{{ v.isOnline ? 'Just now' : 'Offline' }}</p>
                </div>
              </div>
            </div>
            <div class="scrollbar-track scrollbar-track-x" style="display: none;">
              <div class="scrollbar-thumb scrollbar-thumb-x"
                style="width: 260px; transform: translate3d(0px, 0px, 0px);">
              </div>
            </div>
            <div class="scrollbar-track scrollbar-track-y" style="display: block;">
              <div class="scrollbar-thumb scrollbar-thumb-y"
                style="height: 1rem; transform: translate3d(0px, 0px, 0px);">
              </div>
            </div>
          </div>
          <div class="right-sidebar-toggle bg-primary text-white mt-3">
            <i class="ri-arrow-left-line side-left-icon"></i>
            <i class="ri-arrow-right-line side-right-icon"><span class="ms-3 d-inline-block">Close
                Menu</span></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import coreFunction from '../../../core/coreFunction';
import axios, { url } from '../../../core/coreRequest'
import ListPost from './list_post.vue';
import { state } from '../../../socket.js';
import Swal from 'sweetalert2'

export default {
  components: { ListPost },
  data() {
    return {
      stories: [],
      urlImg: url,
      post: {
        images: []
      },
      privacy: '1',
      privacyMapping: {
        1: '#privacy-1',
        2: '#privacy-2',
        3: '#privacy-3',
        4: '#privacy-4'
      },
      list_post: null,
      list_friend: [],
      list_comment: [],
      comments: [],
      index_friend_tags: [],
      id_tags: '',
      check: {
        images: "post/1700648799_3-29.jpg,post/1700648799_login.jpg",
      },
      isView: false,
      list_online_friends: null,
    };
  },
  props: {
    myInfo: {
      type: Object,
    }
  },
  watch: {
    list_online_friends: {
      handler(newVal, oldVal) {
        this.updateOnlineUser(newVal)
      },
      deep: true
    },
    myInfo: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.isView = true;
        }
        this.handleInputBootstrap()
      },
      deep: true, // Sử dụng deep watch để theo dõi các thay đổi sâu
      immediate: true, // Kích hoạt handler ngay từ khi component được khởi tạo
    },
  },
  created() {
    this.list_online_friends = state.onlineUsers
    console.log(window.localStorage.getItem('token')); //check token
    this.dataStory();
    this.setPrivacy();
    this.loadPost();
    this.getFriend();
  },
  mounted() {
    this.handleInputBootstrap()
  },
  methods: {
    handleInputBootstrap() {
      setTimeout(() => {
        $("#input-b3").fileinput();
        $("#input-b3").fileinput({ 'showUpload': false, 'previewFileType': 'any' });
        $('.file-input').addClass('hide-important');
        $('.close').addClass('btn btn-secondary');
        $('.fileinput-remove').on('click', () => {
          $('.file-input').addClass('hide-important');
          this.post.images = [];
        });
      }, 100);
    },
    showModalPost() {
      $('.btn-temp').click()
      if ($('.file-input').hasClass('hide-important')) {
        $('.file-input').removeClass('hide-important');
      }
    },
    async updateOnlineUser(onlineUsers) {
  if (onlineUsers && onlineUsers.length > 0) { 
    if (this.list_friend.length > 0) {
      this.list_friend.forEach(friend => {
        const latestOnlineUsers = onlineUsers[onlineUsers.length - 1];
        if (latestOnlineUsers) { 
          const onlineUser = latestOnlineUsers.find((user) => user.id === friend.id);
          if (onlineUser) {
            friend.isOnline = true;
          } else {
            friend.isOnline = false;
          }
        }
      });
    }
  }
},
    totalComments(a) {
      return this.list_comment.filter(value => value.id_post == a).length;
    },
    getFriend() {
      axios
        .get('data-all-friend')
        .then((res) => {
          this.list_friend = res.data.data;
          this.list_friend.forEach((friend) => {
            friend.isOnline = false;
          });
          this.updateOnlineUser(this.list_online_friends)
        });
    },
    hoursDifference(a) {
      return coreFunction.hoursDifference(a);
    },
    setPrivacy() {
      $('.active-privacy').removeClass('active-privacy');
      if (this.privacyMapping[this.privacy]) {
        $(this.privacyMapping[this.privacy]).addClass('active-privacy');
      }
    },
    setPrivacyIndex(i) {
      this.privacy = i;
      this.setPrivacy();
    },
    toggleShow(a) {
      const $element = $("#" + a);
      // alert($element)
      if ($element.hasClass('show')) {
        $element.removeClass('show');
        $element.css('display', 'none');
      } else {
        $element.css('display', 'block');
        $element.addClass('show');

      }
    },
    dataStory() {
      axios
        .get('story/data')
        .then((res) => {
          this.stories = res.data.dataStory;
        });
    },
    show() {
      if ($('.file-input').hasClass('hide-important')) {
        $('.file-input').removeClass('hide-important');
      } else {
        $('.file-input').addClass('hide-important');
      }
    },
    getImage(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.post.images.push(files[i]);
      }
    },
    posting() {
      var check = false
      if (this.post.images.length == 0 && !this.post.caption) {
        check = true
      }
      const formData = new FormData();
      this.post.images.forEach((file, index) => {
        formData.append('images[]', file);
      });
      Object.entries(this.post).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('privacy', this.privacy)

      if (check) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter at least 1 information to post",
          showConfirmButton: false
        });
        setTimeout(() => {
          Swal.close();
        }, 1500);
      } else {
        axios
          .post('post/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            if (res.data.status) {
              this.post = {
                images: []
              };
              this.$refs.btnCloseModal.click();
              $('.fileinput-remove-button').click();
              var post = res.data.post
              post['avatar'] = this.myInfo.avatar
              post['fullname'] = this.myInfo.fullname
              post['likes'] = 0
              this.list_post.unshift(res.data.post);
            } else {
              console.log(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    loadPost() {
      axios
        .get('post/data')
        .then((res) => {
          if (res.data.status) {
            this.list_post = res.data.dataPost;
          } else {
            console.log(res.data.message);
          }
        });
    },
    viewStory(v) {
      this.$router.push({ name: 'detailStory', params: { idStory: v.id } })
    }
  },
}
</script>
<style>
@import "./style.css";
@import "./bs-input.css";
</style>
