<template>
    <div style="" class="d-flex flex-column overflow-y-auto">
        <div style="" class="mb-1">
            <div
                class="shadow-sm fs-4 fw-bold"
                style="background-color: white; padding: 1rem 2rem 0">
                Account management
            </div>
            <div
                class="d-flex gap-3 align-items-center"
                style="background-color: white; padding: 1rem 2rem">
                <div
                    class="d-flex flex-dir-row gap-2 shadow-sm rounded-2 align-items-center"
                    style="padding: 0.5rem 1rem">
                    <div>
                        <div
                            class="d-flex align-items-center justify-content-center"
                            style="
                                background-color: rgba(212, 208, 208, 0.5);
                                border-radius: 50%;
                                height: 50px;
                                width: 50px;
                            ">
                            <i class="fa-regular fa-user fs-4"></i>
                        </div>
                    </div>
                    <div class="admin--account-numbers">
                        <button class="admin--button-overlay" @click="typeFilter('all')" />
                        <div>Total users</div>
                        <div class="fw-bold fs-4">{{ totalAccounts }}</div>
                    </div>
                    <div class="admin--account-numbers">
                        <button class="admin--button-overlay" @click="typeFilter('active')" />
                        <div>Active users</div>
                        <div class="fw-bold fs-4" :style="colorType.Active">
                            {{ activeAccounts }}
                        </div>
                    </div>
                    <div class="admin--account-numbers">
                        <button class="admin--button-overlay" @click="typeFilter('banned')" />
                        <div>Banned users</div>
                        <div class="fw-bold fs-4" :style="colorType.Banned">
                            {{ bannedAccounts }}
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        v-model="searchTerm"
                        @change="searchFilter" />
                </div>
            </div>
        </div>
        <div class="d-flex flex-column" style="height: 70vh; overflow-y: auto">
            <div
                class="d-grid"
                style="
                    grid-template-columns: 290px 110px 110px 200px 150px 170px;
                    padding: 1rem 1rem 0 1rem;
                    border-bottom: 0.2px solid rgba(212, 208, 208, 1);
                ">
                <p>Account</p>
                <p>User name</p>
                <p>Password</p>
                <p>Email</p>
                <p>Phone number</p>
                <p class="d-flex justify-content-center">Action</p>
            </div>
            <div
                v-for="(account, index) in accountsFilter"
                :key="index"
                class="bg-white overflow-y-auto"
                style="border-bottom: 0.2px solid rgba(212, 208, 208, 0.4)">
                <div
                    class="d-grid"
                    :style="{
                        padding: '1rem 1rem',
                        gridTemplateColumns: '290px 110px 110px 200px 130px auto',
                        backgroundColor: '#f8f9fa',
                    }">
                    <div class="d-flex align-items-center gap-2">
                        <img
                            :src="urlImg + account.avatar"
                            alt="avatar"
                            :style="{
                                width: '35px',
                                height: '35px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                            }" />
                        <div>
                            <div class="d-flex align-items-center gap-2">
                                <div
                                    class="fs-5"
                                    style="
                                        color: black;
                                        max-width: 120px;
                                        text-wrap: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    ">
                                    {{ account.fullname }}
                                </div>
                                <div class="fs-6 d-flex">
                                    {{ "(" }}
                                    <div
                                        style="
                                            max-width: 70px;
                                            text-wrap: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                        ">
                                        {{ account.nickname }}
                                    </div>
                                    {{ ")" }}
                                </div>
                            </div>
                            <div
                                :style="getStatusType(account.status, account.is_active)"
                                style="font-weight: 600">
                                {{
                                    account.status === 0
                                        ? "Banned"
                                        : account.is_active === 1
                                        ? "Active"
                                        : "Inactive"
                                }}
                            </div>
                        </div>
                    </div>
                    <div
                        style="
                            max-width: 100px;
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        ">
                        {{ account.username }}
                    </div>
                    <div
                        style="
                            max-width: 100px;
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        ">
                        {{ account.password }}
                    </div>
                    <div
                        style="
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            max-width: 190px;
                        ">
                        {{ account.email }}
                    </div>
                    <div
                        style="
                            width: 120px;
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        ">
                        {{ account.phone_number }}
                    </div>
                    <div class="d-flex align-items-lg-start">
                        <button class="admin--visit-button" @click="visitAccount(account.id)">
                            Visit account
                        </button>
                        <div v-if="account.status">
                            <button class="admin--ban-button" @click="banAccount(account.id)">
                                Ban
                            </button>
                        </div>
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
            urlImg: url,
            searchTerm: "",
            statusType: 3,
            accounts: [
                {
                    id: 1,
                    username: "linhdeptrai",
                    password: "123123",
                    email: "linh@gmail.com",
                    phone_number: "1231231231",
                    fullname: "Linh Hoàng",
                    nickname: "Linh",
                    avatar: "post/1704797387_1S7A1656.JPG",
                    status: 1,
                    is_active: 1,
                },
                {
                    id: 2,
                    username: "user2",
                    password: "password2",
                    email: "user2@gmail.com",
                    phone_number: "1234567890",
                    fullname: "User Two",
                    avatar: "post/avatar2.JPG",
                    status: 1,
                    is_active: 0,
                },
                {
                    id: 3,
                    username: "user3",
                    password: "password3",
                    email: "user3@gmail.com",
                    phone_number: "0987654321",
                    fullname: "User Three",
                    avatar: "post/avatar3.JPG",
                    status: 0,
                    is_active: 0,
                },
                {
                    id: 4,
                    username: "user4",
                    password: "password4",
                    email: "user4@gmail.com",
                    phone_number: "1029384756",
                    fullname: "User Four",
                    avatar: "post/avatar4.JPG",
                    status: 1,
                    is_active: 0,
                },
                {
                    id: 5,
                    username: "user5",
                    password: "password5",
                    email: "user5@gmail.com",
                    phone_number: "5678901234",
                    fullname: "User Five",
                    avatar: "post/avatar5.JPG",
                    status: 1,
                    is_active: 1,
                },
                {
                    id: 6,
                    username: "user6",
                    password: "password6",
                    email: "user6@gmail.com",
                    phone_number: "5432109876",
                    fullname: "User Six",
                    avatar: "post/avatar6.JPG",
                    status: 0,
                    is_active: 0,
                },
            ],
            accountsFilter: [],
            totalAccounts: 0,
            activeAccounts: 0,
            bannedAccounts: 0,
            colorType: {
                Banned: "color: #f9405f",
                Active: "color: #a4f3b4",
                Inactive: "color: #ac8a38",
            },
        };
    },
    created() {
        this.accountsFilter = this.accounts;
        this.totalAccounts = this.accounts.length;
        this.activeAccounts = this.accounts.filter((account) => account.is_active === 1).length;
        this.bannedAccounts = this.accounts.filter((account) => account.status === 0).length;
    },
    name: "AccountManagement",
    methods: {
        getStatusType(statusType, activeType) {
            return statusType === 0
                ? this.colorType.Banned
                : activeType === 1
                ? this.colorType.Active
                : this.colorType.Inactive;
        },
        visitAccount(id) {
            this.$router.push({ name: "Account", params: { id: id } });
        },
        banAccount(id) {
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#f9405f",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, ban this account!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    this.accounts = this.accounts.map((account) => {
                        if (account.id == id) {
                            account.status = 0;
                            account.is_active = 0;
                        }
                        return account;
                    });
                    this.accountFilters = this.accountFilters.map((account) => {
                        if (account.id == id) {
                            account.status = 0;
                            account.is_active = 0;
                        }
                        return account;
                    });
                    //nhét link api vô đây
                    axios.post("/admin/delete-post", id).then((res) => {
                        console.log(res);
                    });
                }
            });
        },
        typeFilter(type) {
            if (type === "active") {
                this.accountsFilter = this.accounts.filter((account) => account.is_active === 1);
            } else if (type === "banned") {
                this.accountsFilter = this.accounts.filter((account) => account.status === 0);
            } else {
                this.accountsFilter = this.accounts;
            }
        },
        searchFilter() {
            this.accountsFilter = this.accounts.filter((account) => {
                return (
                    account.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    account.fullname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    account.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    account.phone_number.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            });
        },
    },
};
</script>
<style>
:root {
    --ban-color: #f9405f;
    --active-color: #a4f3b4;
    --hover-color: #242424;
}
</style>
<style scoped>
.admin--account-numbers {
    position: relative;
    padding: 0.5rem 1rem;
}
.admin--button-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background-color: rgba(212, 208, 208, 0);
    z-index: 1;
}
.admin--button-overlay:hover {
    border: none;
    border-radius: 5px;
    background-color: rgba(212, 208, 208, 0.2);
}
.admin--ban-button {
    padding: 0.3rem 1rem;
    margin-right: 1rem;
    border: none;
    background-color: #f8f9fa;
    color: var(--ban-color);
    font-weight: bold;
}
.admin--ban-button:hover {
    background-color: var(--ban-color);
    color: var(--hover-color);
}
.admin--visit-button {
    padding: 0.3rem 1rem;
    border: none;
    background-color: #f8f9fa;
    color: black;
    font-weight: bold;
}
.admin--visit-button:hover {
    background-color: #88e1f4;
    color: var(--hover-color);
}
</style>
