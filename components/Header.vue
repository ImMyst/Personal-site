<template>
  <div class="fixed top-0 h-16 w-full bg-primary-blue bottom-shadow">
    <div class="flex h-full justify-between px-5 items-center">
      <nuxt-link class="focus:outline-none focus:shadow-outline" to="/">
        <Logo />
      </nuxt-link>
      <button class="block px-1 focus:outline-none text-gray-400 hover:text-white z-10" type="button" @click="$store.commit('toggleMenu')">
        <BurgerMenu v-if="!$store.state.isMenuOpen" />
        <Close v-else />
      </button>
    </div>
    <div class="gradient-background fixed w-full">
      <div v-if="$store.state.isMenuOpen" class="min-h-screen flex flex-col justify-center items-center text-center mx-auto -mt-16">
        <ul class="text-gray-100 font-semibold text-4xl">
          <li v-for="menu in headerLinks" :key="menu.name">
            <nuxt-link class="hover:text-secondary-red focus:text-secondary-red focus:outline-none focus:shadow-outline cursor-pointer p-6 inline-block" :to="`${menu.link}`" @click.native="$store.commit('toggleMenu')">
              {{ menu.name }}
            </nuxt-link>
          </li>
        </ul>
        <div class="mt-10 text-gray-400 text-2xl">
          <span class="cursor-pointer hover:text-gray-200">FR</span>
          |
          <span class="cursor-pointer hover:text-gray-200">EN</span>
        </div>
        <div class="fixed bottom-0 mb-6 text-gray-200">
          <div>
            &copy; 2020 Titouan Galvani.
          </div>
          <div>Tous droits réservés.</div>
        </div>
      </div>
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
.bottom-shadow {
  -webkit-box-shadow: 0 -6px 20px rgba(0,0,0,0.15);
  -moz-box-shadow: 0 -6px 20px rgba(0,0,0,0.15);
    box-shadow: -6px 0 20px rgba(0,0,0,0.15)
}
.nuxt-link-exact-active {
  color: #F67280
}
</style>
