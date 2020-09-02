<template>
    <div>
        <h2>日時</h2>
        <form class="date-time" @submit.prevent="handleDate">
            <datetime type="datetime" v-model="datetime" use12-hour class="theme-orange"></datetime>
            <p>Value: {{ formatDate(datetime) }}</p>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import { mapActions } from "vuex";
export default {
    name: "date",
    data() {
        return {
            datetime: ""
        };
    },
    methods: {
        ...mapActions(["dateTimeAction"]),
        handleDate() {
            if (this.datetime) {
                let date = this.formatDate(this.datetime);
                localStorage.setItem("date", date);
                // this.dateTimeAction(date);
                this.$router.push("/information");
            } else {
                alert("please choose date time");
            }
        },
        formatDate(data) {
            return new Date(data).toLocaleString();
        }
    },
    components: {
        datetime: Datetime
    }
};
</script>

<style>
.theme-orange .vdatetime-popup__header,
.theme-orange .vdatetime-calendar__month__day--selected > span > span,
.theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
    background: #ff9800;
}

.theme-orange .vdatetime-year-picker__item--selected,
.theme-orange .vdatetime-time-picker__item--selected,
.theme-orange .vdatetime-popup__actions__button {
    color: #ff9800;
}
</style>