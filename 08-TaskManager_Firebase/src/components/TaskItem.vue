<template>
    <div class="backlogs-item">
        <div class="project">{{ item.title }}</div>
        <div class="title">{{ item.description }}</div>
        <div class="due-date">
            Deadline:
            <span>{{ item.end_at}}</span>
        </div>
        <div class="phase">
            Giai đoạn:
            <span>Front End</span>
        </div>
        <div class="assign">{{ item.email_member}} -</div>
    </div>
</template>

<script>
export default {
    name: "task-item",
    props: {
        item: { type: Object, default: null }
    }
};
</script>

<style>
</style>