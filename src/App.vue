<script setup>
// import AboutView from './views/About.vue';
// import HomeView from './views/Home.vue';
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
import { ref } from 'vue';

    const count = ref(0)
</script>

<template>
  <div>
    <main>
      <Nav/>
         <button @click="count++">Count is : {{ count }}</button>
    </main>
  </div>
  <RouterView />
</template>

