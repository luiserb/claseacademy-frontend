<script setup>
    import { ref, onMounted } from 'vue';
    import Icons from '@/components/Icons.vue';

    const preloader = ref(true);

    function showPreloader(){
        setTimeout(() => {
            preloader.value = false;
        }, 5000)
    }

    onMounted(() => {
        showPreloader();
    })
</script>

<template>
    <transition name="modal">
        <div 
            v-if="preloader"  
            class="modal-container"
        >
            <h1 class="text-white text-h2 mb-8">
                Clase Academy
            </h1>

            <v-progress-circular
                class="my-8"
                color="white"
                indeterminate
            ></v-progress-circular>

            <Icons 
                class="my-4"
            />
        </div>
    </transition>
</template>


<style lang="scss">
    .modal-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #0E100F;
        z-index: 99999999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        h3{
        position: absolute;
        bottom: 5%;
        }
    }

    .preloader-active{
        overflow: hidden !important;
    }

    .modal-enter-active, .modal-leave-active {
        transition: opacity 3s;
    }
    .modal-enter, .modal-leave-to {
        opacity: 0;
    }
</style>