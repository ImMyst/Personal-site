<template>
  <main id="home">
    <h1 class="lg-heading animated fadeInUp">Titouan <span class="text-secondary">GALVANI</span></h1>
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

    </footer>
  </main>
</template>

<script>
</script>

<style lang="scss">
  main {
    padding: 4rem;
    min-height: calc(100vh - 100px);
  .icons {
    margin-top: 1rem;
    a {
      padding: 0.4rem;
      transition: .3s ease-out;
      &:hover {
        color: #47bb76;
      }
    }
  }
  &#home {
    overflow: hidden;
  }
}
</style>
