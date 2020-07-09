<template>
    <div class="not-found">
        <aside>
            <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
                alt="404 Image"
            />
        </aside>
        <router-link to="/" class="btn btn-info">You can go home now!</router-link>
    </div>
</template>

<script>
export default {
    name: "not-found"
};
</script>

<style>
.not-found {
    position: relative;
    top: 0;
    left: 0;
}

.not-found img {
    width: 75%;
    background-repeat: no-repeat;
    text-align: center;
}

a.btn.btn-info.router-link-active {
    position: absolute;
    top: 75%;
    right: 15%;
    padding: 24px;
    border-radius: 50%;
}
</style>