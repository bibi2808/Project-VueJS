<template>
    <tr>
        <td class="text-center">{{index}}</td>
        <td>{{task.name}}</td>
        <td class="text-center">
            <span class="badge" v-bind:class="classLevel">{{getLevelName}}</span>
        </td>
        <td>
            <button v-on:click="handleEdit" type="button" class="btn btn-warning">Edit</button>
            <button v-on:click="handleDelete" type="button" class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
import mapLevel from "../mock/level";
export default {
    name: "todo-list-item",
    props: {
        task: {
            type: Object,
            default: {}
        },
        index: Number
    },
    data() {
        return {
            mapLevel: mapLevel
        };
    },
    computed: {
        getLevelName() {
            return this.mapLevel[this.task.level].name;
        },
        classLevel() {
            return this.mapLevel[this.task.level].class;
        }
    },
    methods: {
        handleDelete() {
            if (confirm("Are you sure to delete this task", this.task.name)) {
                this.$emit("handleDelete", this.task);
            }
        },
        handleEdit() {
            this.$emit("handleEdit", this.task);
        }
    }
};
</script>

<style>
</style>