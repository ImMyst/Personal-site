<template>
  <div class="fixed top-0 w-full">
    <div class="flex justify-between px-5 pt-4">
      <nuxt-link class="focus:outline-none focus:shadow-outline" to="/">
        <Logo />
      </nuxt-link>
      <button class="block px-1 focus:outline-none text-gray-400 hover:text-white" type="button" @click="$store.commit('toggleMenu')">
        <BurgerMenu v-if="!$store.state.isMenuOpen" />
        <Close v-else />
      </button>
    </div>
    <div class="gradient-background fixed w-full" :class="$store.state.isMenuOpen ? 'h-screen' : ''">
      <ul v-if="$store.state.isMenuOpen" class="min-h-screen flex flex-col justify-center items-center text-center mx-auto text-gray-100 font-semibold text-4xl">
        <li v-for="menu in headerLinks" :key="menu.name">
          <nuxt-link class="hover:text-secondary-red focus:text-secondary-red focus:outline-none focus:shadow-outline cursor-pointer p-6 inline-block" :to="`${menu.link}`">
            {{ menu.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/icons/Logo'
import BurgerMenu from '~/components/icons/BurgerMenu'
import Close from '~/components/icons/Close'
export default {
  components: {
    Logo,
    BurgerMenu,
    Close
  },
  data () {
    return {
      headerLinks: [
        {
          name: 'accueil',
          link: '/'
        },
        {
          name: 'a propos',
          link: '/about'
        },
        {
          name: 'projets',
          link: '/projects'
        },
        {
          name: 'contact',
          link: '/contact'
        }
      ],
      isMenuOpen: false
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  color: #F67280
}
</style>
