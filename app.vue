<template>
    <div class="app-container flex-container">
        <aside class="aside">
            <h2>Добавление товара</h2>

            <AppForm @formSubmit="addProduct" />
        </aside>
        
        <main class="main">
            <UiSelect selectName="filter" :options="options" />

            <div class="products">
                <AppProduct
                    v-for="{id, img, title, text, price} in products"
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
const addProduct = product => {
    console.log(product)
}

const products = ref([
    {
        id: 1,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара 1',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: 2,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара 2',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 12000,
    },
    {
        id: 3,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара 3',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 6000,
    },
    {
        id: 4,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара 4',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 20000,
    },
    {
        id: 5,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара 5',
        text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 2000,
    },
    {
        id: 6,
        img: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
        title: 'Наименование товара 6',
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

.app-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 5px 10px;
}

.flex-container {
    display: flex;
    flex-direction: column;
}

.aside {
    flex-basis: 25%;
    margin-bottom: 70px;

    h2 {
        margin: 15px 0 30px;
    }
}

.main {
    flex-basis: 75%;

    .select-wrapper {
        margin: 15px 0 30px auto;
    }
}

.products {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
    gap: 20px 20px;

    margin-bottom: 50px;
}

@media (min-width: 600px) {
    .flex-container {
        flex-direction: row;
    }

    .form {
        padding: 25px;
    }

    .aside {
        flex-basis: 45%;
    }

    .main {
        flex-basis: 55%;
    }
}

@media (min-width: 768px) {
    .aside {
        flex-basis: 35%;
        margin-bottom: 0;
        margin-right: 20px;
    }

    .main {
        flex-basis: 65%;
    }
    .products {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1024px) {
    .aside {
        flex-basis: 25%;
    }

    .main {
        flex-basis: 75%;
    }

    .products {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
