import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    app: {
        head: {
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
            // script: [{ src: '' }],
            link: [
                { rel: 'stylesheet', href: '/assets/styles/normalize.css' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap',
                },
            ],
            noscript: [{ children: 'Javascript is required' }],
        },
    },
})
