<script setup>
    const modeList = [
        {
            "title": "Presencial",
            "description": "Estudia de manera presencial en nuestras instalaciones",
            "icon": "mdi-book"
        },
        {
            "title": "Semi-presencial",
            "description": "Estará con nosotros para tomar las clases prácticas, nos vemos desde tu hogar",
            "icon": "mdi-presentation-play"
        },
        {
            "title": "Remoto",
            "description": "Desde tu casa todo el tiempo",
            "icon": "mdi-laptop"
        }
    ]
</script>


<template>
    <section class="section">
        <v-row
            justify="center"
        >
            <v-col
                lg="4"
                class="text-center"
            >
                <h3
                    class="text-h4"
                >
                    Somos la academía pionera en educación basada en competencia en República Dominicana
                </h3>
            </v-col>
        </v-row>

        <v-row 
            class="mt-5"
            justify="center"
        >
            <v-col
                v-for="(mode, i) in modeList"
                :key="i"
                xl="3"
                class="ma-3 text-center"
            >
                <v-icon 
                    class="icon_areas"
                >
                    {{mode.icon}}
                </v-icon>
                
                <h3
                    class="text-h6 mb-2"
                >
                    {{mode.title}}
                </h3>

                <p
                    class="text-body-2"
                >
                    {{mode.description}}
                </p>
            </v-col>
        </v-row>
    </section>
</template>