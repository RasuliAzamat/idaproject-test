import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
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
        ],
    }),

    getters: {
        getProducts(state) {
            return state.products
        }
    },

    actions: {
        addProduct(product) {
            this.products.push(product)
        }
    },
})
