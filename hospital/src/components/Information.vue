<template>
    <div>
        <h2>連絡先</h2>
        <form class="form-information" @submit.prevent="handleInfomation">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" placeholder="Name" class="form-control" v-model="name" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-10">
                    <input type="tel" placeholder="Phone" class="form-control" v-model="phone" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" placeholder="Email" class="form-control" v-model="email" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "information",
    data() {
        return {
            name: "",
            phone: "",
            email: ""
        };
    },
    methods: {
        ...mapActions(["informationAction"]),
        handleInfomation() {
            if (this.name && this.phone && this.email) {
                let data = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email
                };
                localStorage.setItem("name", data.name);
                localStorage.setItem("phone", data.phone);
                localStorage.setItem("email", data.email);
                // this.informationAction(data);
                this.$router.push("/confirm");
            } else {
                alert("You must enter information in field");
            }
        }
    }
};
</script>

<style>
</style>