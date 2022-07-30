<template>
    <div class="products__item">
        <img :src="link" :alt="name" class="products__item--img" />
        <h3 class="products__item--title">
            {{ name }}
        </h3>
        <p class="products__item--text">
            {{ description }}
        </p>
        <strong class="products__item--price">
            {{ toCurrency(price) }} руб.
        </strong>

        <div class="products__item--trashbox" @click="$emit('deleteProduct', id)">
            <IconsTrashbox />
        </div>
    </div>
</template>

<script setup>
import { toCurrency } from '/utils/toCurrency.js'

const { id, link, name, description, price } = defineProps({
    id: {
        type: Number,
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
.products__item {
    position: relative;

    border-radius: 4px;
    padding-bottom: 25px;

    background-color: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease-in-out;

    &--img {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        max-width: 100%;
    }

    &--title {
        margin: 16px;

        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }

    &--text {
        margin: 16px 16px 32px 16px;
    }

    &--price {
        margin: 16px 16px 25px 16px;

        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }

    &--trashbox {
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
    .products__item {
        &--trashbox {
            top: -15px;
            right: -15px;

            border-radius: 10px;

            cursor: pointer;
            transform: scale(0);
            opacity: 0;
        }

        &:hover {
            .products__item--trashbox {
                top: -10px;
                right: -10px;
                transform: scale(1);
                opacity: 1;
            }
        }
    }
}
</style>
