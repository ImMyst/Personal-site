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
      <a href="https://www.google.com/maps/place/69560+Saint-Romain-en-Gal/@45.5401842,4.8131803,14z/data=!3m1!4b1!4m5!3m4!1s0x47f4e0816d93ef2b:0x408ab2ae4bb1b10!8m2!3d45.532569!4d4.862609"
        target="_blank">
        <div>
          <span class="text-secondary">Adresse : </span>69560 ─ Saint-Romain-en-Gal
        </div>
      </a>
    </div>
    <div class="boxes-icons">
      <a href="https://www.linkedin.com/in/titouan-galvani/" target="_blank">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/ImMyst" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
    <h2 class="sm-heading">Une idée, un conseil, une offre ... ?</h2>
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
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

<script>
  export default {
    head() {
      return {
        title: 'Titouan Galvani - Contact'
      }
    }
  }

</script>

<style lang="scss" scoped>
  #contact {
    padding: 6rem 4rem 4rem 4rem;
    min-height: calc(100vh - 60px);

    .sm-heading {
      margin-bottom: 2rem;
    }

    .boxes {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;

      div {
        font-size: 1.25rem;
        border: 2px solid #fff;
        border-radius: 4px;
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
      margin-bottom: 2rem;

      a {
        font-size: 1.25rem;
        border: 2px solid #fff;
        border-radius: 4px;
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

    form {
      margin-top: 2rem;
      text-align: center;

      input,
      textarea {
        background-color: #727171;
        font-size: 1rem;
        color: white;
        border: 0.5px solid white;
        border-radius: 4px;
        width: 50%;
        padding: .75rem;
        margin-top: 5px;
        font-family: inherit;
        outline-color: #47bb76;
        caret-color: #47bb76;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px #585858 inset;
        -webkit-text-fill-color: #fff;

      }

      input[type=submit] {
        text-transform: uppercase;
        font-size: 1.25rem;
        color: lighten(#47bb76, 3);
        font-weight: 600;
        cursor: pointer;
        transition: .3s;

        &:hover {
          background-color: lighten(#47bb76, 3);
          color: #fff;
        }
      }

      ::placeholder {
        color: #47bb76;
        opacity: 1;
      }
    }
  }

</style>
