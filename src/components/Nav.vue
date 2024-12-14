<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </main>
</template>

<style scoped>
    main{
        display: flex;
        gap: 10px;
        color: white !important;
    }

    .active{
        font-weight: 900;
        text-decoration: none;
        padding: 5px 10px;
        color: white !important;
        background-color: red;
        border-radius: 5px;
    }
</style>