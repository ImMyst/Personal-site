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
}
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
  background: #444;
  color: #fff;
  line-height: 1.5;
  font-family: 'Noto Sans', sans-serif;
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
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  }
  &.sm-heading {
    width: 30%;
    margin-bottom: 2rem;
    margin: 0;
    padding: .2rem 1rem;
    background: #494949;
    border-radius: 4px;
    font-weight: 400;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);


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
