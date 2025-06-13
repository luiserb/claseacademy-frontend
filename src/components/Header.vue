<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const currentPath = ref(route.path);

    import { useDisplay } from 'vuetify';

    const showMenu = ref(false);
    const { name } = useDisplay();
    const display = ref(name);

    const paths = [
        {
            "title": "Inicio",
            "url": "/"
        },
        {
            "title": "Cursos",
            "url": "/courses"
        },
        {
            "title": "Empleo",
            "url": "/jobs"
        },
        {
            "title": "Contacto",
            "url": "/contact"
        }
    ]

    const scroll = ref(false);

    function scrollHeader(){
        let header = document.querySelector('.header');
        let scrollY = window.pageYOffset;
        if(scrollY >= 95){
            scroll.value = true;
        }else{
            scroll.value = false;
        }
    }

    onMounted(() => {
        if(currentPath == "/" || currentPath == '/jobs'){
            window.addEventListener('scroll', scrollHeader);
        }else{
            scroll.value = true;
        }
    })

    onUnmounted(() => {
        if(currentPath == "/" || currentPath == "/jobs"){
            window.removeEventListener('scroll', scrollHeader);
        }else{
            scroll.value = true;
        }
    })
</script>

<template>
    <v-app-bar
        class="header"
        :class="{'scroll_header': scroll}"
        :color="scroll ? 'background': 'transparent'"
        elevation="0"
    >
        <v-app-bar-nav-icon 
            v-if="display == 'xs'"
            variant="text" 
            color="primary"
            @click="showMenu = !showMenu">
        </v-app-bar-nav-icon>

       <v-toolbar-title
            :class="scroll ? 'text-primary': 'text-white'"
       >
            Clase Academy

            <v-btn
                v-for="(link, i) in paths"
                :key="i"
                variant="text"
                class="ml-4 d-xs-none"
                :to="link.url"
            >
                <span
                    class="text-body-2"
                >
                    {{link.title}}
                </span>
            </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
            v-if="display != 'xs'"
            class="text-white"
            variant="elevated"
            color="primary"
        >
            Comenzar gratis
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-if="display == 'xs'"
        color="primary"
        v-model="showMenu"
    >
        <v-list
            density="compact"
            nav
        >
            <v-list-item
                v-for="path in paths"
                :key="path"
                :title="path.title" 
                :to="path.url"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>