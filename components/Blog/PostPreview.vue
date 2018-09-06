<template>
  <div class="articles">
    <article class="blog-article">
      <h1 class="article-title">
        <nuxt-link :to="id">{{ title }}</nuxt-link> |
        <span class="text-secondary"></span>
      </h1>
      <span class="article-date"></span>
      <p class="article-summary">{{ summary }}</p>
      <div class="btn">
        <nuxt-link :to="id" class="read-more">Lire plus</nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>
