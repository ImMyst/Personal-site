<template>
  <section id="blog">
    <h1 class="lg-heading">Mes <span class="text-secondary">Articles</span></h1>
    <h2 class="sm-heading">Mon ressenti sur mes expériences</h2>
    <PostPreview
    v-for="post in posts" :key="post.id" :title= "post.title" :summary = "post.summary" :id= "post.id"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview"
  export default {
    components: {
      PostPreview
    },
    head() {
      return {
        title: 'Titouan Galvani - Blog'
      }
    },
    data() {
      return {
        posts: [{
          title: "La découverte de l'environnement de travail de PSM Numerik's",
          summary: "Cette première semaine était consacrée à mon intégration dans l’entreprise PSM Numerik’s à Vienne. La première journée, j’ai plus pris connaissance des éléments qui allaient m’entourer pendant ces six semaines et j’ai fait la connaissance de trois employés ...",
          id: 'decouverte-psm-numeriks'
        },
        {
          title: "L' apprentissage de JARVIS et premiers contact clients chez PSM Numerik's",
          summary: "Cette semaine commence sans la présence de Médilane,qui est parti en vacances, ne pourra donc pas s’occuper de réparations d’ordinateurs portables et fixes. Comme j’ai appris à faire une installation complète de Windows et une préparation de l’ordinateur (installations de logiciels ...",
          id: 'apprentissage-jarvis-psm-numeriks'
        }
      ]
     }
    }
    // asyncData(context) {
    //   return context.app.$storyapi.get('cdn/stories/blog', {
    //     version: 'draft',
    //     starts_with: 'blog/'
    //   })
    //   .then(res => {
    //       return {
    //         posts: res.data.stories.map(bp => {
    //         return {
    //           id: bp.slug,
    //           title: bp.content.title,
    //           summary: bp.content.summary
    //         }
    //       })
    //     }
    //   })
    // }
  }

</script>

<style lang="scss" scoped>
  #blog {
    padding: 6rem 4rem 4rem 4rem;
    min-height: calc(100vh - 60px);
    .sm-heading {
      margin-bottom: 2rem;
    }
  }

</style>
