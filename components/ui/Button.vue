<template>
    <button :type="type" class="btn">
        <slot />
    </button>
</template>

<script setup>
const { type } = defineProps({
    type: {
        type: String,
        default: 'submit',
    },
})
</script>

<style lang="scss" scoped>
.btn {
    width: 100%;
    padding: 10px;
    border-radius: 10px;

    border: none;
    outline: none;
    cursor: pointer;

    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    background-color: #7bae73;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #7caf74e6;
    }

    &:disabled {
        cursor: not-allowed;
        color: #b4b4b4;
        background: #eeeeee;
    }
}
</style>
