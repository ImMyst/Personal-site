<template>
  <section id="contact">
    <h1 class="lg-heading">Me <span class="text-secondary">Contacter</span></h1>
    <h2 class="sm-heading">Comment me joindre ?</h2>
    <div class="boxes">
    <a href="mailto:titouan.galvani@ynov.com" target="_blank">
        <div>
            <span class="text-secondary">Email : </span>titouan.galvani@ynov.com
        </div>
    </a>
    <a href="tel:0760093884" target="_blank">
        <div>
            <span class="text-secondary">Téléphone : </span>07.60.08.38.84
        </div>
    </a>
    <div>
        <span class="text-secondary">Adresse : </span>69560 ─ Saint-Romain-en-Gal
    </div>
    </div>
    <div class="boxes-icons">
        <a href="https://www.linkedin.com/in/titouan-galvani/" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/ImMyst" target="_blank">
            <i class="fab fa-github fa-2x"></i>
        </a>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22356.032703886656!2d4.813180345705363!3d45.54018416251058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e0816d93ef2b%3A0x408ab2ae4bb1b10!2s69560+Saint-Romain-en-Gal!5e0!3m2!1sfr!2sfr!4v1534196879190"
        width="1000" height="450" frameborder="0" allowfullscreen></iframe>
  </section>
</template>

<style lang="scss" scoped>
#contact {
  padding: 6rem 4rem 4rem 4rem;
  min-height: calc(100vh - 60px);
    .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    div {
      font-size: 1.25rem;
      border: 2px solid #fff;
      padding: 1.5rem 2.5rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      transition: .3s;
      &:hover {
        padding: 0.5rem 1.5rem;
        background: #47bb76;
        color: #fff;
        span {
          color: #fff;
        }
      }
    }
  }

  .boxes-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    a {
      font-size: 1.25rem;
      border: 2px solid #fff;
      padding: 1.5rem 1.5rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      transition: .3s;
      &:hover {
        padding: .5rem .5rem;
        background: #47bb76;
      }
    }
  }

  iframe {
    display: block;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #47bb76;
  }
}
</style>
