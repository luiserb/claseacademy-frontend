<script setup>
    import { RouterView } from 'vue-router';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Preloader from './components/Preloader.vue';
</script>

<template>
    <v-app>
        <Header />
        <router-view v-slot="{ Component }">
            <transition name="bounce" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <Footer />
        <Preloader />
    </v-app>
</template>

<style lang="scss">
    .section{
        padding: 4rem 0 2rem;
    }

    .bounce-enter-active {
        animation: bounce-in 0.6s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.6s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }
</style>