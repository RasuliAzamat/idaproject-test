import {defineStore} from 'pinia'
import {httpService} from '/utils/httpsService'
import {transformFbData} from '/utils/transformFbData.js'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),

    getters: {
        getProducts(state) {
            return state.products
        },
    },

    actions: {
        async fetchProducts() {
            try {
                const fbObj = await httpService.fetchProducts()

                let data = []
                if (fbObj) data = transformFbData(fbObj)

                this.products = data
            } catch (error) {
                console.log(error)
            }
        },
        async postProduct(product) {
            try {
                await httpService.postProduct(product)
                await this.fetchProducts()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteProduct(id) {
            try {
                await httpService.deleteProduct(id)
                await this.fetchProducts()
            } catch (error) {
                console.log(error)
            }
        },
    },
})
