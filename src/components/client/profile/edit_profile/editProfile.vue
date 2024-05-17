<template>
    <div class="flex-center pt-3 ps-5 pe-5">
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
                            <small class="text-dark f-500">{{ data_my_info.fullname }}</small>
                        </div>
                    </div>
                </div>
                <div class="w-100" style="border-left: 2px solid #2a2a2a; padding-left: 0.5rem;">
                    <h5 class="text-dark f-500">
                        <router-link class='text-dark '
                            :to="{ name: 'detailProfile', params: { username: data_my_info.username ? data_my_info.username : ' ' } }">
                            <i class="fa-solid fa-arrow-left"></i>
                            Edit profile
                        </router-link>
                    </h5>
                    <div class="d-flex mt-2">
                        <div class="me-2 " style="flex:1">
                            <label class="form-label m-0 text-dark">Full name</label>
                            <input @change="handleButton()" v-model="data_my_info.fullname" type="text"
                                class="form-control" placeholder="Full name">
                        </div>
                        <div style="flex:1">
                            <label class="form-label m-0 text-dark">Nick name</label>
                            <input @change="handleButton()" v-model="data_my_info.nickname" type="text"
                                class="form-control" placeholder="Nick name">
                        </div>
                    </div>
                    <div class="d-flex mt-2">
                        <div class="me-2" style="flex:1">
                            <label class="form-label m-0 text-dark">Address</label>
                            <input @change="handleButton()" v-model="data_my_info.address" type="text"
                                class="form-control" placeholder="Address">
                        </div>
                        <div style="flex:1">
                            <label class="form-label m-0 text-dark">Phone number</label>
                            <input @change="handleButton()" v-model="data_my_info.phone_number" type="text"
                                class="form-control" placeholder="Phone number">
                        </div>

                    </div>
                    <div class="mt-2">
                        <label class="form-label m-0 text-dark">Date of birth</label>
                        <input @change="handleButton()" v-model="data_my_info.date_of_birth" type="date"
                            class="form-control" placeholder="Date of birth">
                    </div>
                    <div class="mt-2">
                        <label class="form-label m-0 text-dark">Gender</label>
                        <select @change="handleButton()" class="form-select" v-model="data_my_info.gender">
                            <option value="1" class="text-dark">Male</option>
                            <option value="0" class="text-dark">Female</option>
                            <option value="-1" class="text-dark">Other</option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <label class="form-label m-0 text-dark">Bio</label>
                        <textarea @change="handleButton()" v-model="data_my_info.bio" class="form-control" cols="30"
                            rows="3">
                        </textarea>
                    </div>
                    <div class="d-flex mt-2">
                        <span style="flex: 1;"></span>
                        <button class="btn btn-primary f-500 updateProfile" style="width: 11rem;"
                            @click="updateProfile()" disabled>
                            Update profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-center ps-5 pe-5 pb-1 ">
        <div class="card flex-center " style="width: 40%;  box-shadow: 0 0 10px #2a2a2a41;">
            <div class="card-body d-flex w-100">
                <div v-if="links.status == true" class="w-100" style="padding-left: 0.5rem;">
                    <h5 class="text-dark f-500">Add link address </h5>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input v-model="links.tiktok.link" type="text" class="form-control me-2 pe-4"
                            placeholder="Link tiktok">
                        <i class="fa-brands fa-tiktok text-dark" style="position: absolute; left:46%; top: 0.85em;"></i>
                        <input v-model="links.tiktok.name" type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input v-model="links.facebook.link" type="text" class="form-control me-2 pe-4"
                            placeholder="Link facebook">
                        <i class="fa-brands fa-facebook text-dark"
                            style="position: absolute; left:46%; top: 0.85em;"></i>
                        <input v-model="links.facebook.name" type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input v-model="links.instagram.link" type="text" class="form-control me-2 pe-4"
                            placeholder="Link instagram">
                        <i class="fa-brands fa-instagram text-dark"
                            style="position: absolute; left:46%; top: 0.85em;"></i>
                        <input v-model="links.instagram.name" type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input v-model="links.youtube.link" type="text" class="form-control me-2 pe-4"
                            placeholder="Link youtube">
                        <i class="fa-brands fa-youtube text-dark"
                            style="position: absolute; left:46%; top: 0.85em;"></i>
                        <input v-model="links.youtube.name" type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input v-model="links.x.link" type="text" class="form-control me-2 pe-4"
                            placeholder="Link twitter">
                        <i class="fa-brands fa-x-twitter text-dark"
                            style="position: absolute; left:46%; top: 0.85em;"></i>
                        <input v-model="links.x.name" type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input v-model="links.threads.link" type="text" class="form-control me-2 pe-4"
                            placeholder="Link threads">
                        <i class="fa-brands fa-threads text-dark"
                            style="position: absolute; left:46%; top: 0.85em;"></i>
                        <input v-model="links.threads.name" type="text" class="form-control " placeholder="Name">
                    </div>
                    <div class=" mt-2 text-end w-100">
                        <button class="btn btn-primary f-500" style="width: 11rem;" @click="updateLinkAddress()">
                            Update link address
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-center ps-5 pe-5 pb-2 ">
        <div class="card flex-center " style="width: 40%;  box-shadow: 0 0 10px #2a2a2a41;">
            <div class="card-body d-flex w-100">
                <div class="w-100" style="padding-left: 0.5rem;">
                    <h5 class="text-dark f-500">Change password</h5>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input @input="check_disable" v-model='pass.old' type="password" class="form-control pe-4"
                            placeholder="Old password" ref="passwordOld">
                        <i class="fas position-absolute c-pointer text-dark"
                            :class="showPasswordOld ? 'fa-eye-slash' : 'fa-eye'" @click="showPass('old')"
                            style="right: 0.85em; top: 50%; transform: translateY(-50%); font-size: 1rem;"></i>
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input @input="check_disable" v-model='pass.new' type="password" class="form-control pe-4"
                            placeholder="New password" ref="passwordNew">
                        <i class="fas position-absolute c-pointer text-dark"
                            :class="showPasswordNew ? 'fa-eye-slash' : 'fa-eye'" @click="showPass('new')"
                            style="right: 0.85em; top: 50%; transform: translateY(-50%); font-size: 1rem;"></i>
                    </div>
                    <div class="d-flex mt-2" style="position: relative;">
                        <input @input="check_disable" v-model='pass.renewpass' type="password" class="form-control pe-4"
                            placeholder="Enter a new password" ref="passwordConfirm">
                        <i class="fas position-absolute c-pointer text-dark"
                            :class="showPasswordConfirm ? 'fa-eye-slash' : 'fa-eye'" @click="showPass('confirm')"
                            style="right: 0.85em; top: 50%; transform: translateY(-50%); font-size: 1rem;"></i>
                    </div>

                    <div class="d-flex mt-2">
                        <span style="flex: 1;"></span>
                        <button :disabled="change_pass_status == 0" class="btn btn-primary f-500" style="width: 11rem;"
                            @click="changePassword()">Change
                            password</button>
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
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            change_pass_status: 0,
            data_my_info: {},
            urlImg: url,
            selectedImage: null,
            image: null,
            link_address: {},
            origin_data: {},
            links: {
                'status': false,
                'youtube': { type: 1, link: '', name: '' },
                'threads': { type: 2, link: '', name: '' },
                'facebook': { type: 3, link: '', name: '' },
                'instagram': { type: 4, link: '', name: '' },
                'x': { type: 5, link: '', name: '' },
                'tiktok': { type: 6, link: '', name: '' },
            },
            showPasswordOld: false,
            showPasswordNew: false,
            showPasswordConfirm: false,
            pass: {
                new: '',
                old: '',
                renewpass: '',
            },
        }
    },
    mounted() {
        this.getDataMyInfo();
        this.linkAddress();
    },
    methods: {
        check_disable() {
            if (this.pass.old && this.pass.new && this.pass.renewpass) {
                this.change_pass_status = 1
            } else {
                this.change_pass_status = 0

            }
        },
        showPass(field) {
            if (field === 'old') {
                this.showPasswordOld = !this.showPasswordOld;
                this.$refs.passwordOld.type = this.showPasswordOld ? 'text' : 'password';
            } else if (field === 'new') {
                this.showPasswordNew = !this.showPasswordNew;
                this.$refs.passwordNew.type = this.showPasswordNew ? 'text' : 'password';
            } else if (field === 'confirm') {
                this.showPasswordConfirm = !this.showPasswordConfirm;
                this.$refs.passwordConfirm.type = this.showPasswordConfirm ? 'text' : 'password';
            }
        },
        handleButton() {
            let isModified = false;
            for (let key in this.data_my_info) {
                if (key === 'created_at') {
                    continue;
                }
                const dataValue = this.data_my_info[key];
                const originValue = this.origin_data[key];
                if (dataValue != originValue) {
                    if (typeof dataValue === 'string' && typeof originValue === 'string') {
                        if (dataValue.trim() == originValue.trim()) {
                            continue
                        }
                    }
                    isModified = true;
                    break;
                }
            }
            if (isModified) {
                $('.updateProfile').prop('disabled', false);
            } else {
                $('.updateProfile').prop('disabled', true);
            }
        },
        linkAddress() {
            axios
                .get('profile/data-address-link')
                .then((res) => {
                    this.link_address = res.data.data
                    this.link_address.forEach(i => {
                        if (i.type == 6) {
                            this.links.tiktok = i
                        } else if (i.type == 5) {
                            this.links.x = i
                        } else if (i.type == 4) {
                            this.links.instagram = i
                        } else if (i.type == 3) {
                            this.links.facebook = i
                        } else if (i.type == 2) {
                            this.links.threads = i
                        } else {
                            this.links.youtube = i
                        }

                    });
                    this.links.status = true;

                });
        },
        getDataMyInfo() {
            axios
                .get('profile/accounts-edit')
                .then((res) => {
                    this.data_my_info = Object.assign({}, res.data.data)
                    this.origin_data = Object.assign({}, res.data.data)
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
            if (this.image !== this.origin_data.avatar) {
                $('.updateProfile').prop('disabled', false);
            } else {
                $('.updateProfile').prop('disabled', true);
            }
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
            formData.append('bio', this.data_my_info.bio)
            axios
                .post('profile/update-profile', formData)
                .then((res) => {
                    if (res.data.status) {
                        this.data_my_info = Object.assign({}, res.data.dataEditProfile)
                        this.origin_data = Object.assign({}, res.data.dataEditProfile)
                        this.image = res.data.dataEditProfile.avatar
                        baseFunction.displaySuccess(res);
                        $('.updateProfile').prop('disabled', true);

                        this.$emit('updateProfile', res.data.dataEditProfile)
                    }
                })
        },
        updateLinkAddress() {
            var check = false
            Object.keys(this.links).forEach((key) => {
                if (key !== 'status') {
                    if ((this.links[key].name == '' && this.links[key].link != '') || (this.links[key].name != '' && this.links[key].link == '')) {
                        if (this.links[key].type == 1) {
                            Swal.fire({
                                icon: "error",
                                title: "Error...",
                                text: "Please enter full YouTube link information",
                                showConfirmButton: false
                            });
                            setTimeout(() => {
                                Swal.close();
                            }, 2000);
                            check = true
                        } else if (this.links[key].type == 2) {
                            Swal.fire({
                                icon: "error",
                                title: "Error...",
                                text: "Please enter full Threads link information",
                                showConfirmButton: false
                            });
                            setTimeout(() => {
                                Swal.close();
                            }, 2000);
                            check = true
                        } else if (this.links[key].type == 3) {
                            Swal.fire({
                                icon: "error",
                                title: "Error...",
                                text: "Please enter full Facebook link information",
                                showConfirmButton: false
                            });
                            setTimeout(() => {
                                Swal.close();
                            }, 2000);
                            check = true
                        } else if (this.links[key].type == 4) {
                            Swal.fire({
                                icon: "error",
                                title: "Error...",
                                text: "Please enter full Instagram link information",
                                showConfirmButton: false
                            });
                            setTimeout(() => {
                                Swal.close();
                            }, 2000);
                            check = true
                        } else if (this.links[key].type == 5) {
                            Swal.fire({
                                icon: "error",
                                title: "Error...",
                                text: "Please enter full X link information",
                                showConfirmButton: false
                            });
                            setTimeout(() => {
                                Swal.close();
                            }, 2000);
                            check = true
                        } else if (this.links[key].type == 6) {
                            Swal.fire({
                                icon: "error",
                                title: "Error...",
                                text: "Please enter full Tiktok link information",
                                showConfirmButton: false
                            });
                            setTimeout(() => {
                                Swal.close();
                            }, 2000);
                            check = true
                        }
                    } else {
                    }
                }
            });
            if (!check) {
                axios
                    .post('profile/update-link-address', this.links)
                    .then((res) => {
                        if (res.data.status) {
                            baseFunction.displaySuccess(res)
                        }
                    })
            }
        },
        changePassword() {
            this.change_pass_status = 0
            let check = false
            if (this.pass.new == this.pass.renewpass && this.pass.old != this.pass.new) {
                check = true
            } else {
                if (this.pass.new != this.pass.renewpass) {
                    baseFunction.displaySuccess({
                        data: {
                            message: 'Re-enter the password that does not overlap with the new password',
                            status: 0
                        }
                    })
                } else {
                    baseFunction.displaySuccess({
                        data: {
                            message: 'The new password must not be the same as the old password',
                            status: 0
                        }
                    })
                }
            }
            if (check) {
                axios
                    .post('profile/change-password', this.pass)
                    .then((res) => {
                        this.change_pass_status = 1

                        baseFunction.displaySuccess(res);
                    })
            }
        }
    },
}
</script>
<style>
@import '../style.css'
</style>