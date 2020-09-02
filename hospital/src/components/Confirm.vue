<template>
    <div>
        <h2>確誝</h2>
        <div v-if="contact">
            <form class="form-confirm" @submit.prevent="handleConfirm">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Subject</label>
                    <label class="col-sm-10">{{contact.subject}}</label>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">DATE</label>
                    <label class="col-sm-10">{{contact.datetime}}</label>
                </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <label class="col-sm-10">{{contact.name}}</label>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Phone</label>
                    <label class="col-sm-10">{{contact.phone}}</label>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <label class="col-sm-10">{{contact.email}}</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "confirm",
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["contact"])
    },
    methods: {
        ...mapActions(["confirmAction"]),
        handleConfirm() {
            // if (this.contact) {
            //     this.confirmAction(this.contact);
            // }

            if (this.contact.name) {
                console.log("confirm submit", this.contact);
                this.confirmAction(this.contact);
                
                this.$router.push("/thank-you");
            }
            
        }
    }
};
</script>

<style>
</style>