<template>
    <div id="app">
        <b-container>
            <comp-title />

            <b-row>
                <comp-control
                    v-bind:orderBy="orderBy"
                    v-bind:orderDir="orderDir"
                    v-bind:strSearch="strSearch"
                    v-on:handleSearch="handleSearch"
                    v-on:handleSort="handleSort"
                />

                <comp-form
                    v-on:handleEditTaskById="handleEditTaskById"
                    v-on:handleAddNewTask="handleAddNewTask"
                    v-bind:isShowForm="isShowForm"
                    v-on:toggleForm="toggleForm"
                    v-bind:taskSelected="taskSelected"
                />
            </b-row>

            <todo-list-table
                v-on:handleEdit="handleEdit"
                v-on:handleDelete="handleDelete"
                v-bind:listTask="listTaskSort"
            />
        </b-container>
    </div>
</template>

<script>
import TodoListTable from "./components/TodoListTable";
import CompTitle from "./components/CompTitle";
import CompControl from "./components/CompControl";
import CompForm from "./components/CompForm";

// import listTask from "./mock/tasks";
export default {
    name: "App",
    components: {
        TodoListTable,
        CompTitle,
        CompControl,
        CompForm
    },
    data() {
        return {
            listTask: null,
            isShowForm: false,
            strSearch: "",
            orderBy: "name",
            orderDir: "asc",
            taskSelected: null
        };
    },
    watch: {
        listTask: function(newData) {
            var taskString = JSON.stringify(newData);
            localStorage.setItem("tasks", taskString);
        }
    },
    computed: {
        listTaskSearch() {
            const { strSearch } = this;
            var newItems = this.listTask.filter(item => {
                return item.name
                    .toLowerCase()
                    .includes(strSearch.toLowerCase());
            });
            return newItems;
        },
        listTaskSort() {
            var listTask = [...this.listTaskSearch];
            listTask.sort(this.compareSort);
            return listTask;
        }
    },
    created() {
        let tasks = localStorage.getItem("tasks");
        if (tasks !== null) {
            this.listTask = JSON.parse(tasks);
        } else {
            this.listTask = [];
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
        },
        handleAddNewTask(task) {
            this.listTask.push(task);
        },
        handleEdit(data) {
            this.isShowForm = true;
            this.taskSelected = data;
        },
        handleDelete(data) {
            // cach 1
            let newItems = this.listTask.filter(item => item.id != data.id);
            this.listTask = newItems;
        },
        toggleForm() {
            if (this.isShowForm) {
                this.taskSelected = null;
            }
            this.isShowForm = !this.isShowForm;
        },
        handleSearch(data) {
            this.strSearch = data;
        },
        handleSort(data) {
            this.orderBy = data.orderBy;
            this.orderDir = data.orderDir;
        },
        compareSort(a, b) {
            var numberSort = this.orderDir === "asc" ? -1 : 1;

            if (a[this.orderBy] < b[this.orderBy]) return numberSort;
            else if (a[this.orderBy] > b[this.orderBy]) return numberSort * -1;
            return 0;
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
