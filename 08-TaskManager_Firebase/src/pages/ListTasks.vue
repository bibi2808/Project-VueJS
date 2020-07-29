<template>
    <div class="main-content">
        <page-title title="Management Task">
            <router-link to="/create" class="create-new-item">Create New Item</router-link>
        </page-title>
        <div class="wrapper-board">
            <div class="row">
                <!-- TODO -->
                <div class="item">
                    <div class="col-title">Todo</div>
                    <task-item v-for="item in getListTaskFilter.todo" :key="item.id" :item="item" />
                </div>
                <!-- In Process -->
                <div class="item">
                    <div class="col-title">In Process</div>
                    <task-item
                        v-for="item in getListTaskFilter.inProgress"
                        :key="item.id"
                        :item="item"
                    />
                </div>
                <!-- Bugs -->
                <div class="item">
                    <div class="col-title">Bugs</div>
                    <task-item
                        v-for="item in getListTaskFilter.toVerify"
                        :key="item.id"
                        :item="item"
                    />
                </div>
                <!-- Done -->
                <div class="item">
                    <div class="col-title">Done</div>
                    <task-item v-for="item in getListTaskFilter.done" :key="item.id" :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageTitle from "../components/PageTitle";
import TaskItem from "../components/TaskItem";
export default {
    name: "list-task",
    computed: {
        ...mapGetters(["getListTaskFilter"])
    },
    components: {
        PageTitle,
        TaskItem
    }
};
</script>

<style>
</style>