<template>
    <div class="select-wrapper">
        <select 
            class="select" 
            v-model="modelValue" 
            @change="changeOption">
            <option
                v-for="{ id, value, text } in options"
                :key="id"
                :value="value"
                class="select__option"
            >
                {{ text }}
            </option>
        </select>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])

const { modelValue, options } = defineProps({
    modelValue: {
        type: String,
    },
    options: {
        type: Array,
        default: () => []
    },
})

const changeOption = event => emit('update:modelValue', event.target.value)

</script>

<style lang="scss" scoped>
.select-wrapper {
    width: max-content;
    border-radius: 4px;

    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.select {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 7px solid transparent;
    border-top: 7px solid transparent;
    outline: none;

    font-size: 12px;
    color: #b4b4b4;
    background-color: #fffefb;

    &__option {
        color: inherit;
    }
}
</style>
