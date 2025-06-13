import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VTimePicker } from 'vuetify/labs/VTimePicker'
import { VDateInput } from 'vuetify/labs/VDateInput'

import '@mdi/font/css/materialdesignicons.css'

import { Plugin } from 'vue-responsive-video-background-player'


const app = createApp(App)


const vuetify = createVuetify({
  components: {
       ...components,
       VTimePicker,
       VDateInput
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
        defaultTheme: "claseAcademyTheme",
        themes: {
            claseAcademyTheme: {
                dark: true,
                colors: {
                    background: '#0E100F',
                    surface: '#171717',
                    primary: '#1D71DC',
                    secondary: '#6A5A47'
                    
                }
            }
        }
  }
})

app.use(vuetify)
app.use(router)
app.use(Plugin)

app.mount('#app')
