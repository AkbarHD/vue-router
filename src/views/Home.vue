<script setup>
    import { RouterLink } from 'vue-router';
    import products from '../data/products.json'
</script>

<template>
    <div>   
        <h1>Ini halaman Home</h1>
        <div class="products">
            <RouterLink v-for="product in products" :key="product.id" :to="`/products/${product.id}`">
                {{ product.name }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .products{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        padding: 1rem;
        text-decoration: none;
    }
</style>