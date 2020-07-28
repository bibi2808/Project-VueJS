<template>
    <div class="backlogs-item" v-if="item">
        <div class="project">{{ item.name }}</div>
        <router-link
            class="title"
            exactActiveClass
            activeClass
            tag="div"
            :to="{name:'edit-task-page', params: { id :item.id } }"
        >{{ item.title }}</router-link>
        <div class="due-date">
            Deadline:
            <span>{{ dateFormat}}</span>
        </div>
        <div class="phase">
            Giai đoạn:
            <span>{{ HASH_TEAM_CONFIG[item.team]}}</span>
        </div>
        <div class="phase">
            Độ ưu tiên:
            <span>{{ HASH_PRIORITY_CONFIG[item.priority]}}</span>
        </div>
        <div class="assign">
            @{{ item.email_member.split('@')[0]}}
            <div
                v-if="isAdmin && item.status === STATUS_CONFIG.DONE.value"
                @click="handleDeleteTask"
                class="delete"
            >Delete</div>
        </div>
    </div>
</template>

<script>
import { tasksRef } from "../config/firebase";
import { mapGetters } from "vuex";
import {
    HASH_TEAM_CONFIG,
    HASH_PRIORITY_CONFIG,
    STATUS_CONFIG
} from "../config/const";
export default {
    name: "task-item",
    data() {
        return {
            HASH_TEAM_CONFIG,
            HASH_PRIORITY_CONFIG,
            STATUS_CONFIG
        };
    },
    props: {
        item: { type: Object, default: null }
    },
    computed: {
        ...mapGetters(["isAdmin"]),
        dateFormat() {
            if (this.item) {
                return new Date(this.item.end_at).toLocaleString();
            }
            return "";
        }
    },
    methods: {
        handleDeleteTask() {
            tasksRef.child(this.item.id).remove();
        }
    }
};
</script>

<style>
.title {
    cursor: pointer;
}
.title,
.title:hover {
    text-transform: capitalize;
}
.assign {
    position: relative;
}
.assign .delete {
    position: absolute;
    right: 0;
    top: 3px;
    border: 1px solid red;
    padding: 1px 4px;
    border-radius: 4px;
    font-size: 11px;
    background-color: red;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
}

.backlogs-item:hover .delete {
    opacity: 1;
    visibility: visible;
}
</style>