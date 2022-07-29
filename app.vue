<template>
    <div class="container">
        <aside class="aside">
            <h2>Добавление товара</h2>

            <form action="#" class="form">
                <div class="form__field _required">
                    <label for="name" class="form__label">
                        Наименование товара
                    </label>
                    <uiInput
                        name="name"
                        id="name"
                        placeholder="Введите наименование товара"
                        class="form__input"
                        :error="false"
                    />
                    <small v-if="false" class="form__error">
                        Далеко-далеко за словесными горами в стране.
                    </small>
                </div>

                <div class="form__field">
                    <label for="description" class="form__label">
                        Описание товара
                    </label>
                    <UiInput
                        name="description"
                        id="description"
                        placeholder="Введите описание товара"
                        class="form__input"
                        :error="false"
                    />
                </div>

                <div class="form__field _required">
                    <label for="link" class="form__label">
                        Ссылка на изображение товара
                    </label>
                    <UiInput
                        name="link"
                        id="link"
                        placeholder="Введите ссылку"
                        class="form__input"
                        :error="false"
                    />
                    <small v-if="false" class="form__error">
                        Далеко-далеко за словесными горами в стране.
                    </small>
                </div>

                <div class="form__field _required">
                    <label for="price" class="form__label">
                        Цена товара
                    </label>
                    <UiInput
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Введите цену"
                        class="form__input"
                        :error="false"
                    />
                    <small v-if="false" class="form__error">
                        Далеко-далеко за словесными горами в стране.
                    </small>
                </div>

                <UiButton :disabled="false">Отправить</UiButton>
            </form>
        </aside>
        <main class="main">
            <UiSelect
                selectName="filter"
                :options="options"
                style="margin: 15px 0 30px auto"
            />

            <div class="products">
                <AppProduct
                    v-for="{ id, img, title, text, price } in products"
                    :key="id"
                    :img="img"
                    :title="title"
                    :text="text"
                    :price="price"
                />
            </div>
        </main>
    </div>
</template>

<script setup>
const products = ref([
    {
        id: 1,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: 2,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 12000,
    },
    {
        id: 3,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 6000,
    },
    {
        id: 4,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 20000,
    },
    {
        id: 5,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 2000,
    },
    {
        id: 6,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 5500,
    },
])

const options = ref([
    {
        id: 1,
        value: 'default',
        text: 'По умолчанию',
    },
    {
        id: 2,
        value: 'increase',
        text: 'По возрастанию цены',
    },
    {
        id: 3,
        value: 'decrease',
        text: 'По убыванию цены',
    },
    {
        id: 4,
        value: 'naming',
        text: 'По наименованию',
    },
])
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
    color: #3f3f3f;
    font-family: 'Source Sans Pro', sans-serif;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 5px 10px;

    display: flex;
}

.aside {
    flex-basis: 25%;
    margin-right: 20px;

    h2 {
        margin: 15px 0 30px;
    }
}

.form {
    padding: 25px;
    border-radius: 4px;

    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);

    &__field {
        margin-bottom: 17px;

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
}

.main {
    flex-basis: 75%;
}

.products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: max-content;
    gap: 20px 20px;

    margin-bottom: 50px;
}
</style>
