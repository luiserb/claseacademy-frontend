<script setup>
    import Landing from '@/components/Views/Home/Landing.vue';
    import Courses from '@/components/Views/Home/Courses.vue';
    import Areas from '@/components/Views/Home/Areas.vue';
    import Mode from '@/components/Views/Home/Mode.vue';
    import Subscription from '@/components/Views/Home/Subscription.vue';
    import Collaborators from '@/components/Views/Home/Collaborators.vue';
    import Form from '@/components/Views/Home/Form.vue';
</script>


<template>
    <div>
        <Landing />
        <v-main 
            class="text-white py-9 px-3"
        >
            <v-container>
                <Courses />
                <Areas />
                <Mode />
                <Subscription />
                <Collaborators />
                <Form :showTitle="true"/>
            </v-container>
        </v-main>
    </div>
</template>