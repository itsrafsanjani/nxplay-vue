<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<style>
</style>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {Footer, Header}
}
</script>