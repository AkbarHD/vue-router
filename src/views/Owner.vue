<script setup>
import products from '../data/products.json'
import { useRoute } from 'vue-router';
const route = useRoute();
const { owner } = products.find((product) => product.id === parseInt(route.params.id));

</script>

<template>
    <h1>Owner</h1>
        {{ owner.name }}
        {{ owner.email }}
</template>