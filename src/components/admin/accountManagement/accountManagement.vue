<template>
    <div style="" class="d-flex flex-column overflow-y-auto">
        <div style="" class="mb-1">
            <div class="shadow-sm fs-4 fw-bold" style="background-color: white; padding: 1rem 2rem 0">
                Account management
            </div>
            <div class="d-flex gap-3 align-items-center" style="background-color: white; padding: 1rem 2rem">
                <div class="d-flex flex-dir-row gap-2 shadow-sm rounded-2 align-items-center"
                    style="padding: 0.5rem 1rem">
                    <div style="padding: 0 10px">
                        <div class="d-flex align-items-center justify-content-center" style="
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
                    <input type="text" class="form-control" placeholder="Search" v-model="searchTerm"
                        @input="searchFilter" />
                </div>
            </div>
        </div>
        <div class="d-flex flex-column pb-4" style="height: 70vh; overflow-y: auto">
            <div class="d-grid" style="
                    grid-template-columns: 300px 150px 150px 200px 150px 180px;
                    padding: 1rem 1rem 0 1rem;
                    border-bottom: 0.2px solid rgba(212, 208, 208, 1);
                ">
                <p>Account</p>
                <p>User name</p>
                <p>Password</p>
                <p>Email</p>
                <p>Phone number</p>
                <p style="padding-left: 1rem">Action</p>
            </div>
            <div v-for="(account, index) in accountsFilter" :key="index" class=" overflow-y-auto position-relative "
                style="border-bottom: 0.2px solid rgba(212, 208, 208, 0.4)">
                <!-- <button class="admin--button-overlay" @click="visitAccount(account.username)" /> -->
                <router-link :to="{ name: 'detailProfile', params: { username: account.username } }"
                    class="d-grid bg-hover text-dark" :style="{
                            padding: '1rem 1rem',
                            gridTemplateColumns: '300px 150px 150px 200px 150px 170px',
                        }">
                    <div class="d-flex align-items-center gap-2">
                        <img :src="urlImg + account.avatar" alt="avatar" :style="{
                            width: '35px',
                            height: '35px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                        }" />
                        <div>
                            <div class="d-flex align-items-center gap-2">
                                <div class="fs-5" style="
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
                                    <div style="
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
                            <div :style="getStatusType(account.status, account.is_active)" style="font-weight: 600">
                                {{
                            account.status === 0
                                ? "Banned"
                                : account.is_active === true
                                    ? "Active"
                                    : "Inactive"
                        }}
                            </div>
                        </div>
                    </div>
                    <div style="
                            max-width: 100px;
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        ">
                        {{ account.username }}
                    </div>
                    <div style="
                            max-width: 140px;
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        ">
                        {{ account.password }}
                    </div>
                    <div style="
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            max-width: 190px;
                        ">
                        {{ account.email }}
                    </div>
                    <div style="
                            max-width: 120px;
                            text-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        ">
                        {{ account.phone_number }}
                    </div>
                    <div v-if="account.status">
                        <button class="admin--ban-button " @click.prevent @click="banAccount(account.id)">
                            Ban
                        </button>
                    </div>
                    <div v-else>
                        <button class="admin--unban-button " @click.prevent @click="unbanAccount(account.id)">
                            Unban
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios, { url } from "../../../core/coreRequest";
import Swal from "sweetalert2";
import { state, socket } from "../../../socket";
export default {
    data() {
        return {
            urlImg: url,
            searchTerm: "",
            statusType: 3,
            accounts: [],
            accountsFilter: [],
            totalAccounts: 0,
            bannedAccounts: 0,
            colorType: {
                Banned: "color: #f9405f",
                Active: "color: #a4f3b4",
                Inactive: "color: #ac8a38",
            },
        };
    },
    name: "AccountManagement",
    methods: {
        getStatusType(statusType, activeType) {
            return statusType === 0
                ? this.colorType.Banned
                : activeType === true
                    ? this.colorType.Active
                    : this.colorType.Inactive;
        },
        visitAccount(username) {
            this.$router.push({ name: "detailProfile", params: { username: username } });
        },
        unbanAccount(id) {
            axios.post("admin/account/unbanAccount", { id: id })
                .then((res) => {
                    if (res.data.status == 1) {
                        Swal.fire({ title: "Unban success!", showConfirmButton: false, timer: 750 });

                        this.accounts = this.accounts.map((acc) => {
                            if (acc.id == id) {
                                acc.status = 1
                            }
                            return acc
                        })
                        this.accountFilters = this.accountFilters.map((account) => {
                            if (account.id == id) {
                                account.status = 1;
                            }
                            return account;
                        });
                    }
                });
        },
        banAccount(id) {
            Swal.fire({
                title: "Do you want to ban this account, you can't undo this?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#f9405f",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({ title: "Ban success!", showConfirmButton: false, timer: 750 });
                    //nhét link api vô đây
                    axios.post("admin/account/banAccount", { id: id }).then((res) => {
                        console.log(res);
                    });
                    this.accounts = this.accounts.map((account) => {
                        if (account.id == id) {
                            account.status = 0;
                        }
                        return account;
                    });
                    this.accountFilters = this.accountFilters.map((account) => {
                        if (account.id == id) {
                            account.status = 0;
                        }
                        return account;
                    });
                }
            });
        },
        typeFilter(type) {
            if (type === "active") {
                this.accountsFilter = this.accounts.filter((account) => account.is_active === true);
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
        async getAllAccount() {
            try {
                const res = await axios.get("admin/account/getAllAccounts");
                this.accounts = res.data.map((account) => {
                    return {
                        ...account,
                        is_active: state.onlineUsers.some((userArray) => {
                            return userArray.some((user) => {
                                return user.id === account.id;
                            });
                        }),
                    };
                });
                this.accountsFilter = this.accounts;
                this.totalAccounts = this.accounts.length;
            } catch (error) {
                console.error(error);
            }
        },
        updateIsActiveAccount(id) {
            this.accounts.forEach((account) => {
                if (account.id === id) {
                    account.is_active = true;
                } else {
                    account.is_active = false;
                }
            });
        },
    },
    computed: {
        totalAccounts() {
            return this.accounts.length;
        },
        activeAccounts() {
            return state.activeAccounts;
        },
        bannedAccounts() {
            return this.accounts.filter((account) => account.status === 0).length;
        },
    },
    created() {
        this.getAllAccount();
        socket.on("onlineUser", (onlineUsers) => {
            onlineUsers.forEach((user) => {
                this.updateIsActiveAccount(user.id);
            });
        });
    },
};
</script>

<style>
:root {
    --ban-color: #f9405f;
    --active-color: #a4f3b4;
    --hover-color: #242424;
    --bg-hover-color: #24242412;
}
</style>

<style scoped>
.admin--account-numbers {
    position: relative;
    padding: 0.5rem 1rem;
}

.bg-hover:hover {
    background-color: var(--bg-hover-color);
}

.admin--button-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    border: none;
    background-color: rgba(212, 208, 208, 0);
    z-index: 1;
}

.admin--button-overlay:hover {
    border: none;
    width: 100%;
    border-radius: 5px;
    background-color: rgba(212, 208, 208, 0.2);
}

.admin--ban-button {
    padding: 0.3rem 1rem;
    margin-right: 1rem;
    border: none;
    background-color: transparent;
    color: var(--ban-color);
    font-weight: bold;
    border-radius: 5px;
}

.admin--unban-button {
    padding: 0.3rem 1rem;
    margin-right: 1rem;
    border: none;
    background-color: transparent;
    color: var(--active-color);
    font-weight: bold;
    border-radius: 5px;
}

.admin--ban-button:hover {
    background-color: var(--ban-color);
    color: white;
}

.admin--unban-button:hover {
    background-color: var(--active-color);
    color: white;
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
