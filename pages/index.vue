<template>
  <div class="mx-auto">
    <div class="flex flex-col justify-start items-center text-center my-16 mb-32 h-full mx-8 md:justify-center md:ml-20 md:items-start md:h-screen md:my-0 md:text-left lg:ml-32 xl:ml-64">
      <img
        src="/img/titouan-image.jpg"
        alt="Titouan Galvani image"
        class="md:hidden rounded-full border-2 border-solid border-primary w-24 mb-10"
      >
      <!-- Titre -->
      <h1 class="text-primary text-7xl font-extrabold font-calibre leading-none md:text-8xl md:leading-none">
        Titouan Galvani.
      </h1>
      <!-- Description -->
      <h2 class="text-accent text-5xl font-calibre-medium leading-none mt-8 md:text-6xl md:mt-2 lg:text-7xl">
        Développeur front end.
      </h2>
      <!-- Body et longue description -->
      <p class="text-text text-lg mt-6 font-calibre md:w-full md:text-xl lg:w-3/4 xl:w-3/5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam natus nesciunt aut omnis amet rerum nostrum odio nulla. Sit nobis facere a, cumque voluptatum ab facilis? Natus, rem eaque. Temporibus facere, soluta cumque quas voluptas voluptate aspernatur, qui earum quibusdam reiciendis veritatis natus nostrum voluptatem officia, unde autem aliquid hic inventore ducimus pariatur consectetur.
      </p>
      <!-- Bouton Call To Action -->
      <div class="mt-10">
        <NuxtLink to="/contact" class="button button--primary">
          Me Contacter
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Titouan Galvani | Accueil'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Hi I\'m currently rebuilding this website, which is my personal one. Wait a little and it will be finished. (I hope before christmas)'
        }
      ]
    }
  }
}
</script>
