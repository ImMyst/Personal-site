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

<style lang="scss">
* {
  box-sizing: border-box;
  &::selection {
    background-color: #a4ddbb;
  }
}

body {
  margin: 0;
  padding: 0;
  background-color: #444;
  color: #fff;
  line-height: 1.5;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  section {
    padding: 4rem;
  }
}

.lg-heading {
  font-family: 'Imprima', sans-serif;
  font-size: 4.5rem;
  margin: 0;
}

.sm-heading {
  margin-bottom: 2rem;
  margin: 0;
  padding: .2rem 1rem;
  background: #494949;
}

.text-secondary {
  color: #47bb76;
}

a {
  color: #fff;
}
</style>
