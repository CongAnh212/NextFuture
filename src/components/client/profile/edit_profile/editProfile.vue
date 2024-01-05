<template>
    <div class="flex-center pt-3 ps-5 pe-5 bg-xanh" >
        <div class="card flex-center " style="width: 40%;">
            <div class="card-body d-flex w-100">
                <div class="flex-center" style="border-radius: 10px; width: 45%;">
                    <div style="flex:1;flex-direction: column;" class="flex-center">
                        <div style='width: 75px; height: 75px; overflow: hidden; cursor: pointer; position: relative;'
                            class="circle change-photo">
                            <div class="flex-center photo-hover"
                                style="position: absolute; width: 100%; height: 100%; background-color: #24232385; opacity: 0;">
                                <i class="fa-solid fa-pen text-light fa-xl"></i>
                            </div>
                            <img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8159591_cover.jpg"
                                lass=" img-fluid" style=" object-fit:cover;width: 100%;height: 100%;">
                        </div>
                        <div class="ms-1 text-center" style="line-height: 1.25rem;flex:1">
                            <b class="text-dark">phtsnh26</b>
                            <br>
                            <smal class="text-dark f-500">Phan Công Tánh</smal>
                        </div>
                    </div>
                </div>
                <div class="w-100" style="border-left: 2px solid #2a2a2a; padding-left: 0.5rem;">
                    <h5 class="text-dark f-500">Edit profile</h5>
                    <div class="d-flex mt-2">
                        <input type="text" class="form-control me-2" placeholder="Full name">
                        <input type="text" class="form-control" placeholder="Nick name">
                    </div>
                    <div class="d-flex mt-2">
                        <input type="text" class="form-control me-2" placeholder="Address">
                        <input type="date" class="form-control " placeholder="Date of birth">
                    </div>
                    <div class="d-flex mt-2">
                        <select class="form-select">
                            <option value="1" class="text-dark">Male</option>
                            <option value="0" class="text-dark">Female</option>
                            <option value="-1" class="text-dark">Other</option>
                        </select>

                    </div>
                    <div class="d-flex mt-2">
                        <span style="flex: 1;"></span>
                        <button class="btn btn-primary" style="width: 11rem;">Update profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-center ps-5 pe-5 pb-2 bg-xanh" >
        <div class="card flex-center " style="width: 40%;">
            <div class="card-body d-flex w-100">
                <div class="w-100" style="padding-left: 0.5rem;">
                    <h5 class="text-dark f-500">Add link address </h5>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="text" class="form-control me-2 pe-4" placeholder="Link tiktok">
                        <i class="fa-brands fa-tiktok text-dark" style="position: absolute; left:45%; top: 0.85em;"></i>
                        <input type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="text" class="form-control me-2 pe-4" placeholder="Link facebook">
                        <i class="fa-brands fa-facebook text-dark" style="position: absolute; left:45%; top: 0.85em;"></i>
                        <input type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="text" class="form-control me-2 pe-4" placeholder="Link instagram">
                        <i class="fa-brands fa-instagram text-dark" style="position: absolute; left:45%; top: 0.85em;"></i>
                        <input type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="text" class="form-control me-2 pe-4" placeholder="Link youtube">
                        <i class="fa-brands fa-youtube text-dark" style="position: absolute; left:45%; top: 0.85em;"></i>
                        <input type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="text" class="form-control me-2 pe-4" placeholder="Link twitter">
                        <i class="fa-brands fa-x-twitter text-dark" style="position: absolute; left:45%; top: 0.85em;"></i>
                        <input type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="text" class="form-control me-2 pe-4" placeholder="Link threads">
                        <i class="fa-brands fa-threads text-dark" style="position: absolute; left:45%; top: 0.85em;"></i>
                        <input type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2">
                        <span style="flex: 1;"></span>
                        <button class="btn btn-primary" style="width: 11rem;">Update link address</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
@import '../style.css'
</style>