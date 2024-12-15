<script setup>
// perbedaan useRoute dan useRouter
// jika useRoute lbh ke bgmn kita mendptkan data yang dikirimkan seperti paramater id
// kalau useRouter lbh ke manipulasi adjust men dari route yang sedang kita buka
import { useRoute, useRouter ,RouterView } from 'vue-router';
import products from '../data/products.json'
const route = useRoute();
const router = useRouter();
// console.log('route : ', route);
// console.log('router : ', router);
const product = products.find((product) => product.id === parseInt(route.params.id));
function showOwner() {
    router.push({
        name: 'owner',
        params: {
            id:parseInt(route.params.id)
        }
    })
}
</script>
<template>
    <div v-if="product">
        <h1>Ini halaman Product</h1>
        <h2>{{ product.name }} - {{ product.price }}</h2>
        <p>Year : {{ product.year }}</p>
        <p>Owner : {{ product.owner }}</p>
        <p>Owner : {{ product.owner.name }}</p>
        <button @click="showOwner">Show Owner</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Product not found</h1>
    </div>

    
    <!-- fungsinya untuk children -->
</template>