<script setup>
    import amonfi from '@/assets/images/collaborators/amonfi.png';
    import juanPabloApostol from '@/assets/images/collaborators/juan_pablo_apostol.png';
    import enriquillo from '@/assets/images/collaborators/enriquillo.png';
    import colegioEducativoOriental from '@/assets/images/collaborators/colegio_educativo_oriental.png';
    
    const collaboratorsList = [
        {
            "title": "Academia Enriquillo",
            "description": "Academy Enriquillo cuenta con una potencia escuela de formación de Locutores, con un programa de clase vanguardista, relacionado la locución tradicional y la digital moderna.",
            "image": enriquillo
        },
        {
            "title": "Academia Amonfi",
            "description": "AMONFI es la academia experta en temas deportivos. Cuenta con un gran equipo de formación en el diversas áreas deportivas, entre las que encontramos el baloncesto, volibol, softball, basebol, entre otras disciplinas.",
            "image": amonfi
        },
        {
            "title": "Juan Pablo Apostor",
            "description": "Juan Pablo Apóstol, especializada en formación técnica profesional, en las cuales imparten todos los cursos empresariales necesario para el buen desarrollo, encontramos cursos como Paquete de Oficina e Internet, Secretariado Ejecutiva, Excel, Servicio al cliente, entre otros.",
            "image": juanPabloApostol
        },
        {
            "title": "Centro Educativo Oriental",
            "description": "Juan Pablo Apóstol, especializada en formación técnica profesional, en las cuales imparten todos los cursos empresariales necesario para el buen desarrollo, encontramos cursos como Paquete de Oficina e Internet, Secretariado Ejecutiva, Excel, Servicio al cliente, entre otros.",
            "image": colegioEducativoOriental
        }
    ]
</script>

<template>
    <section class="section">
        <h3 class="text-h4 text-center text-primary">
            Alianzas
        </h3>

        <v-row
            class="mt-6"
            justify="center"
        >
            <v-col
                v-for="(collaborator, i) in collaboratorsList"
                :key="i"
                cols="12"
                xs="12"
                sm="6"
                md="3"
            >
                <v-card
                    class="pa-4 rounded-xl"
                    elevation="20"
                >
                    <v-row
                        align="center"
                    >
                        <v-col>
                            <v-img
                                class="d-flex justify-center"
                                :src="collaborator.image"
                                alt="collaborator"
                                rounded="circle"
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
                        </v-col>

                        <v-col
                            xl="9"
                        >
                            <h4 class="text-h6">
                                {{collaborator.title}}
                            </h4>
                        </v-col>
                    </v-row>

                    <v-divider 
                        inset
                        class="my-3"
                    ></v-divider>

                    <v-card-text
                        class="text-center"
                    >
                        {{collaborator.description}}
                    </v-card-text>

                    <div class="mt-2 text-center">
                        <v-btn
                            v-for="(icon, i) in ['mdi-facebook', 'mdi-instagram', 'mdi-web']"
                            :key="i"
                            variant="tonal"
                            :icon="icon"
                            class="mx-1"
                        ></v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>