<script setup>
    const areasList = [
        {
            "title": "Coaching",
            "description": "Es un programa de acompañamiento individualizado, donde un experto se convierte en tu mentor personal desde nuestra plataforma.",
            "icon": "mdi-account-supervisor"
        },
        {
            "title": "Administración",
            "description": "Pensado para que gestores de plataformas, administradores de contenido y líderes educativos puedan manejar todas las facetas de su ecosistema de aprendizaje.",
            "icon": "mdi-domain"
        },
        {
            "title": "Tecnología",
            "description": "Nos centramos en brindar las habilidades y el conocimiento práctico necesarios para que nuestros usuarios no solo entiendan la tecnología, sino que también puedan crear, innovar y liderar.",
            "icon": "mdi-language-python"
        }
    ]
</script>


<template>
    <section class="section">
        <v-row 
            justify="center"
        >
            <v-col
                v-for="(area, i) in areasList"
                :key="i"
                xl="3"
                class="ma-3 text-center"
            >
                <v-icon 
                    class="icon_areas text-primary"
                >
                    {{area.icon}}
                </v-icon>
                
                <h3
                    class="text-h6 mb-2 text-primary"
                >
                    {{area.title}}
                </h3>

                <p
                    class="text-body-2 text-surface"
                >
                    {{area.description}}
                </p>
            </v-col>
        </v-row>
    </section>
</template>


<style lang="scss">
    .icon_areas{
        font-size: 120px;
    }
</style>