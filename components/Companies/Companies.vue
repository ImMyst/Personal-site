<template>
  <div class="company">
    <div class="content">
      <h2>{{ company }}</h2>
      <a :href="link" target="_blank" class="content__link">
        <img :src="logo" :alt="company" width="160" height="120">
      </a>
      <h3>{{ description }}</h3>
      <span>{{ location }}</span>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    content: {
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
.company {
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  align-items: stretch;
  padding: 1.5rem 2.5rem;

  .content {
    padding: 1.25rem 2rem;
    margin-right: 1.5rem;
    background: lighten(#444, 5);
    border-bottom: #47bb76 5px solid;
    margin-bottom: 1rem;
    border-radius: 4px;

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
</style>

