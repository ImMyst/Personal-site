<template>
  <div class="fixed bottom-0 md:top-0 md:bottom-auto w-full text-text md:shadow-2xl md:background">
    <div class="flex md:py-8 md:justify-start md:ml-24 lg:ml-32 xl:ml-64">
      <!-- MOBILE -->
      <!-- Menu si mobile -->
      <ul class="md:hidden w-full justify-around bg-dark-light shadow-2xl flex text-text font-semibold">
        <li v-for="menu in menuItems" :key="menu.name" class="flex flex-col">
          <NuxtLink :to="`${menu.link}`" class="cursor-pointer py-3 transition duration-200 active:text-primary">
            <IconHome v-if="menu.icon === 'home'" class="w-6 mx-auto" />
            <IconCode v-else-if="menu.icon === 'code'" class="w-6 mx-auto" />
            <IconAbout v-else-if="menu.icon === 'about'" class="w-6 mx-auto" />
            <IconContact v-else-if="menu.icon === 'contact'" class="w-6 mx-auto" />
            <span class="truncate">
              {{ menu.name }}
            </span>
          </NuxtLink>
        </li>
      </ul>
      <!-- LARGE SCREEN -->
      <ul class="hidden md:flex text-text font-semibold text-2xl space-x-6 lg:space-x-8 xl:space-x-12">
        <!-- Liste Menu Large -->
        <li v-for="menu in menuItems" :key="menu.name">
          <NuxtLink class="cursor-pointer block transition duration-200 hover:text-primary active:text-opacity-75" :to="`${menu.link}`">
            {{ menu.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          name: 'accueil',
          link: '/',
          icon: 'home'
        },
        {
          name: 'projets',
          link: '/projects',
          icon: 'code'
        },
        {
          name: 'a propos',
          link: '/about',
          icon: 'about'
        },
        {
          name: 'contact',
          link: '/contact',
          icon: 'contact'
        }
      ]
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  @apply text-primary;
}
</style>
