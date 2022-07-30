import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 2,
                link: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
                name: 'B Наименование товара 2',
                description:
                'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 12000,
            },
            {
                id: 5,
                link: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
                name: 'E Наименование товара 5',
                description:
                    'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 2000,
            },
            {
                id: 1,
                link: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
                name: 'A Наименование товара 1',
                description:
                    'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 10000,
            },
            {
                id: 4,
                link: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
                name: 'D Наименование товара 4',
                description:
                    'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 20000,
            },
            {
                id: 6,
                link: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
                name: 'F Наименование товара 6',
                description:
                    'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 5500,
            },
            {
                id: 3,
                link: 'https://www.lifeinnorway.net/wp-content/uploads/2022/02/faroe-islands-waterfall-sunset.jpg',
                name: 'C Наименование товара 3',
                description:
                'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 6000,
            },
        ],
    }),

    getters: {
        getProducts(state) {
            return state.products
        },
    },

    actions: {
        addProduct(product) {
            this.products.push(product)
        },
        deleteProduct(productId) {
            this.products = this.products.filter(product => product.id !== productId)
        },
    },
})
