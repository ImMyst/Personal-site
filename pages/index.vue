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
      <span>Fait avec
          <i class="fas fa-heart"></i> par Titouan GALVANI ─
          <a href="https://github.com/ImMyst/Portfolio" class="text-secondary" target="_blank">Code</a>
      </span>
    </footer>
    <Footer />
  </main>
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
  main {
    padding: 4rem;
    min-height: 100%;
    margin-top: -80px;
    margin-bottom: -50px;
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
    h1 {
      margin-top: 20vh;
    }
  }
}
#home-footer {
  text-align: center;
  padding: 1rem;
  height: 60px;
  span {
    background-color: #494949;
    font-weight: 400;
    i {
      color: crimson;
    }
    a {
      font-weight: 700;
      text-decoration: none;
      -webkit-box-shadow: inset 0 -2px #47bb76;
              box-shadow: inset 0 -2px #47bb76;
      transition: .3s ease-out;
      &:hover {
        background-color: #47bb76;
        color: #000;
      }
    }
  }
}
#main-footer {
  display: none;
}
</style>
