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
  }
  .btn {
    text-align: center;
  }
  .read-more {
    padding: 0.3rem;
    text-transform: uppercase;
    border: 2px solid #47bb76;
    transition: .3s;
    border-radius: 4px;
  }
  .read-more:hover {
    background-color: #47bb76;
    padding: 0.5rem;
    font-size: 17px !important;
  }
  .read-more:active {
    background-color: #50d78a;
  }
  .article-title {
    a {
      transition: .3s;
    }
    a:hover {
      font-size: 20px;
      box-shadow: inset 0 -2px 0 0 #47bb76;
    }
  }
}
</style>

