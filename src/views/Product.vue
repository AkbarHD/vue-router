<script setup>
// perbedaan useRoute dan useRouter
// jika useRoute lbh ke bgmn kita mendptkan data yang dikirimkan seperti paramater id
// kalau useRouter lbh ke manipulasi adjust men dari route yang sedang kita buka
import { useRoute, useRouter ,RouterView } from 'vue-router';
import products from '../data/products.json'
const route = useRoute();
const router = useRouter();
// console.log(route);
// console.log(router);
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
    <div>
        <h1>Ini halaman Product</h1>
        <h2>{{ product.name }} - {{ product.price }}</h2>
        <p>Year : {{ product.year }}</p>
    </div>

    <button @click="showOwner">Show Owner</button>
    <!-- fungsinya untuk children -->
    <RouterView />
</template>