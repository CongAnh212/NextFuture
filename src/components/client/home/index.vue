<template>
    <div class="iq-sidebar  sidebar-default ">
        <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1" style="overflow: hidden; outline: none;">
            <div class="scroll-content">
                <nav class="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" class="iq-menu">
                        <li>
                            <router-link :to="{ name: 'friends' }">
                                <i class="fa-solid fa-user " style="font-size: 17px;"></i>
                                <span>Friends</span>
                            </router-link>

                        </li>
                        <li>
                            <a href="../app/group.html" class=" ">
                                <i class="fa-brands fa-facebook-messenger" style="font-size: 17px;"></i>
                                <span>Message</span>
                            </a>
                        </li>
                        <li>
                            <a href="../app/group.html" class=" ">
                                <i class="fa-solid fa-users" style="font-size: 17px;"></i>
                                <span>Group</span>
                            </a>
                        </li>
                        <li class=" ">
                            <a href="../app/todo.html" class=" ">
                                <i class="fa-solid fa-flag" style="font-size: 17px;"></i>
                                <span>Page</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="d-flex justify-content-center w-100" style="height: 15px;">
                    <hr style="width: 90%;">
                </div>
                <nav class="iq-sidebar-menu">

                    <ul id="iq-sidebar-toggle" class="iq-menu">
                        <li>
                            <h5 class="mt-3">
                                Shortcuts
                            </h5>
                        </li>
                        <li class="text-nowrap">
                            <router-link :to="{ name: 'profile-client' }">
                                <div class="" style="overflow: hidden; width: 35px;
                                border-radius: 6px;
                                height: 35px; background-color: #333;">
                                    <img class="" style="width: 100%; height: 100%; object-fit: cover;"
                                        src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/324272242_883346303089934_3006772613680125568_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=piCjt0Y_erkAX93eBOC&_nc_ht=scontent.fdad3-1.fna&oh=00_AfANcfcJLAM_8J7eg9Coy1B43Wh3Ne3q85MWoz8F1M7ROw&oe=6551688B"
                                        alt="">
                                </div>
                                <span class="ms-1">Bộ Tộc MixiGaming</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-x" style="width: 250px; transform: translate3d(0px, 0px, 0px);">
                </div>
            </div>
            <div class="scrollbar-track scrollbar-track-y" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-y"
                    style="height: 514px; transform: translate3d(0px, 0px, 0px);"></div>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="card w-90 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0 mx-auto">
            <div class="d-flex" style="gap: 14px">
                <router-link :to="{ name: 'story' }">
                    <div class="bg-primary main-story">
                        <div class="hover-background">

                        </div>
                        <div class="img-background" style="height: 80%; width: 100%; background-color: red;">
                            <img class="img-fluid"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZIc2OJOB_NM_uuzfT3zRoS_iiDNRVu_TiA&usqp=CAU"
                                alt="">
                        </div>
                        <div
                            style="position: absolute; bottom: 0; height: 20%; width: 100%; background-color: #fff; display: flex; justify-content: center;">
                            <div class="btn-create-story d-flex justify-content-center align-items-center"
                                style="color: #fff;">
                                <i class="las la-plus la-2x"></i>
                            </div>
                            <div class="mb-1" style="z-index: 1; position: absolute; bottom: 0px; color: #333;">
                                <b class="name-in-story ">Create Story</b>
                            </div>
                        </div>
                    </div>
                </router-link>

                <div class=" bg-primary main-story">
                    <div class="hover-background">

                    </div>
                    <div class="img-background">
                        <img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/sustainability/2022-Sustainability-Report-1920.jpg.pc-adaptive.full.medium.jpg"
                            alt="">
                    </div>
                    <div class="avatar">
                        <img class="img-fluid" src="../../../assets/client/images/user/1.jpg" alt="">
                    </div>
                    <div class="text-light mb-1" style="z-index: 1;">
                        <b class="name-in-story">Lê Công Anh</b>
                    </div>
                </div>
                <div class=" bg-primary main-story">
                    <div class="hover-background">

                    </div>
                    <div class="img-background">
                        <img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/sustainability/2022-Sustainability-Report-1920.jpg.pc-adaptive.full.medium.jpg"
                            alt="">
                    </div>
                    <div class="avatar">
                        <img class="img-fluid" src="../../../assets/client/images/user/1.jpg" alt="">

                    </div>
                    <div class="text-light mb-1" style="z-index: 1;">
                        <b class="name-in-story">Lê Công Anh</b>
                    </div>
                </div>
                <div class=" bg-primary main-story">
                    <div class="hover-background">

                    </div>
                    <div class="img-background">
                        <img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/sustainability/2022-Sustainability-Report-1920.jpg.pc-adaptive.full.medium.jpg"
                            alt="">
                    </div>
                    <div class="avatar">
                        <img class="img-fluid" src="../../../assets/client/images/user/1.jpg" alt="">

                    </div>
                    <div class="text-light mb-1" style="z-index: 1;">
                        <b class="name-in-story">Lê Công Anh</b>
                    </div>
                </div>
                <div class=" bg-primary main-story">
                    <div class="hover-background">

                    </div>
                    <div class="img-background">
                        <img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/sustainability/2022-Sustainability-Report-1920.jpg.pc-adaptive.full.medium.jpg"
                            alt="">
                    </div>
                    <div class="avatar">
                        <img class="img-fluid" src="../../../assets/client/images/user/1.jpg" alt="">

                    </div>
                    <div class="text-light mb-1" style="z-index: 1;">
                        <b class="name-in-story">Lê Công Anh</b>
                    </div>
                </div>

            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-1 row m-0 p-0"></div>
            <div class="col-lg-10 row m-0 p-0">
                <div class="col-sm-12">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="post-item">
                                <div class="d-flex justify-content-between">
                                    <div class="me-3">
                                        <img class="rounded-circle img-fluid avatar-60"
                                            src="../../../assets/client/images/user/1.jpg" alt="">
                                    </div>
                                    <div class="w-100">
                                        <div class="d-flex justify-content-between">
                                            <div class="">
                                                <h5 class="mb-0 d-inline-block">Bni Cyst</h5>
                                                <p class="ms-1 mb-0 d-inline-block">Changed Profile Picture</p>
                                                <p class="mb-0">3 day ago</p>
                                            </div>
                                            <div class="card-post-toolbar">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        <i class="ri-more-fill"></i>
                                                    </span>
                                                    <div class="dropdown-menu m-0 p-0">
                                                        <a class="dropdown-item p-3" href="#">
                                                            <div class="d-flex align-items-top">
                                                                <i class="ri-save-line h4"></i>
                                                                <div class="data ms-2">
                                                                    <h6>Save Post</h6>
                                                                    <p class="mb-0">Add this to your saved items</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a class="dropdown-item p-3" href="#">
                                                            <div class="d-flex align-items-top">
                                                                <i class="ri-close-circle-line h4"></i>
                                                                <div class="data ms-2">
                                                                    <h6>Hide Post</h6>
                                                                    <p class="mb-0">See fewer posts like this.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a class="dropdown-item p-3" href="#">
                                                            <div class="d-flex align-items-top">
                                                                <i class="ri-user-unfollow-line h4"></i>
                                                                <div class="data ms-2">
                                                                    <h6>Unfollow User</h6>
                                                                    <p class="mb-0">Stop seeing posts but stay friends.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a class="dropdown-item p-3" href="#">
                                                            <div class="d-flex align-items-top">
                                                                <i class="ri-notification-line h4"></i>
                                                                <div class="data ms-2">
                                                                    <h6>Notifications</h6>
                                                                    <p class="mb-0">Turn on notifications for this post</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-post text-center">
                                <a href="javascript:void();"><img src="../../../assets/client/images/page-img/p5.jpg"
                                        alt="post-image" class="img-fluid rounded w-100 mt-3"></a>
                            </div>
                            <div class="comment-area mt-3">
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <div class="like-block position-relative d-flex align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="like-data">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        <img src="../../../assets/client/images/icon/01.png"
                                                            class="img-fluid" alt="">
                                                    </span>
                                                    <div class="dropdown-menu py-2">
                                                        <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Like"
                                                            aria-label="Like"><img
                                                                src="../../../assets/client/images/icon/01.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Love"
                                                            aria-label="Love"><img
                                                                src="../../../assets/client/images/icon/02.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Happy"
                                                            aria-label="Happy"><img
                                                                src="../../../assets/client/images/icon/03.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="HaHa"
                                                            aria-label="HaHa"><img
                                                                src="../../../assets/client/images/icon/04.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Think"
                                                            aria-label="Think"><img
                                                                src="../../../assets/client/images/icon/05.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Sade"
                                                            aria-label="Sade"><img
                                                                src="../../../assets/client/images/icon/06.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Lovely"
                                                            aria-label="Lovely"><img
                                                                src="../../../assets/client/images/icon/07.png"
                                                                class="img-fluid" alt=""></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="total-like-block ms-2 me-3">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        140 Likes
                                                    </span>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="#">Max Emum</a>
                                                        <a class="dropdown-item" href="#">Bill Yerds</a>
                                                        <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                                        <a class="dropdown-item" href="#">Tara Misu</a>
                                                        <a class="dropdown-item" href="#">Midge Itz</a>
                                                        <a class="dropdown-item" href="#">Sal Vidge</a>
                                                        <a class="dropdown-item" href="#">Other</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="total-comment-block">
                                            <div class="dropdown">
                                                <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false" role="button">
                                                    20 Comment
                                                </span>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Max Emum</a>
                                                    <a class="dropdown-item" href="#">Bill Yerds</a>
                                                    <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                                    <a class="dropdown-item" href="#">Tara Misu</a>
                                                    <a class="dropdown-item" href="#">Midge Itz</a>
                                                    <a class="dropdown-item" href="#">Sal Vidge</a>
                                                    <a class="dropdown-item" href="#">Other</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                        <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn"
                                            aria-controls="share-btn"><i class="ri-share-line"></i>
                                            <span class="ms-1">99 Share</span></a>
                                    </div>
                                </div>
                                <hr>
                                <ul class="post-comments list-inline p-0 m-0">
                                    <li class="mb-2">
                                        <div class="d-flex">
                                            <div class="user-img">
                                                <img src="../../../assets/client/images/user/02.jpg" alt="userimg"
                                                    class="avatar-35 rounded-circle img-fluid">
                                            </div>
                                            <div class="comment-data-block ms-3">
                                                <h6>Monty Carlo</h6>
                                                <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                                <div class="d-flex flex-wrap align-items-center comment-activity">
                                                    <a href="javascript:void();">like</a>
                                                    <a href="javascript:void();">reply</a>
                                                    <a href="javascript:void();">translate</a>
                                                    <span> 5 min </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="user-img">
                                                <img src="../../../assets/client/images/user/03.jpg" alt="userimg"
                                                    class="avatar-35 rounded-circle img-fluid">
                                            </div>
                                            <div class="comment-data-block ms-3">
                                                <h6>Paul Molive</h6>
                                                <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                                <div class="d-flex flex-wrap align-items-center comment-activity">
                                                    <a href="javascript:void();">like</a>
                                                    <a href="javascript:void();">reply</a>
                                                    <a href="javascript:void();">translate</a>
                                                    <span> 5 min </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>


                                <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                    <input type="text" class="form-control rounded" placeholder="Enter Your Comment">
                                    <div class="comment-attagement d-flex">
                                        <a href="javascript:void();"><i class="ri-link me-3"></i></a>
                                        <a href="javascript:void();"><i class="ri-user-smile-line me-3"></i></a>
                                        <a href="javascript:void();"><i class="ri-camera-line me-3"></i></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 text-center">
                <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
            </div>
        </div>

    </div>
    <div class="right-sidebar-mini">
        <div class="right-sidebar-panel p-0">
            <div class="card shadow-none">
                <div class="card-body p-0 ">
                    <div class="media-height p-3" data-scrollbar="true" tabindex="-1"
                        style="overflow: hidden; outline: none;">
                        <div class="scroll-content">
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/01.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Anna Sthesia</h6>
                                    <p class="mb-0">Just Now</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/02.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Paul Molive</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/03.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Anna Mull</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/04.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Paige Turner</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/11.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Bob Frapples</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/02.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Barb Ackue</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/03.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Greta Life</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-away">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/12.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Ira Membrit</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-away">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/01.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Pete Sariya</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="iq-profile-avatar">
                                    <img class="rounded-circle avatar-50" src="../../../assets/client/images/user/02.jpg"
                                        alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Monty Carlo</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </div>
                        </div>
                        <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                            <div class="scrollbar-thumb scrollbar-thumb-x"
                                style="width: 260px; transform: translate3d(0px, 0px, 0px);"></div>
                        </div>
                        <div class="scrollbar-track scrollbar-track-y" style="display: block;">
                            <div class="scrollbar-thumb scrollbar-thumb-y"
                                style="height: 328.611px; transform: translate3d(0px, 0px, 0px);"></div>
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
import $ from 'jquery';
import coreFunction from '../../../core/coreFunction';
import axios from '../../../core/coreRequest'
export default {
    data() {
        return {
        };
    },
    mounted() {
        console.log(window.localStorage.getItem('token'));
        this.dataClient();
    },
    methods: {
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
        dataClient() {
            axios
                .get('story')
                .then((res) => {
                    console.log(res.data);
                });
        }

    },
}
</script>
<style>
@import './style.css'
</style>