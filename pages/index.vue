<template>
  <div
    class="min-h-screen flex justify-center items-center text-center mx-auto"
  >
    <div class="block">
      <h1 class="text-gray-100 text-6xl font-semibold text-shadow">
        Titouan <span class="text-secondary-red">Galvani</span>
      </h1>
      <span class="text-gray-300 text-3xl">
        Currently rebuilding my personal website
      </span>
      <span
        class="block m-auto rounded-full bg-yellow-200 text-yellow-600 font-semibold text-xl mt-4 w-56"
      >
        WORK IN PROGRESS
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Titouan Galvani - Currently rebuilding my personal website'
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
            "Hi I'm currently rebuilding this website, which is my personal one. Wait a little and it will be finished. (I hope before christmas)"
        }
      ]
    }
  }
}
</script>
