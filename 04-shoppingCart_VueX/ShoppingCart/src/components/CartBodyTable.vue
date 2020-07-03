<template>
    <tbody id="my-cart-body">
        <cart-body-item />
        <cart-body-item />
        <cart-body-item />
        <cart-body-item />
    </tbody>
</template>

<script>
import CartBodyItem from "./CartBodyItem";
export default {
    name: "cart-body-table",
    data() {
        return {};
    },
    components: {
        CartBodyItem
    }
};
</script>

<style>
</style>