<template>
    <b-col cols="12" lg="6">
        <form-add />

        <form v-if="isShowForm" action method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for>label</label>
                <input v-model="taskName" type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
                <label class="sr-only" for>label</label>
                <select v-model="level" name="ds" class="form-control" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>
            <button
                v-if="taskSelected === null"
                v-on:click="handleAddnew"
                type="button"
                class="btn btn-primary"
            >Add New</button>
            <button v-else v-on:click="handleEditTask" type="button" class="btn btn-primary">Updated</button>
            <button v-on:click="handleCancel" type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FormAdd from "./FormAdd";

import { v4 as uuidv4 } from "uuid";

export default {
    name: "comp-form",
    components: {
        FormAdd
    },
    data() {
        return {
            taskName: "",
            level: 0
        };
    },
    computed: mapState(["isShowForm", "taskSelected"]),
    watch: {
        taskSelected: function(newData, oldData) {
            if (newData !== null) {
                this.taskName = newData.name;
                this.level = newData.level;
            }
        }
    },
    methods: {
        ...mapActions(["toggleForm", "handleAddnewTask", "handleEditTaskById"]),
        handleEditTask() {
            let objTaskEdit = {
                id: this.taskSelected.id,
                name: this.taskName,
                level: parseInt(this.level)
            };
            this.handleEditTaskById(objTaskEdit);
            this.handleResetData();
        },
        handleCancel() {
            this.toggleForm();
            this.handleResetData();
        },
        handleAddnew() {
            if (this.taskName.trim()) {
                let objTask = {
                    id: uuidv4(),
                    name: this.taskName.trim(),
                    level: parseInt(this.level)
                };
                this.handleAddnewTask(objTask);
                this.handleCancel();
            } else {
                alert("please enter value again");
            }
        },
        handleResetData() {
            this.taskName = "";
            this.level = 0;
        }
    }
};
</script>

<style>
</style>