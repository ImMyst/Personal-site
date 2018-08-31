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
    <h2 class="sm-heading">Envoyer un message</h2>
    <h3>Une idée, un conseil, une offre ... ?</h3>
    <form name="contact" method="POST" netlify>
      <div class="name field">
          <input name="nom" type="text" placeholder="Nom complet *" required>
      </div>
      <div class="mail field">
          <input name="email" type="email" placeholder="E-mail *" required>
      </div>
      <div class="phone field">
          <input name="telephone" type="tel" placeholder="Téléphone *" required>
      </div>
      <div class="message field">
          <textarea name="message" cols="30" rows="10" placeholder="Votre message"></textarea>
      </div>
      <div class="submit field">
          <input type="submit" value="Envoyer">
      </div>
    </form>
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
  h3 {
    margin-top: .5rem;
    margin-bottom: 2rem;
  }
  form {
    text-align: center;
    input,
    textarea {
      width: 35%;
    }
  }
}
</style>
