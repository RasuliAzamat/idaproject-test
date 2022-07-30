class HTTPService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async fetchProducts() {
        try {
            const response = await fetch(`${this.url}/products.json`)
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }

    async postProduct(product) {
        try {
            const response = await fetch(`${this.url}/products.json`, {
                method: 'post',
                body: JSON.stringify(product),
            })
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProduct(id) {
        try {
            const response = await fetch(`${this.url}/products/${id}.json`, {
                method: 'delete',
            })
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }
}

export const httpService = new HTTPService(
    'https://idaproject-test-app-default-rtdb.firebaseio.com'
)
