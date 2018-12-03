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

<style lang="scss" scoped>
.articles {
  .blog-article {
    background: lighten(#444, 5);
    padding: 1.25rem 2.25rem;
    border-bottom: #47bb76 5px solid;
    margin-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
  .btn {
    text-align: center;
  }
  .read-more {
    padding: 0.5rem;
    text-transform: uppercase;
    border: 2px solid #47bb76;
    transition: .3s;
    border-radius: 4px;
  }
  .read-more:hover {
    background-color: #47bb76;
  }
  .read-more:active {
    background-color: #50d78a;
  }
  .article-title {
    font-family: 'Bitter', serif;
    font-size: 1.33rem;
    a {
      transition: .2s;
    }
    a:hover {
      box-shadow: inset 0 -2px 0 0 #47bb76;
    }
  }
  p {
    line-height: 1.7;
  }
}
</style>

