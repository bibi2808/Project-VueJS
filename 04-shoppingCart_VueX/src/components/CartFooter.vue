<template>
    <tfoot id="my-cart-footer">
        <tr>
            <td colspan="4">
                There are
                <b>{{ tfootInfo.countItem }}</b> items in your shopping cart.
            </td>
            <td colspan="2" class="total-price text-left">{{ formatPrice }}</td>
        </tr>
    </tfoot>
</template>

<script>
import { mapGetters } from "vuex";

import { toCurrency } from "../helper";
export default {
    name: "cart-footer",
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            tfootInfo: "cart/tfootInfo"
        }),
        formatPrice() {
            return toCurrency(this.tfootInfo.totalPrice, "$", "left");
        }
    }
};
</script>

<style>
</style>