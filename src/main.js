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
                dark: false,
                colors: {
                    background: '#fbf9f9',
                    surface: '#4D4D4D',
                    primary: '#D31E1E'
                    
                }
            }
        }
  }
})

app.use(vuetify)
app.use(router)
app.use(Plugin)

app.mount('#app')
