<script setup>
    import Icons from '@/components/Icons.vue';

    import videoHome from '@/assets/videos/video_home.mp4';
    import pythonLogo from '@/assets/svg/python_logo.svg';
</script>

<template>
    <video-background
        :src="videoHome"
        overlay="linear-gradient(0deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .6))" 
        style="height: 100vh;"
        class="text-white"
    >
        <v-main>
            <v-container
                class="mt-4"
            >
                <v-row
                    align="center"
                >
                    <v-col
                        cols="12"
                    >
                        <div 
                            class="d-flex justify-center text-center"
                        >
                            <div class="home_python_logo">
                                <v-img
                                    :src="pythonLogo"
                                    alt="python logo curso"
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
                        cols="12"
                        class="mt-5 text-center"
                    >
                        <h3
                            class="text-h6 font-weight-black"
                        >
                            ¡NO TE PIERDAS EL CURSO
                        </h3>

                        <h1 
                            class="text-h4 font-weight-black"
                        >
                            PROGRAMACIÓN DESDE CERO CON PYTHON!
                        </h1>

                        <div class="mt-5">
                            <v-btn
                                variant="tonal"
                                class="mx-5 my-3"
                            >
                                Ingresa ahora mismo
                            </v-btn>

                            <v-btn
                                variant="text"
                                class="mx-5 m-y3"
                            >
                                Más información
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>

                <div class="d-flex justify-center mt-8">
                    <Icons />
                </div>

            </v-container>
        </v-main>
    </video-background>
</template>

<style lang="scss">
    .home_python_logo{
        width: 150px;
        img{
            opacity: .5;
        }
    }

    @media screen and (min-width: 576px){
        .home_python_logo{
            width: 400px;
        }
    }
</style>