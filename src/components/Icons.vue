<script setup>
    const icons = [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
    ]
</script>

<template>
    <div class="d-flex ga-3">
        <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            density="comfortable"
            variant="text"
        ></v-btn>
    </div>
</template>