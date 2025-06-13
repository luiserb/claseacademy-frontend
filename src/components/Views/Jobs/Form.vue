<template>
    <section class="section">
        <div 
            class="text-center"
        >
            <h3
                class="text-h4"
            >
                ¡Trabaja con nosotros!
            </h3>

            <div
                class="text-body-2 mt-3"
            >
                ¿Te apasiona enseñar y quieres compartir tu conocimiento con el mundo? Nuestro sistema educativo web te ofrece la plataforma perfecta para conectar con estudiantes globalmente.
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
                                label="Indica tu área de especialidad docente"
                                variant="underlined"
                                prepend-inner-icon="mdi-book"
                                :items="['Profesor(a)', 'Ingeniero(a)', 'Técnico(a)']"
                            ></v-autocomplete>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                        >
                            <v-autocomplete
                                label="Seleccione su área"
                                variant="underlined"
                                prepend-inner-icon="mdi-account"
                                :items="['Matemática', 'Desarrollo de sistemas', 'Literatura', 'Filosofía', 'Administración', 'Contaduría', 'Idiomas', 'Educación general']"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </div>

                <div>
                    <v-textarea
                        label="Comentanos un poco sobre tí"
                        placeholder="Danos una breve descripción de tu persona y experiencia laboral"
                        counter
                        variant="underlined"
                        prepend-inner-icon="mdi-text-box-edit"
                    ></v-textarea>
                </div>

                <div>
                    <v-textarea
                        label="Comentanos un poco sobre tí"
                        placeholder="Danos una breve descripción de tu persona y experiencia laboral"
                        counter
                        variant="underlined"
                        prepend-inner-icon="mdi-text-box-edit"
                    ></v-textarea>
                </div>

                <div>
                     <v-file-input
                        label="CV"
                        show-size
                        variant="underlined"
                    ></v-file-input>
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