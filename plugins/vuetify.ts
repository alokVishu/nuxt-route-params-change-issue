import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtapp => {
    const vuetify = createVuetify({
        ssr: true
    })

  nuxtapp.vueApp.use(vuetify)
})