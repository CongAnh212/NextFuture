<template>
    <div style=" min-height: calc(100vh - 4.688rem);">
        <div class="d-flex align-items-center  p-2 setting" style="font-size: 15px; flex-direction: column;">
            <main class=" mt-2 px-2 radius-7 box-shadow py-2" style="width: 35%;">
                <h5><b>Group setup</b></h5>
                <div v-if="viewRenameGroup" class="flex-between mt-2 mb-2">
                    <span class="f-500 text-dark">Rename the group</span>
                    <i @click="handleClickRenameGroup()" style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <div v-else class="my-1">
                    <span class="f-500 text-dark">Rename the group</span>
                    <input @input="handleInputRenameGroup()" v-model="group_name" type="text" class=" form-control mb-2">
                    <div class="text-end ">
                        <div @click="handleClickRenameGroup()" class="btn  text-primary me-2 btn_cancel f-500 ">Cancel</div>
                        <button class="btn btn-light f-500 saveRenameGroup" @click="updateRenameGroup()"
                            disabled>Save</button>
                    </div>
                </div>
                <hr class="m-0">
                <div v-if="viewPrivacy" class="flex-between my-1">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Privacy</span>
                        <span style="font-size: 0.9em;">{{ infoGroup.privacy == 1 ? 'Public' : "Private" }}</span>
                    </div>
                    <i @click="handleClickPrivacy()" style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <!-- form privacy -->
                <div v-else class=" my-1 ">
                    <div class="f-500 text-dark">Privacy</div>
                    <div @click="handleSelect('rdoPublic', 'savePrivacy')" class=" d-flex px-1 align-items-center bg-hover"
                        style="height: 65px;">
                        <div class="me-2 flex-center circle bg-light" style="width:30px;height:30px;">
                            <i class="fas fa-globe-asia text-dark" style="font-size:20px;"></i>
                        </div>
                        <div class="d-flex justify-content-between align-items-center " style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none; line-height: 1rem;">
                                <h5><b style="font-weight:500;">Public</b></h5>
                                <p style="font-size: 11px;">Anyone can see everyone in the group and what they post</p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="privacy" id="rdoPublic" value="1" />
                        </div>
                    </div>
                    <div @click="handleSelect('rdoPrivate', 'savePrivacy')"
                        class=" d-flex mb-2  align-items-center bg-hover px-1" style="height: 65px;">
                        <div class="me-2 flex-center circle bg-light" style="width:30px;height:30px;">
                            <i class="fas fa-lock text-dark" style="font-size:20px;"></i>
                        </div>
                        <div class="d-flex justify-content-between align-items-center " style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                <h5><b style="font-weight:500;">Private</b></h5>
                                <p style="font-size: 11px;">only members can see everyone in the group and what they post
                                </p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="privacy" id="rdoPrivate" value="-1" />
                        </div>
                    </div>
                    <div class="text-end">
                        <div @click="handleClickPrivacy()" class="btn  text-primary me-2 btn_cancel f-500">Cancel</div>
                        <button @click="updatePrivacy" class="btn btn-light f-500 savePrivacy" disabled>Save</button>
                    </div>
                </div>
                <hr class="m-0">

                <div v-if="viewDisplay" class="flex-between  my-1">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Display</span>
                        <span style="font-size: 0.9em;">{{ infoGroup.display == 2 ? 'Visible' : "Hidden" }}</span>
                    </div>
                    <i @click="handleClickDisplay()" style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <div v-else class="my-1">
                    <div class="f-500 text-dark">Display</div>
                    <div @click="handleSelect('rdoVisible', 'saveDisplay')" class=" d-flex px-1 align-items-center bg-hover"
                        style="height: 65px;">
                        <div class="me-2 flex-center circle bg-light" style="width:30px;height:30px;">
                            <i class="fas fa-eye text-dark" style="font-size:20px;"></i>
                        </div>
                        <div class="d-flex justify-content-between align-items-center " style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none; line-height: 1rem;">
                                <h5><b style="font-weight:500;">Visible</b></h5>
                                <p style="font-size: 11px;">Anyone can see this group</p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="display" id="rdoVisible" value="2" />
                        </div>
                    </div>
                    <div @click="handleSelect('rdoHidden', 'saveDisplay')"
                        class=" d-flex mb-2 px-1 align-items-center bg-hover" style="height: 65px;">
                        <div class="me-2 flex-center circle bg-light" style="width:30px;height:30px;">
                            <i class="fas fa-eye-slash text-dark" style="font-size:20px;"></i>
                        </div>
                        <div class="d-flex justify-content-between align-items-center " style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                <h5><b style="font-weight:500;">Hidden</b></h5>
                                <p style="font-size: 11px;">Only group members can see this group</p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="display" id="rdoHidden" value="-2" />
                        </div>
                    </div>
                    <div class="text-end">
                        <div @click="handleClickDisplay()" class="btn  text-primary me-2 btn_cancel f-500">Cancel</div>
                        <button @click="updateDisplay()" class="btn btn-light f-500 saveDisplay" disabled>Save</button>
                    </div>
                </div>
            </main>
            <main class=" mt-2 px-2 radius-7 box-shadow py-2" style="width: 35%;">
                <h5><b>Manage member</b></h5>
                <div v-if="viewApproval" class="flex-between mt-2">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Need approval to join the group</span>
                        <span style="font-size: 0.9em;">{{ infoGroup.join_approval == 1 ? 'Turn on' : "Turn off" }}</span>
                    </div>
                    <i @click="handleClickApproval()" style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <div v-else class="my-1 mt-2">
                    <div class="f-500 text-dark">Need approval to join the group</div>
                    <div @click="handleSelect('rdoOnApproval', 'saveApproval')" class=" d-flex align-items-center bg-hover"
                        style="height: 50px;">
                        <div class="d-flex justify-content-between align-items-center px-1" style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none; line-height: 1rem;">
                                <h5><b style="font-weight:500;">Turn on</b></h5>
                                <p style="font-size: 11px;">Approval is required to allow entry into the group</p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="approval" id="rdoOnApproval" value="1" />
                        </div>
                    </div>
                    <div @click="handleSelect('rdoOffApproval', 'saveApproval')"
                        class=" d-flex mb-2  align-items-center bg-hover" style="height: 50px;">
                        <div class="d-flex justify-content-between align-items-center px-1" style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                <h5><b style="font-weight:500;">Turn off</b></h5>
                                <p style="font-size: 11px;">No approval required to join the group</p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="approval" id="rdoOffApproval" value="0" />
                        </div>
                    </div>
                    <div class="text-end">
                        <div @click="handleClickApproval()" class="btn  text-primary me-2 btn_cancel f-500">Cancel</div>
                        <button @click="updateApproval()" class="btn btn-light f-500 saveApproval" disabled>Save</button>
                    </div>
                </div>
                <hr class="m-0">
                <div class="flex-between my-1">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Who can approve requests to join the group</span>
                        <span style="font-size: 0.9em;">Lê Công Tôm and admin</span>
                    </div>
                    <i style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen" data-bs-toggle="modal"
                        data-bs-target="#modalManageMember"></i>
                </div>
                <!-- <ModalManageMemberComponent /> -->
            </main>
            <main class=" mt-2 px-2 radius-7 box-shadow py-2" style="width: 35%;">
                <h5><b>Manage discussion content</b></h5>
                <div class="flex-between mt-2">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Who can approve posts</span>
                        <span style="font-size: 0.9em;">Lê Công Tôm and admin</span>
                    </div>
                    <i style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <hr class="m-0">
                <div v-if="viewAnonymous" class="flex-between my-1">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Anonymous posting</span>
                        <span style="font-size: 0.9em;">{{ infoGroup.anonymity ? 'Turn on' : 'Turn off' }}</span>
                    </div>
                    <i @click="handleClickAnonymous()" style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <div v-else class="my-1 mt-2">
                    <div class="f-500 text-dark">Is anonymity approval required?</div>
                    <div @click="handleSelect('rdoOnAnonymous', 'saveAnonymity')"
                        class=" d-flex align-items-center bg-hover" style="height: 50px;">
                        <div class="d-flex justify-content-between align-items-center px-1" style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                <h5><b style="font-weight:500;">Turn on</b></h5>
                                <p style="font-size: 11px;">
                                    Enable hidden posting mode
                                </p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="anonymous" id="rdoOnAnonymous" value="1" />
                        </div>
                    </div>
                    <div @click="handleSelect('rdoOffAnonymous', 'saveAnonymity')"
                        class=" d-flex align-items-center bg-hover mb-2" style="height: 50px;">
                        <div class="d-flex justify-content-between align-items-center " style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a px-1" style="user-select:none;">
                                <h5><b style="font-weight:500;">Turn off</b></h5>
                                <p style="font-size: 11px;">
                                    Turn off hidden posting mode
                                </p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="anonymous" id="rdoOffAnonymous" value="0" />
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="btn  text-primary me-2 btn_cancel f-500" @click="handleClickAnonymous()">Cancel</div>
                        <button class="btn btn-light f-500 saveAnonymity" @click="updateAnonymous()" disabled>Save</button>
                    </div>
                </div>
                <hr class="m-0">

                <div v-if="viewPostApproval" class="flex-between my-1">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Need approval to post no</span>
                        <span style="font-size: 0.9em;">{{ infoGroup.post_approval == 1 ? 'Turn on' : "Turn off" }}</span>
                    </div>
                    <i @click="handleClickPostApproval" style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <div v-else class="my-1 mt-2">
                    <div class="f-500 text-dark">Is article approval required</div>
                    <div @click="handleSelect('rdoOnPostApproval', 'savePostApproval')"
                        class=" d-flex align-items-center bg-hover" style="height: 50px;">
                        <div class="d-flex justify-content-between align-items-center px-1" style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a" style="user-select:none; line-height: 1rem;">
                                <h5><b style="font-weight:500;">Turn on</b></h5>
                                <p style="font-size: 13px;">Needs approval to post</p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="postApproval" id="rdoOnPostApproval"
                                value="1" />
                        </div>
                    </div>
                    <div @click="handleSelect('rdoOffPostApproval', 'savePostApproval')"
                        class=" d-flex mb-2  align-items-center bg-hover" style="height: 50px;">
                        <div class="d-flex justify-content-between align-items-center " style="flex: 1;">
                            <div class="d-flex flex-column pt-3 a px-1" style="user-select:none;">
                                <h5><b style="font-weight:500;">Turn off</b></h5>
                                <p style="font-size: 13px;">You do not need to be approved to post</p>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="postApproval" id="rdoOffPostApproval"
                                value="0" />
                        </div>
                    </div>
                    <div class="text-end">
                        <div @click="handleClickPostApproval()" class="btn  text-primary me-2 btn_cancel f-500">Cancel</div>
                        <button @click="updatePostApproval()" class="btn btn-light f-500 savePostApproval"
                            disabled>Save</button>
                    </div>
                </div>
                <hr class="m-0">
                <div class="flex-between my-1">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Approve content editing</span>
                        <span style="font-size: 0.9em;">Turn off</span>
                    </div>
                    <i style="cursor: pointer; font-size: 1.5rem;" class="fas fa-pen"></i>
                </div>
                <hr class="m-0">

                <div class="flex-between my-1">
                    <div class="d-flex" style="flex-direction: column; line-height: 1.5rem;">
                        <span class="f-500 text-dark">Who can post</span>
                        <span style="font-size: 0.9em;">Everyone</span>
                    </div>
                    <i style="cursor: pointer; font-size: 1.5rem; pointer-events: visible; ob" class="fas fa-pen"></i>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
import axios from '../../../../core/coreRequest'
import baseFunction from '../../../../core/coreFunction'
import Swal from 'sweetalert2';
// import ModalManageMemberComponent from './modalMangeMember/modalManageMemberComponent.vue';
export default {
    // components: {
    //     ModalManageMemberComponent
    // },
    data() {
        return {
            viewPrivacy: true,
            viewDisplay: true,
            viewApproval: true,
            viewPostApproval: true,
            viewRenameGroup: true,
            viewAnonymous: true,
            infoGroup: {},
            group_name: '',
        };
    },
    created() {
        this.getInfo();
        setTimeout(() => {
            console.log(this.infoGroup.display);
        }, 2000);
    },
    methods: {
        updateAnonymous() {
            var payload = {
                id_group: this.$route.params.id_group,
                anonymity: this.infoGroup.anonymity == 1 ? 0 : 1
            }
            axios
                .post('groups/update-anonymity', payload)
                .then((res) => {
                    if (res.data.status == 1) {
                        baseFunction.displaySuccess(res);
                        this.infoGroup.anonymity = payload.anonymity;
                        this.$emit('sendAnonymous', this.infoGroup.anonymity);
                    }
                    this.handleClickAnonymous()
                })
        },
        handleClickAnonymous() {
            this.viewAnonymous = !this.viewAnonymous;
            this.hiddenEdit(!this.viewAnonymous);
            setTimeout(() => {
                if (this.infoGroup.anonymity == 1) {
                    $('#rdoOnAnonymous').prop('checked', true);
                }
                else {
                    $('#rdoOffAnonymous').prop('checked', true);
                }
            }, 100);
        },
        updateRenameGroup() {
            var check = true;
            if (this.group_name == '') {
                check = false;
            }
            if (check) {
                var payload = {
                    group_name: this.group_name,
                    id_group: this.$route.params.id_group,
                };
                axios
                    .post('groups/rename-group', payload)
                    .then((res) => {
                        if (res.data.status == 1) {
                            baseFunction.displaySuccess(res);
                            this.infoGroup.group_name = this.group_name;
                            this.$emit('sendRenameGroup', this.group_name);
                        }
                        this.handleClickRenameGroup();
                    });
            }
            else {
                this.group_name = this.infoGroup.group_name;
                $('.saveRenameGroup').prop('disabled', true);
                $('.saveRenameGroup').addClass('btn-light');
                $('.saveRenameGroup').removeClass('btn-primary');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Group name cannot be empty',
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    Swal.close();
                }, 1500);
            }
        },
        handleInputRenameGroup() {
            if (this.group_name.trim() == this.infoGroup.group_name) {
                $('.saveRenameGroup').prop('disabled', true);
                $('.saveRenameGroup').addClass('btn-light');
                $('.saveRenameGroup').removeClass('btn-primary');
            }
            else {
                $('.saveRenameGroup').prop('disabled', false);
                $('.saveRenameGroup').removeClass('btn-light');
                $('.saveRenameGroup').addClass('btn-primary');
            }
        },
        handleClickRenameGroup() {
            this.group_name = this.infoGroup.group_name;
            this.viewRenameGroup = !this.viewRenameGroup;
            this.hiddenEdit(!this.viewRenameGroup);
        },
        handleClickPrivacy() {
            this.viewPrivacy = !this.viewPrivacy;
            this.hiddenEdit(!this.viewPrivacy);
            setTimeout(() => {
                if (this.infoGroup.privacy == 1) {
                    $('#rdoPublic').prop('checked', true);
                }
                else {
                    $('#rdoPrivate').prop('checked', true);
                }
            }, 100);
        },
        handleClickApproval() {
            this.viewApproval = !this.viewApproval;
            this.hiddenEdit(!this.viewApproval);
            setTimeout(() => {
                if (this.infoGroup.join_approval == 1) {
                    $('#rdoOnApproval').prop('checked', true);
                }
                else {
                    $('#rdoOffApproval').prop('checked', true);
                }
            }, 100);
        },
        handleClickPostApproval() {
            this.viewPostApproval = !this.viewPostApproval;
            this.hiddenEdit(!this.viewPostApproval);
            setTimeout(() => {
                if (this.infoGroup.post_approval == 1) {
                    $('#rdoOnPostApproval').prop('checked', true);
                }
                else {
                    $('#rdoOffPostApproval').prop('checked', true);
                }
            }, 100);
        },
        handleClickDisplay() {
            this.viewDisplay = !this.viewDisplay;
            this.hiddenEdit(!this.viewDisplay);
            setTimeout(() => {
                if (this.infoGroup.display == 2) {
                    $('#rdoVisible').prop('checked', true);
                }
                else {
                    $('#rdoHidden').prop('checked', true);
                }
            }, 100);
        },
        hiddenEdit(a) {
            if (a) {
                $('.fa-pen').css({
                    'pointer-events': 'none',
                    'cursor': 'not-allowed',
                    'opacity': '0.3'
                });
            }
            else {
                $('.fa-pen').css({
                    'pointer-events': 'visible',
                    'cursor': 'pointer',
                    'opacity': '1'
                });
            }
        },
        handleSelect(a, b) {
            $('#' + a).prop('checked', true);
            var value = document.getElementById(a).value;
            if (b == 'savePrivacy') {
                var match = value == this.infoGroup.privacy;
            }
            else if (b == 'saveDisplay') {
                var match = value == this.infoGroup.display;
            }
            else if (b == 'saveApproval') {
                var match = value == this.infoGroup.join_approval;
            }
            else if (b == 'savePostApproval') {
                var match = value == this.infoGroup.post_approval;
            }
            else if (b == 'saveAnonymity') {
                var match = value == this.infoGroup.anonymity;
            }
            $('.' + b)
                .prop('disabled', match)
                .toggleClass('btn-primary', !match)
                .toggleClass('btn-light', match);
        },
        getInfo() {
            axios
                .post('groups/current-group', { id_group: this.$route.params.id_group })
                .then((res) => {
                    this.infoGroup = res.data.data;
                    this.group_name = this.infoGroup.group_name;
                });
        },
        updatePrivacy() {
            var payload = {
                id_group: this.$route.params.id_group,
            };
            axios
                .post('groups/update-privacy', payload)
                .then((res) => {
                    baseFunction.displaySuccess(res);
                    this.infoGroup.privacy = this.infoGroup.privacy == 1 ? -1 : 1;
                    this.$emit('sentPrivacy', this.infoGroup.privacy);
                    this.handleClickPrivacy();
                });
        },
        updateDisplay() {
            var payload = {
                id_group: this.$route.params.id_group,
            };
            axios
                .post('groups/update-display', payload)
                .then((res) => {
                    baseFunction.displaySuccess(res);
                    this.infoGroup.display = this.infoGroup.display == 2 ? -2 : 2;
                    this.handleClickDisplay();
                });
        },
        updateApproval() {
            var payload = {
                id_group: this.$route.params.id_group,
                join_approval: !this.infoGroup.join_approval
            };
            axios
                .post('groups/update-join-approval', payload)
                .then((res) => {
                    baseFunction.displaySuccess(res);
                    this.infoGroup.join_approval = !this.infoGroup.join_approval;
                    this.handleClickApproval();
                });
        },
        updatePostApproval() {
            var payload = {
                id_group: this.$route.params.id_group,
                post_approval: !this.infoGroup.post_approval
            };
            axios
                .post('groups/update-post-approval', payload)
                .then((res) => {
                    baseFunction.displaySuccess(res);
                    this.infoGroup.post_approval = !this.infoGroup.post_approval;
                    this.handleClickPostApproval();
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'error');
                    });
                });
        }
    },
}
</script>
<style>
@import './setting.css'
</style>