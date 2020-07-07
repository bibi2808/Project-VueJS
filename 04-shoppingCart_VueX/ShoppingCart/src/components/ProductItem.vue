<template>
    <div class="product-item">
        <!-- PRODUCT : START -->
        <div class="media product">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" :src="urlImage" alt="charmander" />
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ product.name }}</h4>
                <p>{{ product.summary}}</p>
                <template v-if="product.canBuy">
                    <input
                        v-model="quantity"
                        name="quantity-product-1"
                        type="number"
                        value="1"
                        min="1"
                    />
                    <a
                        data-product="1"
                        href="#"
                        class="price"
                        @click.prevent="handleBuyProduct"
                    >{{formatPrice}}</a>
                </template>

                <span v-else class="price">{{ formatPrice }}</span>
            </div>
        </div>
        <!-- PRODUCT : END -->
    </div>
</template>

<script>
import { toCurrency, validateQuantity } from "../helper";
import { NOTI_GREATER_THAN_ONE, NOTI_ACT_ADD } from "../constant/config";
import { mapActions } from "vuex";
export default {
    name: "product-item",
    data() {
        return { quantity: 1 };
    },
    props: {
        product: { type: Object, default: {} }
    },
    computed: {
        urlImage() {
            return "dist/images/" + this.product.image;
        },
        formatPrice() {
            return toCurrency(this.product.price, "$", "left");
        }
    },
    methods: {
        ...mapActions({
            actBuyProduct: "cart/actionBuyProduct"
        }),
        handleBuyProduct() {
            const check = validateQuantity(this.quantity);
            if (check) {
                let data = {
                    product: this.product,
                    quantity: parseInt(this.quantity)
                };
                this.quantity = 1;
                this.actBuyProduct(data);
                this.$notify(NOTI_ACT_ADD);
            } else {
                this.$notify(NOTI_GREATER_THAN_ONE);
            }
        }
    }
};
</script>

<style>
</style>