<template>
    <div id="app">
        <b-container>
            <comp-title />
            <b-row>
                <comp-control />

                <comp-form v-on:handleEditTaskById="handleEditTaskById" />
            </b-row>

            <todo-list-table />
        </b-container>
    </div>
</template>

<script>
import TodoListTable from "./components/TodoListTable";
import CompTitle from "./components/CompTitle";
import CompControl from "./components/CompControl";
import CompForm from "./components/CompForm";
import { mapState } from "vuex";

export default {
    name: "App",
    components: {
        TodoListTable,
        CompTitle,
        CompControl,
        CompForm
    },
    data() {
        return {};
    },
    computed: mapState(["listTask"]),
    watch: {
        listTask: function(newTasks) {
            var taskString = JSON.stringify(newTasks);
            localStorage.setItem("tasks", taskString);
        }
    },
    methods: {
        handleEditTaskById(taskEdit) {
            let index = this.listTask.findIndex(
                item => item.id === taskEdit.id
            );
            if (index !== -1) {
                this.listTask.splice(index, 1, taskEdit);
                this.toggleForm();
            }
        }
    }
};
</script>

<style>
body {
    padding: 100px 0;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
    vertical-align: middle;
}

.container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
}

span.badge-medium {
    padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
}

@media (max-width: 992px) {
    .add-task {
        margin-top: 50px;
    }
}
</style>
