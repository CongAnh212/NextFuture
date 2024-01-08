<template>
    <div class="flex-center pt-3 ps-5 pe-5 bg-xanh">
        <div class="card flex-center " style="width: 40%; width: 40%; box-shadow: 0 0 10px #2a2a2a41;">
            <div class="card-body d-flex w-100">
                <div class="flex-center" style="border-radius: 10px; width: 45%;">
                    <div style="flex:1;flex-direction: column;" class="flex-center">
                        <div style='width: 75px; height: 75px; overflow: hidden; cursor: pointer; position: relative;'
                            class="circle change-photo">
                            <div class="flex-center photo-hover" @click="openFileInput()"
                                style="position: absolute; width: 100%; height: 100%; background-color: #24232385; opacity: 0;">
                                <i class="fa-solid fa-pen text-light fa-xl"></i>
                            </div>
                            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
                            <img :src="selectedImage ? selectedImage : urlImg + data_my_info.avatar" class=" img-fluid"
                                style=" object-fit:cover;width: 100%;height: 100%;">
                        </div>
                        <div class="ms-1 text-center" style="line-height: 1.25rem;flex:1;flex-wrap: wrap; width: 9rem;">
                            <b class="text-dark">{{ data_my_info.nickname }}</b>
                            <br>
                            <smal class="text-dark f-500">{{ data_my_info.fullname }}</smal>
                        </div>
                    </div>
                </div>
                <div class="w-100" style="border-left: 2px solid #2a2a2a; padding-left: 0.5rem;">
                    <h5 class="text-dark f-500">Edit profile</h5>
                    <div class="d-flex mt-2">
                        <div class="me-2 " style="flex:1">
                            <label class="form-label m-0 text-dark">Full name</label>
                            <input v-model="data_my_info.fullname" type="text" class="form-control" placeholder="Full name">
                        </div>
                        <div style="flex:1">
                            <label class="form-label m-0 text-dark">Nick name</label>
                            <input v-model="data_my_info.nickname" type="text" class="form-control" placeholder="Nick name">
                        </div>
                    </div>
                    <div class="d-flex mt-2">
                        <div class="me-2" style="flex:">
                            <label class="form-label m-0 text-dark">Address</label>
                            <input v-model="data_my_info.address" type="text" class="form-control" placeholder="Address">
                        </div>
                        <div style="flex:1">
                            <label class="form-label m-0 text-dark">Phone number</label>
                            <input v-model="data_my_info.phone_number" type="text" class="form-control"
                                placeholder="Phone number">
                        </div>

                    </div>
                    <div class="mt-2">
                        <label class="form-label m-0 text-dark">Date of birth</label>
                        <input v-model="data_my_info.date_of_birth" type="date" class="form-control"
                            placeholder="Date of birth">
                    </div>
                    <div class="mt-2">
                        <label class="form-label m-0 text-dark">Gender</label>
                        <select class="form-select" v-model="data_my_info.gender">
                            <option value="1" class="text-dark">Male</option>
                            <option value="0" class="text-dark">Female</option>
                            <option value="-1" class="text-dark">Other</option>
                        </select>
                    </div>
                    <div class="d-flex mt-2">
                        <span style="flex: 1;"></span>
                        <button class="btn btn-primary f-500" style="width: 11rem;" @click="updateProfile()">Update
                            profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-center ps-5 pe-5 pb-1 bg-xanh">
        <div class="card flex-center " style="width: 40%;  box-shadow: 0 0 10px #2a2a2a41;">
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
                        <button class="btn btn-primary f-500" style="width: 11rem;">Update link address</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-center ps-5 pe-5 pb-2 bg-xanh">
        <div class="card flex-center " style="width: 40%;  box-shadow: 0 0 10px #2a2a2a41;">
            <div class="card-body d-flex w-100">
                <div class="w-100" style="padding-left: 0.5rem;">
                    <h5 class="text-dark f-500">Change password</h5>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="password" class="form-control pe-4 " placeholder="Old password">
                        <i class="fa-solid fa-eye text-dark" style="position: absolute; left:95%; top: 0.85em;"></i>
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="password" class="form-control pe-4 " placeholder="New password">
                        <i class="fa-solid fa-eye-slash text-dark" style="position: absolute; left:95%; top: 0.85em;"></i>
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input type="password" class="form-control pe-4 " placeholder="Enter a new password">
                        <i class="fa-solid fa-eye-slash text-dark" style="position: absolute; left:95%; top: 0.85em;"></i>
                    </div>
                    <div class="d-flex mt-2">
                        <span style="flex: 1;"></span>
                        <button class="btn btn-primary f-500" style="width: 11rem;">Change password</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest'
import baseFunction from '../../../../core/coreFunction'
import ImageUploader from 'vue-image-crop-upload'

export default {
    data() {
        return {
            data_my_info: {},
            urlImg: url,
            selectedImage: null,
            image: null,
        }
    },
    mounted() {
        this.getDataMyInfo();
    },
    methods: {
        getDataMyInfo() {
            axios
                .get('profile/accounts-edit')
                .then((res) => {
                    this.data_my_info = res.data.data
                });
        },
        openFileInput() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            this.selectedImage = imageUrl;
            this.image = file
            console.log("  this.image : ", this.image);
        },
        updateProfile() {
            const formData = new FormData();
            formData.append('avatar', this.image);
            formData.append('fullname', this.data_my_info.fullname)
            formData.append('nickname', this.data_my_info.nickname)
            formData.append('address', this.data_my_info.address)
            formData.append('phone_number', this.data_my_info.phone_number)
            formData.append('date_of_birth', this.data_my_info.date_of_birth)
            formData.append('gender', this.data_my_info.gender)

            axios
                .post('profile/update-profile', formData)
                .then((res) => {
                    if (res.data.status) {
                        this.getDataMyInfo();
                        baseFunction.displaySuccess(res);
                    }
                })
        }

    },
}
</script>
<style>
@import '../style.css'
</style>