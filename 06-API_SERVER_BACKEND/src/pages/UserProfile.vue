<template>
    <div class="ass1-login">
        <div class="ass1-login__content">
            <p>Profile</p>

            <div class="ass1-login__form">
                <div class="avatar">
                    <img :src="getAvatar" alt />
                </div>
                <form action="#" v-if="currentUser" @submit.prevent="handleEditProfile">
                    <input
                        :value="currentUser.fullname"
                        @input="fullname = $event.target.value"
                        type="text"
                        class="form-control"
                        placeholder="Your name ..."
                        required
                    />

                    <select
                        :value="currentUser.gender"
                        @change="gender = $event.target.value"
                        class="form-control"
                    >
                        <option value disabled>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <input
                        @change="uploadAvatar"
                        type="file"
                        name="avatar"
                        placeholder="Avatar profile"
                        class="form-control"
                    />

                    <textarea
                        :value="currentUser.description"
                        @input="description = $event.target.value"
                        class="form-control"
                        cols="30"
                        rows="5"
                        placeholder="Describle ..."
                    ></textarea>

                    <div class="ass1-login__send justify-content-center">
                        <button type="submit" class="ass1-btn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "user-profile",
    data() {
        return {
            fullname: "",
            description: "",
            gender: "",
            avatar: {
                objFile: null,
                base64URL: ""
            },
            userid: this.$route.params.id
        };
    },
    watch: {
        $route(to, from) {
            this.userid = to.params.id;
            this.checkIsCurrentUser();
        }
    },
    created() {
        this.checkIsCurrentUser();
    },
    computed: {
        ...mapGetters(["currentUser"]),
        getAvatar() {
            if (this.avatar.base64URL === "" && this.currentUser) {
                return this.currentUser.profilepicture;
            } else {
                return this.avatar.base64URL;
            }
        }
    },
    methods: {
        ...mapActions(["updateProfile"]),
        checkIsCurrentUser() {
            if (this.userid && this.currentUser) {
                if (this.userid != this.currentUser.USERID) {
                    this.$router.push("/");
                }
            }
        },
        handleEditProfile() {
            console.log("component HANDLEEDITPROFILE ");
            if (!this.gender) this.gender = this.currentUser.gender;
            if (!this.fullname) this.fullname = this.currentUser.fullname;
            if (!this.description)
                this.description = this.currentUser.description;

            if (this.fullname && this.description && this.gender) {
                let data = {
                    fullname: this.fullname,
                    description: this.description,
                    gender: this.gender
                };

                if (this.avatar.objFile) {
                    data.objFile = this.avatar.objFile;
                }

                this.updateProfile(data).then(res => {
                    if (res.ok) {
                        alert("Updated successfull!");
                    } else {
                        alert(res.error);
                    }
                });
            }
        },
        uploadAvatar(e) {
            if (e.target.files && e.target.files.length) {
                const fileAvatar = e.target.files[0];
                console.log(fileAvatar);

                let reader = new FileReader();

                reader.addEventListener(
                    "load",
                    () => {
                        let previewSrc = reader.result;
                        this.avatar.base64URL = previewSrc;
                        this.avatar.objFile = fileAvatar; // send to server
                    },
                    false
                );

                if (fileAvatar) {
                    reader.readAsDataURL(fileAvatar);
                }
            }
        }
    }
};
</script>

<style scoped>
.avatar {
    border-radius: 50%;
    overflow: hidden;
}
</style>