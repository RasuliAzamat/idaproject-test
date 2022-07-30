<template>
    <input
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :class="['input', { 'error': error }]"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
const { type, id, placeholder, error, modelValue } = defineProps({
    type: {
        type: String,
        default: 'text',
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
        type: String,
        default: '',
    },
    modelValue: {
        type: [String, Number],
        required: false,
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
    transition: all 0.2s ease-in-out;

    &.error {
        border-color: #ff8484;
    }

    &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1),
            0px 1px 3px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1),
            0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &::placeholder {
        color: #b4b4b4;
    }
}
</style>
