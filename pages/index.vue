<template>
  <section id="home" class="bg-img">
    <h1 class="lg-heading">Titouan <span class="text-secondary">GALVANI</span></h1>
    <h2 class="sm-heading">Développeur web en recherche d'alternance
      <br>
      Étudiant en 3<sup>ème</sup> année à Ynov Lyon
    </h2>
    <div class="icons">
      <a href="https://www.linkedin.com/in/titouan-galvani/" target="_blank">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/ImMyst" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.bg-img {
      background: url('~assets/img/home-image.jpg');
      background-attachment: fixed;
      background-size: cover;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
      }
  }

  #home {
    padding: 4rem;
    min-height: calc(100vh - 30px);
    z-index: 2;
    .lg-heading {
      margin-top: 10rem;
    }

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
  }

  #main-footer {
    opacity: 0.5;
  }

</style>
