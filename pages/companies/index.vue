<template>
  <section id="companies">
    <h1 class="lg-heading">Les <span class="text-secondary">Entreprises</span></h1>
    <h2 class="sm-heading">Les entreprises dans lesquelles j'ai travaillé</h2>
    <div class="companies">
      <Companies
      v-for= "company in companies"
      :key= "company.id"
      :company= "company.company"
      :logo= "company.logo"
      :link= "company.link"
      :summary= "company.summary"
      :location= "company.location"
      :content= "company.content"
      :id= "company.id"
       />
    </div>
  </section>
</template>

<script>
  import Companies from "@/components/Companies/Companies"
  export default {
    components: {
      Companies
    },
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
}
</style>
