<template>
  <div class="h-screen flex justify-center items-center text-center mx-auto">
    <div class="block">
      <div class="flex justify-center">
        <img
          src="/img/titouan-image.jpg"
          alt="Titouan Galvani image"
          class="rounded-full border-2 border-solid border-accent-purple w-40"
        />
      </div>
      <h1
        class="text-gray-100 text-6xl font-semibold leading-none text-shadow pt-16"
      >
        Titouan <span class="text-secondary-red">Galvani</span>
      </h1>
      <div class="text-gray-300 text-3xl leading-snug pt-8 mt-6">
        <p>
          Développeur web
        </p>
        <p>
          Front end
        </p>
      </div>
      <div class="pt-12">
        <nuxt-link
          to="/about"
          class="inline-block border border-solid border-secondary-red rounded-full py-1 hover:bg-secondary-red"
        >
          <span class="text-gray-100 uppercase text-2xl font-semibold px-4"
            >Qui suis-je ?</span
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Titouan Galvani | Accueil'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Hi I'm currently rebuilding this website, which is my personal one. Wait a little and it will be finished. (I hope before christmas)"
        }
      ]
    }
  }
}
</script>
