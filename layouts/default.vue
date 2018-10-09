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
  },
  transition: 'bounce'

};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  &::selection {
    background-color: #a4ddbb;
  }
}

html, body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #444;
  color: #fff;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

section {
  height: 100%;
}

// Headings
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  &.lg-heading {
    font-family: 'Imprima', sans-serif;
    font-size: 4.5rem;
    margin: 0;
  }
  &.sm-heading {
    margin-bottom: 2rem;
    margin: 0;
    padding: .2rem 1rem;
    background: #494949;
    border-radius: 4px;
  }
}

// Links
a {
  color: white;
  text-decoration: none;
}


.text-secondary {
  color: #47bb76;
}
</style>
