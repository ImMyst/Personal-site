<template>
  <div
    class="bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white w-full fixed bottom-0 font-bold h-20 shadow-navbar text-sm transition-all ease-in-out duration-300"
  >
    <ul class="flex justify-around items-center h-full">
      <li>
        <NuxtLink to="/"
          ><HomeIcon class="m-auto flex" />
          <span class="mt-2 block">home</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/about"
          ><AboutIcon class="m-auto flex" />
          <span class="mt-2 block">about</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/projects"
          ><ProjectIcon class="m-auto flex" />
          <span class="mt-2 block">projects</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/contact"
          ><ContactIcon class="m-auto flex" />
          <span class="mt-2 block">contact</span></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply text-primary;
}

li {
  @apply h-full w-full flex flex-col justify-center content-center hover:text-primary transition-colors ease-in duration-100;
}
</style>
