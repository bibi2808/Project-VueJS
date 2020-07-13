<template>
    <div id="app">
        <loading :class="{show:isLoading}" />
        <div class="container">
            <comp-title />

            <div class="row">
                <product-list />

                <cart-wrapper />
            </div>
            <notifications group="noti" position="top right" />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

import CompTitle from "./components/CompTitle";
import ProductList from "./components/ProductList";
import CartWrapper from "./components/CartWrapper";
import Loading from "./components/Loading";
export default {
    name: "app",
    data() {
        return {};
    },
    computed: {
        ...mapState(["isLoading"])
    },
    components: {
        CompTitle,
        ProductList,
        CartWrapper,
        Loading
    }
};
</script>

<style>
.vue-notification {
    padding-right: 10px;
    padding-bottom: 10px;
}
</style>
