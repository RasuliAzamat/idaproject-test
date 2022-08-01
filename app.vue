<template>
    <div class="app-container flex-container">
        <aside class="aside">
            <h2>Добавление товара</h2>

            <AppForm @postProduct="postProduct" />
        </aside>

        <main class="main">
            <UiSelect v-model="sortOptionBy" :options="options" />

            <div class="products">
                <p v-if="sortedProducts.length === 0">Список товаров пуст</p>

                <TransitionGroup name="products" v-else>
                    <AppProduct
                        v-for="{ id, link, name, description, price } in sortedProducts"
                        :id="id"
                        :key="id"
                        :link="link"
                        :name="name"
                        :description="description"
                        :price="price"
                        @deleteProduct="store.deleteProduct(id)"
                    />
                </TransitionGroup>
            </div>
        </main>
    </div>
</template>

<script setup>
import  { useProductsStore } from '/store/products.js'

onBeforeMount(() => store.fetchProducts())

const store = useProductsStore()

const postProduct = product => store.postProduct(product)

const sortOptionBy = ref('default')

const sortedProducts = computed(() => {
    if (sortOptionBy.value === 'increase') {
        return [...store.getProducts].sort((product1, product2) => product1.price - product2.price)
    }

    if (sortOptionBy.value === 'decrease') {
        return [...store.getProducts].sort((product1, product2) => product1.price - product2.price).reverse()
    }

    if (sortOptionBy.value === 'naming') {
        return [...store.getProducts].sort((product1, product2) => product1.name.localeCompare(product2.name))
    }

    return store.getProducts
})

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

.products-enter-active,
.products-leave-active {
    transition: opacity 0.2s ease, transform 0.5s ease;
}

.products-enter-from,
.products-leave-to {
    transform: translateY(100px);
    opacity: 0;
}

.products-move {
    transition: transform 0.4s ease;
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
