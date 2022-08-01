<template>
    <div class="product">
        <img :src="link" :alt="name" class="product__img" />
        <h3 class="product__title">
            {{ name }}
        </h3>
        <p class="product__text">
            {{ description }}
        </p>
        <strong class="product__price">
            {{ toCurrency(price) }} руб.
        </strong>

        <div class="product__trashbox" @click="$emit('deleteProduct', id)">
            <IconsTrashbox />
        </div>
    </div>
</template>

<script setup>
import { toCurrency } from '/utils/toCurrency.js'

const { id, link, name, description, price } = defineProps({
    id: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: [String, undefined, null],
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.product {
    position: relative;

    max-height: 500px;
    border-radius: 4px;
    padding-bottom: 25px;

    background-color: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease-in-out;

    &__img {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        width: 100%;
        max-height: 60%;
    }

    &__title {
        margin: 16px;

        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }

    &__text {
        margin: 16px 16px 32px 16px;
    }

    &__price {
        margin: 16px 16px 25px 16px;

        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }

    &__trashbox {
        position: absolute;
        top: 0px;
        right: 0px;

        padding: 9px;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 4px;

        cursor: pointer;

        background-color: #ff8484;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease-in-out;
    }

    &:hover {
        box-shadow: 0px 12px 14px rgba(0, 0, 0, 0.1);
    }
}

@media (min-width: 1024px) {
    .product {
        &__trashbox {
            top: -15px;
            right: -15px;

            border-radius: 10px;

            cursor: pointer;
            transform: scale(0);
            opacity: 0;
        }

        &:hover {
            .product__trashbox {
                top: -10px;
                right: -10px;
                transform: scale(1);
                opacity: 1;
            }
        }
    }
}
</style>
