<template>
    <input
        :type="type"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :class="['input', {error: error}]"
    />
</template>

<script setup>
const {type, name, id, placeholder} = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    name: {
        type: String,
        required: false,
    },
    id: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
})
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    padding: 11px 16px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid transparent;

    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;

    font-size: 12px;
    line-height: 15px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &.error {
        border-color: #ff8484;
    }

    &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &::placeholder {
        color: #b4b4b4;
    }
}
</style>
