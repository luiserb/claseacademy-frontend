<script setup>
    import Icons from '@/components/Icons.vue';

    const footerLinks = [
        {
            "title": "Acerda de la empresa",
            "links": [
                "¿Quienes somos?",
                "El equipo",
                "Los profesores",
            ]
        },
        {
            "title": "Conecta con Clase Academy",
            "links": [
                "Soporte al cliente",
                "Politica de privacidad",
                "Terminos y condiciones",
                "Politica de reembolsos",
                "Servicios para colegios y universidades"
            ]
        },
        {
            "title": "Nuestros productos",
            "links": [
                "Servicios para empresas",
                "Canjea cupones",
                "Regala cursos",
                "Sube a premium"
            ]
        },
        {
            "title": "Recursos gratis",
            "links": [
                "Cursos gratis",
                "Blog",
                "Conferencias",
                "Comunidad"
            ]
        }
    ]
</script>


<template>
    <v-footer 
        class="text-center d-flex flex-column ga-2 py-4" 
        color="primary"
    >
        <v-row
            class="text-center my-4"
            justify="center"
        >
            <v-col
                v-for="(link, i) in footerLinks"
                :key="i"
                cols="12"
                sm="3"
            >
                <v-list
                    bg-color="primary"
                >
                    <div
                        class="text-center"
                    >
                        {{link.title}}
                    </div>

                    <v-list-item
                        v-for="(item, j) in link.links"
                        :key="j"
                        variant="plain"
                    >
                        <v-list-item-subtitle
                            class="text-center"
                            v-text="item"
                        ></v-list-item-subtitle>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>

        <Icons />

        <div class="my-6">
            {{ new Date().getFullYear() }} — <strong>Clase Academy</strong>
        </div>

    </v-footer>
</template>