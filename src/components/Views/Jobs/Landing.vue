<script setup>
    import videoJob from '@/assets/videos/video_jobs.mp4';
    import Form from '@/components/Views/Jobs/Form.vue';
</script>

<template>
    <video-background
        :src="videoJob"
        overlay="linear-gradient(0deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .6))" 
        class="text-white jobs_landing"
    >
        <v-main>
            <v-container
                class="mt-4"
            >
                <Form />
            </v-container>
        </v-main>
    </video-background>
</template>


<style lang="scss">
    .jobs_landing{
        height: 1250px;
    }
    @media screen and (min-width: 1024px){
        .jobs_landing{
            height: 100vh;
        }   
    }
</style>