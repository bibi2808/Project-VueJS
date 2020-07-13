<template>
    <div class="post-preview">
        <router-link
            :to="{
            name: 'blog-detail',
            params: {
                id:blog.id,
                title:formatTitle
            }
        }"
        >
            <a href="post.html">
                <h1 class="post-title">{{ blog.title}}</h1>
                <h5 class="post-subtitle">{{ blog.abstract }}</h5>
            </a>
        </router-link>
        <p class="post-meta">
            Posted by
            <a href="#">{{ blog.fullName }}</a>
            on {{ formatDate }}
        </p>
    </div>
</template>

<script>
export default {
    name: "blog-item",
    props: {
        blog: {
            type: Object
        }
    },
    computed: {
        formatDate() {
            var date = this.blog.create_date;
            var month = date.toLocaleString("default", {
                month: "long"
            });
            var day = date.getDay();
            var year = date.getFullYear();
            return month + " " + day + " " + year;
        },
        formatTitle() {
            return this.blog.title
                .split(" ")
                .join("-")
                .toLowerCase()
                .replace(".", "");
        }
    }
};
</script>

<style>
</style>