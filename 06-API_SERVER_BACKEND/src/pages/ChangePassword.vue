<template>
    <div class="ass1-login">
        <div class="ass1-login__content">
            <p>Change Password</p>
            <div class="ass1-login__form">
                <form action="#" @submit.prevent="handleChangePassword">
                    <input
                        v-model="oldPassword"
                        type="password"
                        class="form-control"
                        placeholder="Old Password"
                        required
                    />
                    <input
                        v-model="newPassword"
                        type="password"
                        class="form-control"
                        placeholder="New Password"
                        required
                    />
                    <input
                        v-model="reNewPassword"
                        type="password"
                        class="form-control"
                        placeholder="Confirm New Password"
                        required
                    />
                    <div class="ass1-login__send justify-content-center">
                        <button type="submit" class="ass1-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
    NEWPASSWORD_AND_OLDPASSWORD_DOES_NOT_MATCH,
    NEWPASSWORD_DOES_NOT_MATCH,
    ENTER_FULL_INFORMATION,
    CHANG_PASSWORD_SUCCESS
} from "../constants";
export default {
    name: "change-password",
    data() {
        return {
            oldPassword: "",
            newPassword: "",
            reNewPassword: "",
            userid: this.$route.params.id
        };
    },
    watch: {
        $route(to, from) {
            this.userid = to.params.id;
            this.checkIsCurrentUser();
        }
    },
    computed: {
        ...mapGetters(["currentUser"])
    },
    created() {
        this.checkIsCurrentUser();
    },
    methods: {
        ...mapActions(["changePassword"]),
        checkIsCurrentUser() {
            if (this.userid && this.currentUser) {
                if (this.userid != this.currentUser.USERID) {
                    this.$router.push("/");
                }
            }
        },
        handleChangePassword() {
            let { oldPassword, newPassword, reNewPassword } = this;
            if (oldPassword && newPassword && reNewPassword) {
                if (oldPassword == newPassword) {
                    this.$notify(NEWPASSWORD_AND_OLDPASSWORD_DOES_NOT_MATCH);
                } else if (newPassword != reNewPassword) {
                    this.$notify(NEWPASSWORD_DOES_NOT_MATCH);
                } else {
                    let data = {
                        oldPassword,
                        newPassword,
                        reNewPassword
                    };
                    this.changePassword(data).then(res => {
                        if (res.ok) {
                            this.$notify(CHANG_PASSWORD_SUCCESS);
                            this.$router.push("/");
                        } else {
                            this.$notify(NEWPASSWORD_DOES_NOT_MATCH);
                        }
                    });
                }
            } else {
                this.$notify(ENTER_FULL_INFORMATION);
            }
        }
    }
};
</script>

<style>
</style>