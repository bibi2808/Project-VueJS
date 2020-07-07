<template>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h1 class="panel-title">Your Cart</h1>
            </div>
            <div class="panel-body">
                <table class="table">
                    <cart-header />

                    <cart-body-table />

                    <cart-footer />
                </table>
            </div>
        </div>
        <!-- <notify /> -->
    </div>
</template>

<script>
import CartHeader from "./CartHeader";
import CartBodyTable from "./CartBodyTable";
import CartFooter from "./CartFooter";

import { mapGetters } from 'vuex';
// import Notify from "./Notify";
export default {
    name: "cart-wrapper",
    data() {
        return {};
    },
    components: {
        CartHeader,
        CartBodyTable,
        CartFooter
        // Notify
    }
};
</script>

<style>
</style>