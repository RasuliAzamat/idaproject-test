<template>
    <form class="form" @submit.prevent="formSubmit">
        <h2 class="form__title">Добавление товара</h2>

        <div class="form__wrapper">
            <div class="form__field _required">
                <label for="name" class="form__label">
                    Наименование товара
                </label>
                <UiInput
                    id="name"
                    placeholder="Введите наименование товара"
                    class="form__input"
                    :error="nameError"
                    v-model.trim="nameModel"
                    @input="nameInputHandler"
                />
                <small v-if="nameError" class="form__error">
                    {{ nameError }}
                </small>
            </div>

            <div class="form__field">
                <label for="description" class="form__label">
                    Описание товара
                </label>
                <textarea
                    id="description"
                    placeholder="Введите описание товара"
                    class="form__input"
                    v-model.trim="descriptionModel"
                ></textarea>
            </div>

            <div class="form__field _required">
                <label for="link" class="form__label">
                    Ссылка на изображение товара
                </label>
                <UiInput
                    id="link"
                    placeholder="Введите ссылку"
                    class="form__input"
                    :error="linkError"
                    v-model.trim="linkModel"
                    @input="linkInputHandler"
                />
                <small v-if="linkError" class="form__error">
                    {{ linkError }}
                </small>
            </div>

            <div class="form__field _required">
                <label for="price" class="form__label">
                    Цена товара
                </label>
                <UiInput
                    id="price"
                    placeholder="Введите цену"
                    class="form__input"
                    :error="priceError"
                    v-model="priceModel"
                    @input="priceInputHandler"
                />
                <small v-if="priceError" class="form__error">
                    {{ priceError }}
                </small>
            </div>

            <UiButton :disabled="!isValidForm">Отправить</UiButton>
        </div>
    </form>
</template>

<script setup>
import { toCurrency } from '/utils/toCurrency.js'

const emit = defineEmits(['postProduct'])

// NAME INPUT

const nameModel = ref(null)
const nameError = ref(null)
const validName = ref(false)
const nameInputHandler = () => {
    const name = nameModel.value

    if (name.length) {
        validName.value = true
        return nameError.value = ''
    }
    if (name.length === 0) {
        validName.value = false
        return nameError.value = 'Это обязательное для заполнения поле'
    }
}

// DESCRIPTION INPUT

const descriptionModel = ref(null)

// LINK INPUT

const linkModel = ref(null)
const linkError = ref(null)
const validLink = ref(false)
const linkInputHandler = () => {
    const url = linkModel.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)

    if (linkModel.value.length === 0) {
        validLink.value = false
        return linkError.value = 'Это обязательное для заполнения поле'
    }

    if (url) {
        validLink.value = true
        return linkError.value = ''
    }

    validLink.value = false
    return linkError.value = 'Введите корректный URL адрес'
}

// PRICE INPUT

const priceError = ref(null)
const priceValue = ref(null)
const validPrice = ref(false)
const priceModel = computed({
    get() {
        return toCurrency(priceValue.value)
    },
    set(value) {
        priceValue.value = Number(value.replace(/\s/g, ''))
    },
})
const priceInputHandler = () => {
    const price = priceValue.value

    if (price > 0) {
        validPrice.value = true
        return priceError.value = ''
    }

    if (priceModel.length === 0) {
        validPrice.value = false
        return priceError.value = 'Это обязательное для заполнения поле'
    }

    if (isNaN(price)) {
        priceModel.value = ''
        validPrice.value = false
        return priceError.value = 'Введите цену в цифровом формате'
    }

    if (price <= 0) {
        validPrice.value = false
        return priceError.value = 'Цена должна быть выше 0'
    }
}

const isValidForm = computed(
    () => validName.value && validLink.value && validPrice.value
)

const formSubmit = () => {
    if (isValidForm.value) {
        const product = reactive({
            id: Date.now(),
            name: nameModel.value,
            description: descriptionModel.value,
            link: linkModel.value,
            price: priceValue.value,
        })

        emit('postProduct', product)
        
        nameModel.value = descriptionModel.value = linkModel.value = priceValue.value = validName.value = validLink.value = validPrice.value = null
    }
}
</script>

<style lang="scss" scoped>
.form {
    &__wrapper {
        padding: 15px;
        border-radius: 4px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
            0px 6px 10px rgba(0, 0, 0, 0.02);
    }

    &__title {
        margin: 0 0 16px;

        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
    }

    &__field {
        margin-bottom: 16px;

        &:nth-child(4) {
            margin-bottom: 25px;
        }

        &._required {
            .form__label {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;

                    width: 5px;
                    height: 5px;
                    margin-left: 5px;
                    border-radius: 50%;

                    background-color: #ff8484;
                }
            }
        }

        &:last-child {
            margin-bottom: 25px;
        }
    }

    &__label {
        display: block;
        margin-bottom: 3px;

        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        color: #49485e;
    }

    &__error {
        font-size: 10px;
        line-height: 13px;
        color: #ff8484;
    }

    textarea.form__input { 
        width: 100%;
        max-height: 200px;
        min-height: 124px;
        padding: 11px 16px;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid transparent;

        outline: none;
        resize: vertical;

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
}

@media (min-width: 600px) {
    .form__wrapper {
        padding: 25px;
    }
}
</style>
