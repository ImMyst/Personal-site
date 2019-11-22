<template>
  <div
    class="min-h-screen flex justify-center items-center text-center mx-auto"
  >
    <div class="block">
      <h1 class="text-gray-100 text-6xl font-semibold leading-none text-shadow">
        Titouan <span class="text-secondary-red">Galvani</span>
      </h1>
      <div class="text-gray-300 text-3xl mt-6 leading-snug pt-8">
        <p>
          Développeur web
        </p>
        <p>
          Front end
        </p>
      </div>
      <div class="pt-24">
        <nuxt-link to="/a-propos" class="inline-block py-1 border-solid border border-secondary-red rounded-full hover:bg-secondary-red">
          <span class="px-4 text-gray-100 uppercase text-2xl font-semibold">Qui suis-je ?</span>
        </nuxt-link>
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
