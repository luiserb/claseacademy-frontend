<script setup>
    import Courses from '@/components/Views/Home/Courses.vue';
    import BestCourses from '@/components/Views/Courses/BestCourses.vue';

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
    <v-main>
        <v-container>
            <h1 
                class="text-center text-h4"
            >
                ¡Aprende con nosotros!
            </h1>

            <Courses />
            <BestCourses 
                :coursesList="coursesList"
            />
        </v-container>
    </v-main>
</template>