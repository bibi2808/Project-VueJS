<template>
    <div>
        <h2>科目</h2>
        <form class="form-subject" @submit.prevent="handleSubject">
            <div>
                <b-form-select v-model="selected" :options="listOptions" :select-size="6"></b-form-select>
                <div class="mt-5">
                    Selected:
                    <strong>{{ selected }}</strong>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "subject",
    data() {
        return {
            selected: null
        };
    },
    computed: {
        ...mapGetters(["listOptions"])
    },
    methods: {
        ...mapActions(["subjectAction"]),
        handleSubject() {
            if (this.selected) {
                localStorage.setItem('subject',this.selected);
                // this.subjectAction(this.selected);
                this.$router.push("/date");
            } else {
                alert("please choose a option");
            }
        }
    }
};
</script>

<style>
</style>