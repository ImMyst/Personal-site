<template>
  <section id="blog">
    <h1 class="lg-heading">Mes <span class="text-secondary">Articles</span></h1>
    <h2 class="sm-heading">Mon ressenti sur mes expériences</h2>
    <div class="articles">
      <article class="blog-article">
        <h1 class="article-title">
          <nuxt-link to=""></nuxt-link> |
          <span class="text-secondary"></span>
        </h1>
        <span class="article-date"></span>
        <p class="article-summary"></p>
        <div class="btn">
          <nuxt-link to="" class="read-more">Lire plus</nuxt-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Titouan Galvani - Blog'
      }
    },
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories/blog', {
        version: 'draft',
        starts_with: 'blog/'
      })
      .then(res => {
          return {
            posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              summary: bp.content.summary
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
#blog {
  padding: 6rem 4rem 4rem 4rem;
  min-height: calc(100vh - 60px);
}
</style>

