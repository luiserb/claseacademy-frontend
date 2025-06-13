<script setup>
    import pythonLogo from '@/assets/svg/python_logo.svg';
    import htmlLogo from '@/assets/svg/html_logo.svg';
    import cssLogo from '@/assets/svg/css_logo.svg';
    import javascriptLogo from '@/assets/svg/javascript_logo.svg';
    import vueLogo from '@/assets/svg/vue_logo.svg';
    
    const coursesList = [
        {
            "title": "Curso de Python3",
            "description": "¿Listo para transformar tus ideas en código y abrir un mundo de posibilidades? Nuestro Curso Completo de Python está diseñado para llevarte de la mano, desde los fundamentos más básicos hasta las habilidades avanzadas necesarias para convertirte en un desarrollador profesional. Ya sea que busques automatizar tareas, analizar datos, desarrollar aplicaciones web o sumergirte en la inteligencia artificial, Python es tu puerta de entrada, y este curso es tu llave.",
            "image": pythonLogo
        },
        {
            "title": "Curso de HTML5",
            "description": "¿Alguna vez te has preguntado cómo se construyen las páginas web que visitas a diario? ¿Deseas crear tus propios sitios web, blogs o portafolios interactivos? Nuestro Curso Completo de HTML5 es tu punto de partida esencial. Te sumergirás en el lenguaje fundamental de la web, aprendiendo a estructurar y presentar contenido de manera profesional, sentando las bases sólidas para cualquier carrera en desarrollo web.",
            "image": htmlLogo
        },
        {
            "title": "Curso de CSS",
            "description": "¿Ya dominas la estructura de tus páginas con HTML y ahora quieres que luzcan espectaculares, sean adaptables a cualquier pantalla y capturen la atención de tus usuarios? Nuestro Curso Completo de CSS (Cascading Style Sheets) es la clave para transformar tus sitios web estáticos en experiencias visualmente atractivas y profesionales. Aprende a controlar cada píxel, cada color y cada disposición para crear diseños web que realmente destaquen.",
            "image": cssLogo
        },
        {
            "title": "Curso de JavaScript",
            "description": "¿Tus páginas web ya lucen increíbles con HTML y CSS, pero aún les falta esa chispa de interactividad? ¿Quieres que tus sitios reaccionen a los usuarios, manipulen datos, se comuniquen con servidores o incluso construyan aplicaciones complejas? Nuestro Curso Completo de JavaScript es tu billete para pasar de ser un creador de sitios estáticos a un verdadero desarrollador web, capaz de construir experiencias dinámicas y funcionales.",
            "image": javascriptLogo
        },
        {
            "title": "Curso de Vue",
            "description": "¿Ya dominas HTML, CSS y JavaScript, pero sientes que crear interfaces complejas y mantener tu código organizado se vuelve un desafío? ¿Estás listo para construir Single Page Applications (SPAs) dinámicas, escalables y con una experiencia de usuario fluida? Nuestro Curso Completo de Vue.js es tu puerta de entrada al desarrollo front-end moderno. Aprenderás a construir interfaces reactivas de manera eficiente, optimizando tu tiempo y potenciando tus proyectos.",
            "image": vueLogo
        }
    ]
</script>


<template>
    <section class="section">
        <v-carousel
            height="100%"
            class="my-4"
            hide-delimiters
            cycle 
            :interval="3000"
        >
            <v-carousel-item
                v-for="(course, i) in coursesList"
                :key="i"
            >
                <v-sheet
                    color="transparent"
                >
                    <v-row
                        class="text-center pa-5"
                        justify="center"
                        align="center"
                    >
                        <v-col
                            xs="12"
                            sm="6"
                            md="3"
                        >
                            <div 
                                class="d-flex justify-center text-center"
                            >
                                <div class="courses_logo">
                                    <v-img
                                        :src="course.image"
                                        alt="logo curso"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                align="center"
                                                class="fill-height ma-0"
                                                justify="center"
                                            >
                                                <v-progress-circular
                                                color="primary"
                                                indeterminate
                                                ></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </div>
                            </div>
                        </v-col>

                        <v-col
                            xl="3"
                        >
                            <v-card
                                class="px-5 py-7 rounded-xl"
                                elevation="19"
                                :title="course.title"
                                :text="course.description"
                                color="primary"
                            >
                                <v-btn
                                    class="mt-3 rounded-xl"
                                    variant="tonal"
                                >
                                    Hazlo gratis
                                </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </section>
</template>


<style lang="scss">
    .courses_logo{
        width: 400px;
        img{
            opacity: .8;
        }
    }
</style>