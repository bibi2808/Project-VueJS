<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.name }}</td>
        <td>{{ formatPrice }}</td>
        <td>
            <input :value="cart.quantity" @blur="handleUpdate" type="number" min="1" />
        </td>
        <td>
            <strong>{{ formatTotal }}</strong>
        </td>
        <td>
            <a class="label label-info update-cart-item" href="#" data-product>Update</a>
            <a
                @click.prevent="handleDelete"
                class="label label-danger delete-cart-item"
                href="#"
                data-product
            >Delete</a>
        </td>
    </tr>
</template>

<script>
import { toCurrency, validateQuantity } from "../helper";
import { mapActions } from "vuex";
import { NOTI_ACT_DELETE } from "../constant/config";
export default {
    name: "cart-body-item",
    props: {
        index: { type: Number },
        cart: { type: Object }
    },
    computed: {
        product() {
            return this.cart.product;
        },
        formatPrice() {
            return toCurrency(this.product.price, "$", "left");
        },
        formatTotal() {
            return toCurrency(
                this.product.price * this.cart.quantity,
                "$",
                "left"
            );
        }
    },
    methods: {
        ...mapActions({
            actDeleteCart: "cart/handleDeleteCart",
            setLoading: "setLoading"
        }),
        handleDelete() {
            if (confirm("Are you sure to delete this item ?")) {
                this.actDeleteCart(this.cart);
                this.$notify(NOTI_ACT_DELETE);
            }
        },
        handleUpdate(event) {
            // open loading
            this.setLoading(true);
            setTimeout(() => {
                // close loading
                this.setLoading(false);
            }, 1000);
        }
    }
};
</script>

<style>
</style>