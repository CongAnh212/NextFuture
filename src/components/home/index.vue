<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-2 row m-0 p-0"></div>
            <div class="col-lg-8 row m-0 p-0">
                <div class="col-sm-12">
                    <div id="post-modal-data" class="card card-block card-stretch card-height">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Create Post</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="user-img">
                                    <img src="../../assets/client/images/user/1.jpg" alt="userimg"
                                        class="avatar-60 rounded-circle">
                                </div>
                                <form class="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal"
                                    action="javascript:void();">
                                    <input type="text" class="form-control rounded" placeholder="Write something here..."
                                        style="border:none;">
                                </form>
                            </div>
                            <hr>
                            <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                <li data-bs-toggle="modal" data-bs-target="#exampleModal" class="me-3 mb-md-0 mb-2">
                                    <a  href="#"
                                        class="btn btn-soft-primary">
                                        <img src="../../assets/client/images/small/07.png" alt="icon"
                                            class="img-fluid me-2"> Photo/Video
                                    </a>
                                </li>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <li class="me-3 mb-md-0 mb-2">
                                    <a href="#" class="btn btn-soft-primary">
                                        <img src="../../assets/client/images/small/08.png" alt="icon"
                                            class="img-fluid me-2"> Tag Friend
                                    </a>
                                </li>
                                <li class="me-3">
                                    <a href="#" class="btn btn-soft-primary">
                                        <img src="../../assets/client/images/small/09.png" alt="icon"
                                            class="img-fluid me-2"> Feeling/Activity
                                    </a>
                                </li>
                                <li>
                                    <button class="btn btn-soft-primary">
                                        <div class="card-header-toolbar d-flex align-items-center">
                                            <div class="dropdown">
                                                <div class="dropdown-toggle" id="post-option" data-bs-toggle="dropdown">
                                                    <i class="ri-more-fill"></i>
                                                </div>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="post-option"
                                                    style="">
                                                    <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-bs-target="#post-modal">Check in</a>
                                                    <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-bs-target="#post-modal">Live Video</a>
                                                    <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-bs-target="#post-modal">Gif</a>
                                                    <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-bs-target="#post-modal">Watch Party</a>
                                                    <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-bs-target="#post-modal">Play with Friend</a>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="modal fade" id="post-modal" tabindex="-1" aria-labelledby="post-modalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog   modal-fullscreen-sm-down">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i
                                                class="ri-close-fill"></i></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="d-flex align-items-center">
                                            <div class="user-img">
                                                <img src="../../assets/client/images/user/1.jpg" alt="userimg"
                                                    class="avatar-60 rounded-circle img-fluid">
                                            </div>
                                            <form class="post-text ms-3 w-100" action="javascript:void();">
                                                <input type="text" class="form-control rounded"
                                                    placeholder="Write something here..." style="border:none;">
                                            </form>
                                        </div>
                                        <hr>
                                        <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/07.png" alt="icon"
                                                        class="img-fluid"> Photo/Video</div>
                                            </li>
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/08.png" alt="icon"
                                                        class="img-fluid"> Tag Friend</div>
                                            </li>
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/09.png" alt="icon"
                                                        class="img-fluid"> Feeling/Activity</div>
                                            </li>
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/10.png" alt="icon"
                                                        class="img-fluid"> Check in</div>
                                            </li>
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/11.png" alt="icon"
                                                        class="img-fluid"> Live Video</div>
                                            </li>
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/12.png" alt="icon"
                                                        class="img-fluid"> Gif</div>
                                            </li>
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/13.png" alt="icon"
                                                        class="img-fluid"> Watch Party</div>
                                            </li>
                                            <li class="col-md-6 mb-3">
                                                <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img
                                                        src="../../assets/client/images/small/14.png" alt="icon"
                                                        class="img-fluid"> Play with Friends</div>
                                            </li>
                                        </ul>
                                        <hr>
                                        <div class="other-option">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-img me-3">
                                                        <img src="../../assets/client/images/user/1.jpg" alt="userimg"
                                                            class="avatar-60 rounded-circle img-fluid">
                                                    </div>
                                                    <h6>Your Story</h6>
                                                </div>
                                                <div class="card-post-toolbar">
                                                    <div class="dropdown">
                                                        <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false" role="button">
                                                            <span class="btn btn-primary">Friend</span>
                                                        </span>
                                                        <div class="dropdown-menu m-0 p-0">
                                                            <a class="dropdown-item p-3" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-save-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Public</h6>
                                                                        <p class="mb-0">Anyone on or off Facebook</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a class="dropdown-item p-3" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-close-circle-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Friends</h6>
                                                                        <p class="mb-0">Your Friend on facebook</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a class="dropdown-item p-3" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-user-unfollow-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Friends except</h6>
                                                                        <p class="mb-0">Don't show to some friends</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a class="dropdown-item p-3" href="#">
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
                                        <button type="submit" class="btn btn-primary d-block w-100 mt-3">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="user-post-data">
                                <div class="d-flex justify-content-between">
                                    <div class="me-3">
                                        <img class="rounded-circle img-fluid" src="../../assets/client/images/user/03.jpg"
                                            alt="">
                                    </div>
                                    <div class="w-100">
                                        <div class="d-flex  justify-content-between">
                                            <div class="">
                                                <h5 class="mb-0 d-inline-block">Barb Ackue</h5>
                                                <span class="mb-0 d-inline-block">Added New Image in a Post</span>
                                                <p class="mb-0 text-primary">1 hour ago</p>
                                            </div>
                                            <div class="card-post-toolbar">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" id="postdata-5" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        <i class="ri-more-fill"></i>
                                                    </span>
                                                    <div class="dropdown-menu m-0 p-0" aria-labelledby="postdata-5">
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
                            <div class="mt-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at
                                    commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                                    massa sed rhoncus</p>
                            </div>
                            <div class="user-post">
                                <a href="javascript:void();"><img src="../../assets/client/images/page-img/p4.jpg"
                                        alt="post-image" class="img-fluid rounded w-100"></a>
                            </div>
                            <div class="comment-area mt-3">
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <div class="like-block position-relative d-flex align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="like-data">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        <img src="../../assets/client/images/icon/01.png" class="img-fluid"
                                                            alt="">
                                                    </span>
                                                    <div class="dropdown-menu py-2">
                                                        <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Like"
                                                            aria-label="Like"><img
                                                                src="../../assets/client/images/icon/01.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Love"
                                                            aria-label="Love"><img
                                                                src="../../assets/client/images/icon/02.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Happy"
                                                            aria-label="Happy"><img
                                                                src="../../assets/client/images/icon/03.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="HaHa"
                                                            aria-label="HaHa"><img
                                                                src="../../assets/client/images/icon/04.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Think"
                                                            aria-label="Think"><img
                                                                src="../../assets/client/images/icon/05.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Sade"
                                                            aria-label="Sade"><img
                                                                src="../../assets/client/images/icon/06.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Lovely"
                                                            aria-label="Lovely"><img
                                                                src="../../assets/client/images/icon/07.png"
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
                                        <div class="d-flex ">
                                            <div class="user-img">
                                                <img src="../../assets/client/images/user/02.jpg" alt="userimg"
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
                                        <div class="d-flex ">
                                            <div class="user-img">
                                                <img src="../../assets/client/images/user/03.jpg" alt="userimg"
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
                <div class="col-sm-12">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="user-post-data">
                                <div class="d-flex justify-content-between">
                                    <div class="me-3">
                                        <img class="rounded-circle img-fluid" src="../../assets/client/images/user/04.jpg"
                                            alt="">
                                    </div>
                                    <div class="w-100">
                                        <div class=" d-flex  justify-content-between">
                                            <div class="">
                                                <h5 class="mb-0 d-inline-block">Ira Membrit</h5>
                                                <p class="mb-0 d-inline-block">Update her Status</p>
                                                <p class="mb-0 text-primary">6 hour ago</p>
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
                            <div class="mt-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at
                                    commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                                    massa sed rhoncus</p>
                            </div>
                            <div class="comment-area mt-3">
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <div class="like-block position-relative d-flex align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="like-data">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        <img src="../../assets/client/images/icon/01.png" class="img-fluid"
                                                            alt="">
                                                    </span>
                                                    <div class="dropdown-menu py-2">
                                                        <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Like"
                                                            aria-label="Like"><img
                                                                src="../../assets/client/images/icon/01.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Love"
                                                            aria-label="Love"><img
                                                                src="../../assets/client/images/icon/02.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Happy"
                                                            aria-label="Happy"><img
                                                                src="../../assets/client/images/icon/03.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="HaHa"
                                                            aria-label="HaHa"><img
                                                                src="../../assets/client/images/icon/04.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Think"
                                                            aria-label="Think"><img
                                                                src="../../assets/client/images/icon/05.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Sade"
                                                            aria-label="Sade"><img
                                                                src="../../assets/client/images/icon/06.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Lovely"
                                                            aria-label="Lovely"><img
                                                                src="../../assets/client/images/icon/07.png"
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
                                                <img src="../../assets/client/images/user/02.jpg" alt="userimg"
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
                                        <div class="d-flex ">
                                            <div class="user-img">
                                                <img src="../../assets/client/images/user/03.jpg" alt="userimg"
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

                <div class="col-sm-12">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="user-post-data">
                                <div class="d-flex justify-content-between">
                                    <div class="me-3">
                                        <img class="rounded-circle img-fluid" src="../../assets/client/images/user/02.jpg"
                                            alt="">
                                    </div>
                                    <div class="w-100">
                                        <div class="d-flex justify-content-between">
                                            <div class="">
                                                <h5 class="mb-0 d-inline-block">Paige Turner</h5>
                                                <p class="mb-0 d-inline-block">Added New Video in his Timeline</p>
                                                <p class="mb-0 text-primary">1 day ago</p>
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
                            <div class="mt-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at
                                    commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                                    massa sed rhoncus</p>
                            </div>
                            <div class="user-post">
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0"
                                        allowfullscreen=""></iframe>
                                </div>
                            </div>
                            <div class="comment-area mt-3">
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <div class="like-block position-relative d-flex align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="like-data">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        <img src="../../assets/client/images/icon/01.png" class="img-fluid"
                                                            alt="">
                                                    </span>
                                                    <div class="dropdown-menu py-2">
                                                        <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Like"
                                                            aria-label="Like"><img
                                                                src="../../assets/client/images/icon/01.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Love"
                                                            aria-label="Love"><img
                                                                src="../../assets/client/images/icon/02.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Happy"
                                                            aria-label="Happy"><img
                                                                src="../../assets/client/images/icon/03.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="HaHa"
                                                            aria-label="HaHa"><img
                                                                src="../../assets/client/images/icon/04.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Think"
                                                            aria-label="Think"><img
                                                                src="../../assets/client/images/icon/05.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Sade"
                                                            aria-label="Sade"><img
                                                                src="../../assets/client/images/icon/06.png"
                                                                class="img-fluid" alt=""></a>
                                                        <a class="me-2" href="#" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="Lovely"
                                                            aria-label="Lovely"><img
                                                                src="../../assets/client/images/icon/07.png"
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
                                        <div class="d-flex flex-wrap">
                                            <div class="user-img">
                                                <img src="../../assets/client/images/user/02.jpg" alt="userimg"
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
                                        <div class="d-flex flex-wrap">
                                            <div class="user-img">
                                                <img src="../../assets/client/images/user/03.jpg" alt="userimg"
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
                <img src="../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>