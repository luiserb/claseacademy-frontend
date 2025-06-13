<script setup>
    const props = defineProps(['coursesList']);
</script>


<template>
    <section class="section">
        <v-row>
            <v-col
                v-for="(course, i) in props.coursesList"
                :key="i"
                xs="12"
                sm="6"
                lg="3"
            >
                <v-card
                    class="rounded-xl"
                    elevation="20"
                >
                    <v-img
                        :src="course.image"
                        alt="logo curso"
                        class="align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="180px"
                        cover
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

                        <v-card-title 
                            class="text-white" 
                            v-text="course.title"
                        ></v-card-title>
                    </v-img>

                    <v-card-text>
                        {{course.description}}
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="medium-emphasis"
                            icon="mdi-heart"
                            size="small"
                        ></v-btn>

                        <v-btn
                            color="medium-emphasis"
                            icon="mdi-bookmark"
                            size="small"
                        ></v-btn>

                        <v-btn
                            color="medium-emphasis"
                            icon="mdi-share-variant"
                            size="small"
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>