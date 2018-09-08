<template>
  <section id="companies">
    <h1 class="lg-heading">Les <span class="text-secondary">Entreprises</span></h1>
    <h2 class="sm-heading">Les entreprises dans lesquelles j'ai travaillé</h2>
    <div class="companies">
      <div class="company">

        <div class="webqam">
          <h2></h2>
          <a href="https://www.webqam.fr/" target="_blank" class="webqam__link">
            <img src="~assets/img/logo-webqam.png" alt="Webqam" width="160" height="120">
          </a>
          <h3></h3>
          <span></span>
          <p></p>
        </div>

        <div class="psm">
          <h2>PSM Numeriks</h2>
          <a href="http://www.numeriks.fr" target="_blank" class="psm__link">
            <img src="~assets/img/logo-psm.png" alt="PSM" width="160" height="120">
          </a>
          <h3></h3>
          <span></span>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Titouan Galvani - Entreprises'
      }
    },
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories/companies', {
        version: 'draft',
        starts_with: 'companies/'
      })
      .then(res => {
          return {
            companies: res.data.stories.map(cp => {
            return {
              id: cp.slug,
              company: cp.content.company,
              logo: cp.content.logo,
              description: cp.content.description,
              location: cp.content.location,
              content: cp.content.content
            }
          })
        }
      })
    }
  }

</script>

<style lang="scss" scoped>
#companies {
  padding: 6rem 4rem 4rem 4rem;
  min-height: calc(100vh - 60px);
  .sm-heading {
    margin-bottom: 2rem;
  }

  .company {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    align-items: stretch;
    padding: 1.5rem 2.5rem;

    .psm,
    .webqam {
      padding: 1.25rem 2rem;
      margin-right: 1.5rem;
      background: lighten(#444, 5);
      border-bottom: #47bb76 5px solid;
      margin-bottom: 1rem;

      &__link {
        overflow: hidden;
        display: inline-block;
        border: 3px solid #47bb76;
        border-radius: 50%;
        background-color: lighten(#444, 10);
        transform: scale(0.6);

        :hover {
          transform: scale(0.7);
        }

        img {
          border: none;
          transition: 0.2s ease-out;
        }
      }
    }

    p {
      text-align: justify;
    }
  }
}
</style>
