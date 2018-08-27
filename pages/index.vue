<template>
  <section id="home">
    <h1 class="lg-heading animated fadeInUp">Titouan <span class="text-secondary">Galvani</span></h1>
    <h2 class="sm-heading animated fadeInUp">Développeur web
      <br>
      Étudiant en 3<sup>ème</sup> année à Ynov Lyon
    </h2>
    <div class="icons animated fadeInUp">
      <a href="https://www.linkedin.com/in/titouan-galvani/" target="_blank">
          <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/ImMyst" target="_blank">
          <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
    <footer id="home-footer">
      <span>Fait avec
          <i class="fas fa-heart"></i> par Titouan GALVANI ─
          <a href="https://github.com/ImMyst/Portfolio" class="text-secondary" target="_blank">Code</a>
      </span>
    </footer>
    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/Footer/Footer";

export default {
  components: {
    Footer: Footer
  }
};
</script>

<style lang="scss">
#main-footer {
  display: none;
}
</style>
