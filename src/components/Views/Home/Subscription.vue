<script setup>
    const subscriptionList = [
        {
            "title": "Cursos Gratis",
            "price": "0",
            "access": [
                "Accesso a la plataforma",
                "Profesor asignado",
                "Curso básico",
                "Materiales digitales"
            ]
        },
        {
            "title": "Becas Parciales",
            "price": "50",
            "access": [
                "Accesso a la plataforma",
                "Profesor asignado",
                "Tutor asignado",
                "Curso avanzado",
                "Materiales digitales",
                "Materiales impresos",
                "Certificado de participación"
            ]
        },
        {
            "title": "Curso de Pago",
            "price": "100",
            "access": [
                "Accesso a la plataforma",
                "Profesor asignado",
                "Tutor asignado",
                "Curso avanzado",
                "Materiales digitales",
                "Materiales impresos",
                "Uso de herramientas",
                "Certificado de aprobación"
            ]
        }
    ]
</script>

<template>
    <section class="section">
        <div class="text-center">
            <h3
                class="text-h4"
            >
                Planes de estudio
            </h3>

            <div
                class="text-body-2 mt-3"
            >
                Además de las modalidades de clase, contamos con diferente forma de pagos para nuestros cursos, para que no te quedes fuera, pensamos siempre en ti.
            </div>
        </div>

        <v-row
            class="mt-5"
            justify="center"
        >
            <v-col
                v-for="(subscription, i) in subscriptionList"
                :key="i"
                xs="12"
                sm="7"
                md="3"
                lg="2"
            >
                <v-card
                    class="pa-4 rounded-xl text-center mx-3"
                    elevation="20"
                >
                    <v-card-title>
                        {{subscription.title}}
                    </v-card-title>
                    <span
                        class="text-h4 my-3"
                    >
                        ${{ subscription.price }}
                    </span>
                    <div class="pa-3">
                        <div
                            v-for="(access, i) in subscription.access"
                            :key="i"
                        >
                            <v-divider inset></v-divider>
                            <div
                                class="my-2 text-body-2"
                            >
                                {{access}}
                            </div>
                        </div>
                    </div>

                    <v-btn
                        class="mt-3 rounded-xl"
                        variant="tonal"
                    >
                        Solicitar
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>