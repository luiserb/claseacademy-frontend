<script setup>
    import { ref } from 'vue';

    const time = ref(null);
    const menu2 = ref(false);
    const modal2 = ref(false);

    const props = defineProps(['showTitle']);
</script>

<template>
    <section class="section">
        <div 
            v-if="props.showTitle"
            class="text-center"
        >
            <h3
                class="text-h4"
            >
                Selecciona el curso que desea
            </h3>

            <div
                class="text-body-2 mt-3"
            >
                Completa este formulario, uno de nuestros expertos se comunicará con ustedes y de forma facil le ayudará a seleccionar el curso que ayudará a continuar  su crecimiento.
            </div>
        </div>
        
        <v-row
            class="pa-4 mt-2"
            justify="center"
        >
            <v-col
                xs="12"
                md="8"
                lg="6"
            >
                <div>
                    <v-row
                        justify="center"
                    >
                        <v-col
                            cols="12"
                            sm="12"
                            md="4"
                        >
                            <v-text-field
                                label="Nombre completo"
                                required
                                variant="underlined"
                                prepend-inner-icon="mdi-account"
                            ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="12"
                            md="4"
                        >
                            <v-text-field
                                label="Número de telefono"
                                required
                                variant="underlined"
                                prepend-inner-icon="mdi-phone"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="4"
                        >
                            <v-text-field
                                label="Correo electrónico"
                                required
                                variant="underlined"
                                prepend-inner-icon="mdi-at"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>

                <div>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                        >
                            <v-autocomplete
                                label="Selecciona un curso"
                                variant="underlined"
                                prepend-inner-icon="mdi-book"
                                :items="['Curso de Python', 'Curso de HTML', 'Curso de CSS', 'Curso de JavaScript', 'Curso de Vue']"
                            ></v-autocomplete>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                        >
                            <v-autocomplete
                                label="Selecciona una modalidad"
                                variant="underlined"
                                prepend-inner-icon="mdi-account"
                                :items="['Presencial', 'Semi-presencial', 'Remoto']"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </div>

                <div>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                        >
                            <v-date-input
                                label="Fecha"
                                variant="underlined"
                                persistent-placeholder
                            ></v-date-input>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                        >
                            <v-text-field
                                :active="menu2"
                                :focus="menu2"
                                label="Hora"
                                prepend-inner-icon="mdi-clock-time-four-outline"
                                variant="underlined"
                            >
                                <v-menu
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    activator="parent"
                                    transition="scale-transition"
                                >
                                    <v-time-picker
                                        v-if="menu2"
                                        v-model="time"
                                        full-width
                                    ></v-time-picker>
                                </v-menu>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </div>

                <div>
                    <v-textarea
                        label="Comentanos que buscas"
                        placeholder="Danos una breve descripción de lo que buscas"
                        counter
                        variant="underlined"
                        prepend-inner-icon="mdi-text-box-edit"
                    ></v-textarea>
                </div>
                
                <div class="text-center mt-4">
                    <v-btn
                        variant="tonal"
                    >
                        <span class="mr-2">Enviar</span>
                        <v-icon>mdi-send-variant</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </section>
</template>