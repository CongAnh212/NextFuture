<template>
  <div v-if="myInfo" class="iq-top-navbar" style="position: fixed;">
    <div class="iq-navbar-custom">
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="iq-navbar-logo d-flex justify-content-between">
          <router-link :to="{ name: 'homepage' }">
            <img src="../../../../assets/img/logo-main.png" class="img-fluid" alt="">
            <span translate="no" class="fs-3 fw-bold text-black">NextFuture</span>
          </router-link>
        </div>
        <div class="iq-search-bar device-search " style="position: relative;">
          <div class="searchbox">
            <a class="search-link" href="#"><i class="ri-search-line"></i></a>
            <input @input="search" @keyup.enter="viewSearch()" ref="search" type="text" class="text search-input"
              placeholder="Search here...">
          </div>
          <!-- *************************************search************************************* -->
          <div class=" w-100" id="modalSearch"
            style="position: absolute; margin-left: -0.95rem; padding: 0 1rem; margin-top: -1rem; display: none; ">
            <div class=" p-2"
              style="background-color: #f9f9f9; box-shadow:  5px 5px  5px #4242422e, 10px 10px  10px #bdbdbd15;">
              <div v-for="(v, k) in listSearchClient" @click="handleClickSearch(v, 'client')"
                class="bg-hover d-flex align-items-center px-2 py-1 c-pointer" style="height: fit-content;">
                <div class="avatar-3  flex-center bg-white me-2" style="width: 2rem; height: 2rem;">
                  <i class="fas fa-search"></i>
                </div>
                <div class="d-flex flex-column" style="line-height: 1rem; flex: 1;">
                  <b>{{ v.fullname }}</b>
                  <span>{{ v.nickname }}</span>
                </div>
                <div class="flex-center" style="border-radius: 10px; width: 2.5rem; height: 2.5rem; overflow: hidden;">
                  <img :src="urlImg + v.avatar" style="object-fit: cover; width: 100%; height: 100%;">
                </div>
              </div>
              <hr v-if="listSearchGroup.length > 0 && listSearchClient.length > 0">
              <div v-for="(v, k) in listSearchGroup" @click="handleClickSearch(v, 'group')"
                class="bg-hover d-flex align-items-center px-2 py-1 c-pointer" style="height: fit-content;">
                <div class="avatar-3  flex-center bg-white me-2" style="width: 2rem; height: 2rem;">
                  <i class="fas fa-search"></i>
                </div>
                <div class="d-flex flex-column" style="line-height: 1rem; flex: 1;">
                  <b>{{ v.group_name }}</b>
                  <!-- <span>{{ v.nickname }}</span> -->
                </div>
                <div class="flex-center bg-pink "
                  style="border-radius: 10px; width: 2.5rem; height: 2.5rem; overflow: hidden;">
                  <img :src="urlImg + v.cover_image" style="object-fit: cover; width: 100%; height: 100%;">
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <i class="ri-menu-3-line"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ms-auto navbar-list">
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle" style="position: relative;" id="group-drop" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="ri-group-line"></i>
                <div class="circle flex-center" v-if="count.length >= 1"
                  style="position: absolute; bottom: 2.3rem;left: 1.9rem; width: 20px; height: 20px; background-color: rgb(249, 64, 95);">
                  <span class="text-white f-500" style="font-size: 11px;">
                    {{ count.length > 99 ? '99+' : count.length }}
                  </span>
                </div>
              </a>
              <div class="sub-drop sub-drop-large dropdown-menu" aria-labelledby="group-drop" style="">
                <div class="card shadow-none m-0">
                  <div class="card-header d-flex justify-content-between bg-primary">
                    <div class="header-title">
                      <h5 class="mb-0 text-white">Friend Request</h5>
                    </div>
                    <small v-if="count.length" class="badge bg-light text-dark ">
                      {{ count.length }}
                    </small>
                  </div>
                  <div class="card-body p-0" style="max-height: 65vh; overflow: auto;">
                    <template v-for="(v, k) in request_friend" v-if="request_friend.length">
                      <div v-if="k < 5" class="iq-friend-request">
                        <div class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between pe-3">
                          <div class="d-flex align-items-center">
                            <router-link style="width: 3rem; height: 3rem;overflow: hidden; border-radius: 0.5rem;"
                              :to="{ name: 'detailProfile', params: { username: v.username } }" class="flex-center">
                              <img style="width: 100%; height: 100%; object-fit: cover;" :src="urlImg + v.avatar"
                                alt="">
                            </router-link>
                            <div class="ms-3">
                              <h6 class="mb-0 ">
                                <router-link :to="{ name: 'detailProfile', params: { username: v.username } }">
                                  <b>
                                    {{ v.fullname }}
                                  </b>
                                </router-link>
                              </h6>
                              <p class="mb-0">{{ v.mutual }} mutual friends </p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <a class="me-3 btn btn-primary rounded" style="width: 60%;" @click="confirm(v)">Confirm</a>
                            <a class="me-3 btn btn-secondary rounded" style="width: 60%;"
                              @click="delRequest(v)">Delete</a>
                          </div>
                        </div>
                      </div>
                    </template>
                    <div v-else class="card-body p-0 flex-center">
                      <div class="f-500">
                        There are no invitations for you
                      </div>
                    </div>
                    <router-link v-if='request_friend.length > 5' :to="{ name: 'requests' }"
                      class="flex-center bg-hover">
                      View More Request
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="search-toggle dropdown-toggle" id="notification-drop" data-bs-toggle="dropdown"
                style="position: relative;">
                <i class="ri-notification-4-line"></i>
                <div class="circle flex-center" v-if="new_notification > 0"
                  style="position: absolute; bottom: 2.3rem;left: 1.8rem; width: 20px; height: 20px; background-color: rgb(249, 64, 95);">
                  <span class="text-white f-500" style="font-size: 11px;">
                    {{ new_notification > 99 ? '99+' : new_notification }}
                  </span>
                </div>
              </a>
              <div class="sub-drop dropdown-menu" aria-labelledby="notification-drop" style="width: 32rem;">
                <div class="card shadow-none m-0">
                  <div class="card-header d-flex justify-content-between bg-primary">
                    <div class="header-title bg-primary">
                      <h5 class="mb-0 text-white">All Notifications</h5>
                    </div>
                    <small class="badge bg-light text-dark" v-if="list_notifications.length">{{ list_notifications.length }}</small>
                  </div>
                  <div v-if="list_notifications.length > 0">
                    <div v-if="isView" class="card-body p-0 " style="max-height: 65vh; overflow: auto;">
                      <a v-for="(v, k) in list_notifications" class="iq-sub-card bg-hover "
                        @click="readNotification(v)">
                        <router-link v-if="v.type == 2"
                          :to="{ name: 'home-group', params: { id_group: v.id_group }, query: { id_notification: v.id } }">
                          <div class="d-flex align-items-center">
                            <div v-if="v.status == 1">
                              <img src="../../../../assets/img/output-onlinegiftools.gif"
                                style="width: 25px; height: 25px; margin-right:0.25rem;">
                            </div>
                            <div v-else style="width: 25px; height: 25px;">
                            </div>
                            <div style="overflow: hidden; width: 3rem; height: 3rem; border-radius: 0.5rem;"
                              class="flex-center">
                              <img :src="urlImg + v.cover_image" style="object-fit: cover; width: 100%; height: 100%;">
                            </div>
                            <div class="ms-3 w-100" style="flex: 1;">
                              <h6 class="mb-0 f-500 " :class="{ 'text-primary': v.status == 1 }"
                                :style="{ 'font-weight': 'bold' }">
                                {{ v.sender }}
                              </h6>
                              <div class="d-flex text-dark justify-content-between align-items-center pe-3">
                                <p class="mb-0">Invited you to the
                                  <b :class="{ 'text-primary': v.status == 1 }">
                                    {{ v.group_name }}
                                  </b>
                                  group
                                </p>
                              </div>
                            </div>
                            <small class="float-right font-size-12" :class="{ 'text-dark': v.status == 0 }">
                              {{ formatTime(v.created_at) }}
                              agos
                            </small>
                          </div>
                        </router-link>
                        <router-link v-if="v.type == 7" to="">
                          <div class="d-flex align-items-center">
                            <div v-if="v.status == 1">
                              <img src="../../../../assets/img/output-onlinegiftools.gif"
                                style="width: 25px; height: 25px;">
                            </div>
                            <div v-else style="width: 25px; height: 25px;">
                            </div>
                            <div style="overflow: hidden; width: 3rem; height: 3rem;" class="flex-center">
                              <img class="avatar-40 rounded" :src="urlImg + v.avatar" style="object-fit: cover;">
                            </div>
                            <div class="ms-3 w-100" style="flex: 1;">
                              <h6 class="mb-0 f-500 " :class="{ 'text-primary': v.status == 1 }"
                                :style="{ 'font-weight': 'bold' }">
                                {{ v.sender }}</h6>
                              <div class="d-flex text-dark justify-content-between align-items-center pe-3">
                                <p class="mb-0">Tagged you in a post by
                                  <b :class="{ 'text-primary': v.status == 1 }">
                                    {{ v.name_poster }}
                                  </b>
                                </p>
                              </div>
                            </div>
                            <small class="float-right font-size-12" :class="{ 'text-dark': v.status == 0 }">
                              {{ formatTime(v.created_at) }}
                              agos
                            </small>
                          </div>
                        </router-link>
                        <router-link v-if="v.type == 1"
                          :to="{ name: 'detailProfile', params: { username: v.username } }">
                          <div v-if="v.type == 1" class="d-flex align-items-center">
                            <div v-if="v.status == 1">
                              <img src="../../../../assets/img/output-onlinegiftools.gif"
                                style="width: 25px; height: 25px;">
                            </div>
                            <div v-else style="width: 25px; height: 25px;">
                            </div>
                            <div style="overflow: hidden; width: 3rem; height: 3rem;" class="flex-center">
                              <img class="avatar-40 rounded" :src="urlImg + v.avatar" style="object-fit: cover;">
                            </div>
                            <div class="ms-3 w-100" style="flex: 1;">
                              <h6 class="mb-0 f-500 " :class="{ 'text-primary': v.status == 1 }"
                                :style="{ 'font-weight': 'bold' }">
                                {{ v.sender }}
                              </h6>
                              <div class="d-flex text-dark justify-content-between align-items-center pe-3">
                                <p class="mb-0">sent you a friend request
                                </p>
                              </div>
                            </div>
                            <small class="float-right font-size-12" :class="{ 'text-dark': v.status == 0 }">
                              {{ formatTime(v.created_at) }}
                              agos
                            </small>
                          </div>
                        </router-link>
                      </a>
                    </div>
                    <div v-else class="card-body p-0 flex-center">
                      <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader"
                        style="height: 100px;">
                    </div>
                  </div>
                  <div v-else class="card-body p-0 flex-center">
                    <div class="f-500">
                      There aren't any notifications
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle" id="mail-drop" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i class="ri-mail-line"></i>
              </a>
              <div class="sub-drop dropdown-menu" aria-labelledby="mail-drop">
                <div class="card shadow-none m-0">
                  <div class="card-header d-flex justify-content-between bg-primary">
                    <div class="header-title bg-primary">
                      <h5 class="mb-0 text-white">All Message</h5>
                    </div>
                    <small class="badge bg-light text-dark">4</small>
                  </div>
                  <div class="card-body p-0 ">
                    <a href="#" class="iq-sub-card">
                      <div class="d-flex  align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../../../../assets/client/images/user/01.jpg" alt="">
                        </div>
                        <div class=" w-100 ms-3">
                          <h6 class="mb-0 ">Bni Emma Watson</h6>
                          <small class="float-left font-size-12">13 Jun</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="d-flex align-items-center dropdown-toggle" id="drop-down-arrow"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="flex-center circle"
                  style="width: 3rem;height: 3rem;overflow: hidden; margin-right: 0.25rem;">
                  <img :src="urlImg + myInfo.avatar" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="caption">
                  <h6 class="mb-0 line-height">{{ myInfo.fullname }}</h6>
                </div>
              </a>
              <div class="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                <div class="card shadow-none m-0">
                  <div class="card-header  bg-primary">
                    <div class="header-title">
                      <h5 class="mb-0 text-white">Hello, {{ myInfo.fullname }}</h5>
                      <span class="text-white font-size-12">Available</span>
                    </div>
                  </div>
                  <div class="card-body p-0 ">
                    <router-link to="/" @click="myProfile()" class="iq-sub-card iq-bg-primary-hover ">
                      <div class="d-flex align-items-center ">
                        <div class="rounded card-icon bg-soft-primary">
                          <i class="ri-file-user-line"></i>
                        </div>
                        <div class="ms-3">
                          <h6 class="mb-0 ">My Profile</h6>
                          <p class="mb-0 font-size-12">View personal profile details.</p>
                        </div>
                      </div>
                    </router-link>
                    <router-link :to="{ name: 'editProfile' }" class="iq-sub-card iq-bg-warning-hover">
                      <div class="d-flex align-items-center">
                        <div class="rounded card-icon bg-soft-warning">
                          <i class="ri-profile-line"></i>
                        </div>
                        <div class="ms-3">
                          <h6 class="mb-0 ">Edit Profile</h6>
                          <p class="mb-0 font-size-12">Modify your personal details.</p>
                        </div>
                      </div>
                    </router-link>
                    <a href="../app/account-setting.html" class="iq-sub-card iq-bg-info-hover">
                      <div class="d-flex align-items-center">
                        <div class="rounded card-icon bg-soft-info">
                          <i class="ri-account-box-line"></i>
                        </div>
                        <div class="ms-3">
                          <h6 class="mb-0 ">Account settings</h6>
                          <p class="mb-0 font-size-12">Manage your account parameters.</p>
                        </div>
                      </div>
                    </a>
                    <a href="../app/privacy-setting.html" class="iq-sub-card iq-bg-danger-hover">
                      <div class="d-flex align-items-center">
                        <div class="rounded card-icon bg-soft-danger">
                          <i class="ri-lock-line"></i>
                        </div>
                        <div class="ms-3">
                          <h6 class="mb-0 ">Privacy Settings</h6>
                          <p class="mb-0 font-size-12">Control your privacy parameters.
                          </p>
                        </div>
                      </div>
                    </a>
                    <div class="d-inline-block w-100 text-center p-3">
                      <a @click="signOut()" class="btn btn-primary iq-sign-btn" role="button">Sign
                        out<i class="ri-login-box-line ms-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  </div>
</template>
<script>
import axios, { url } from "../../../../core/coreRequest";
import baseFunction from "../../../../core/coreFunction";
import { state, socket } from "../../../../socket";
import _ from 'lodash';

export default {
  data() {
    return {
      urlImg: url,
      request_friend: [],
      list_notifications: [],
      isView: false,
      count: 0,
      del: {},
      new_notification: 0,
      listSearchClient: [],
      listSearchGroup: [],
    }
  },
  props: {
    notify: {
      type: Object,
    },
    myInfo: {
      type: Object,
    }
  },
  watch: {
    list_notifications: {
      handler(newValue, oldValue) {
        if (oldValue) {
          this.isView = true;
        }
      },
      deep: true,
      immediate: true
    },
    notify(newValue, oldValue) {
      this.getNotification();
    },
    myInfo: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.getInfo();
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    console.log("️⚡→(HeaderClient.vue:368) ~ socket.id", socket.id);
    socket.on("getNotification", (...args) => {
      this.getRequestFriend()
      this.getNotification()
    })
  },
  mounted() {
    state.connected = true
    this.getRequestFriend();
    this.getNotification();
  },
  methods: {
    search: _.debounce(function (event) {
      // dùng để show ra list search khi có giá trị trả về
      var routeName = this.$route.name
      if (routeName == 'search') {

        return
      }
      if (event.target.value.trim() === '' || !event.target.value) {
        $('#modalSearch').css('display', 'none');

      } else {
        axios
          .post('search-nav', { keySearch: event.target.value })
          .then((res) => {
            this.listSearchClient = res.data.dataSearchClient
            this.listSearchGroup = res.data.dataSearchGroup
            if (this.listSearchClient.length > 0 || this.listSearchGroup.length > 0) {
              $('#modalSearch').css('display', 'block');
            } else {
              $('#modalSearch').css('display', 'none');

            }
          })
      }

    }, 300),
    viewSearch() {
      this.$router.push({ name: "search" })
      $('#modalSearch').css('display', 'none');
      this.$emit('sendKeySearch', this.$refs.search.value)
    },
    handleClickSearch(v, type) {
      if (type == 'client') {
        this.$router.push({ name: "detailProfile", params: { username: v.username } })
      } else {
        this.$router.push({ name: "home-group", params: { id_group: v.id } })
      }
      this.$refs.search.value = '';

      $('#modalSearch').css('display', 'none');
    },
    formatTime(a) {
      return baseFunction.hoursDifference(a);
    },
    getNotification() {
      axios
        .get('notification/data')
        .then((res) => {
          this.list_notifications = res.data.data;
          this.new_notification = res.data.new_notification;
        })
    },
    signOut() {
      axios
        .get('sign-out')
        .then((res) => {
          this.$store.commit('REMOVE_CURRENT_CHAT');
          localStorage.removeItem('token');
          this.$router.push({ name: "sign-in" });
        })
        .catch((error) => {
          console.error('Logout failed:', error);
        });
    },
    async getInfo() {
      try {
        await localStorage.setItem('information-my-profile', JSON.stringify(this.myInfo))

        if (Object.keys(this.myInfo).length > 0) {
          await this.connectToSocket(this.myInfo);
        }
      } catch (error) {
        console.error("Lỗi lấy thông tin người dùng:", error);
      }
    },
    myProfile() {
      this.$router.push({
        name: "detailProfile",
        params: { username: this.myInfo.username },
      });
    },
    getRequestFriend() {
      axios.get("follower/request-friend").then((res) => {
        if (res.data.status == 1) {
          this.request_friend = res.data.data;
          this.count = res.data.count;
        }
      });
    },
    confirm(v) {
      axios.post("follower/accept-friend", v).then((res) => {
        if (res.data.status) {
          this.getRequestFriend();
        }
      });
    },
    delRequest(v) {
      axios.post("follower/delete-friend", v).then((res) => {
        if (res.data.status) {
          this.getRequestFriend();
        } else {
          baseFunction.displaySuccess(res);
        }
      });
    },
    readNotification(v) {
      axios.post("notification/update-status", v).then((res) => {
        if (res.data.status) {
          this.getNotification();
        }
      });
    },
    connectToSocket(user) {
      socket.emit("newUser", user);
    },
  },
};
</script>
<style></style>
