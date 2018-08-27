<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style>
</style>
