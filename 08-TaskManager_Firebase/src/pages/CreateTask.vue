<template>
    <div class="main-content">
        <page-title />
        <div class="create-board">
            <div class="row">
                <div class="col-xs-12 input-group">
                    <label>Tiêu đề</label>
                    <input v-model="title" type="text" class="form-control" />
                </div>
                <div class="col-xs-12 input-group">
                    <label>Mô tả tác vụ</label>
                    <textarea v-model="description" type="text" class="form-control"></textarea>
                </div>
                <div class="col-xs-12 input-group">
                    <label>Tên Project</label>
                    <input v-model="name" type="text" class="form-control" />
                </div>
                <div class="col-xs-6 input-group">
                    <label>Start</label>
                    <datetime type="datetime" v-model="start_at"></datetime>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Deadline</label>
                    <datetime type="datetime" v-model="end_at"></datetime>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Trang thái</label>
                    <select class="input-group input-select" v-model="status">
                        <option
                            v-for="el in STATUS_CONFIG"
                            :key="el.value + el.text"
                            :value="el.value"
                        >{{ el.text }}</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Độ ưu tiên</label>
                    <select class="input-group input-select" v-model="priority">
                        <option
                            v-for="el in PRIORITY_CONFIG "
                            :key="el.value + el.text"
                            :value="el.value"
                        >{{ el.text }}</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Giai đoạn</label>
                    <select class="input-group input-select" v-model="team">
                        <option
                            v-for="el in TEAM_CONFIG "
                            :key="el.value + el.text"
                            :value="el.value"
                        >{{ el.text }}</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Thành viên đảm nhận</label>
                    <select class="input-group input-select" v-model="email_member">
                        <option
                            v-for="email in getListEmailUser "
                            :key="email"
                            :value="email"
                        >{{ email.split('@')[0] }}</option>
                    </select>
                </div>
                <div class="col-xs-12 btn-submit-create">
                    <button
                        @click.prevent="handleCreateTask"
                        class="btn btn-success"
                        type="submit"
                    >Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { STATUS_CONFIG, PRIORITY_CONFIG, TEAM_CONFIG } from "../config/const";
import PageTitle from "../components/PageTitle";
export default {
    name: "create-task",
    data() {
        return {
            title: "",
            description: "",
            name: "",
            start_at: null,
            end_at: null,
            status: 1,
            priority: 1,
            team: 1,
            email_member: "",

            STATUS_CONFIG,
            PRIORITY_CONFIG,
            TEAM_CONFIG
        };
    },
    computed: {
        ...mapGetters(["getListEmailUser"])
    },
    methods: {
        ...mapActions(["createTask"]),
        handleCreateTask() {
            let data = {
                auth: "tuanda@gmail.com",
                title: this.title,
                description: this.description,
                name: this.name,
                start_at: this.start_at,
                end_at: this.end_at,
                status: this.status,
                priority: this.priority,
                team: this.team,
                email_member: this.email_member
            };

            this.createTask(data).then(res => {
                if (res.ok) {
                    alert("SUCCESS");
                    this.resetData();
                }
            });
        },
        resetData() {
            this.title = "";
            this.description = "";
            this.name = "";
            this.start_at = null;
            this.end_at = null;
            this.status = 1;
            this.priority = 1;
            this.team = 1;
            this.email_member = "";
        }
    },
    components: {
        PageTitle
    }
};
</script>

<style>
.vdatetime .vdatetime-input {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
</style>