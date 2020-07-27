<template>
    <header>
        <div class="container">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <a href="/">Tasks</a>
                </li>
            </ul>
            <ul class="right">
                <li>
                    Đăng nhập với
                    <a href="/">example@gmail.com</a>
                </li>
                <li>
                    <router-link to="/logout">Logout</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "home-header"
};
</script>

<style>
</style>