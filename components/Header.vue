<template>
  <div class="fixed w-full">
    <div class="flex justify-between px-5 pt-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><defs><linearGradient id="a" x1=".249" y1=".095" x2=".731" y2=".733" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#355c7d" /><stop offset="1" stop-color="#6c5b7b" /></linearGradient></defs><path data-name="Tracé 1" d="M24 0A24 24 0 110 24 24 24 0 0124 0z" fill="url(#a)" /><g data-name="Tracé 2" fill="none"><path d="M24 0A24 24 0 110 24 24 24 0 0124 0z" /><path d="M24 1A22.924 22.924 0 007.737 7.737 22.925 22.925 0 001 24a22.925 22.925 0 006.737 16.263A22.925 22.925 0 0024 47c3.13 0 6.164-.615 9.021-1.827a22.344 22.344 0 007.237-4.904 23.516 23.516 0 004.955-7.386A22.742 22.742 0 0047 24a22.925 22.925 0 00-6.737-16.263A22.925 22.925 0 0024 1m0-1c13.255 0 24 10.745 24 24 0 6.561-2.633 12.507-7.03 16.97C36.748 45.26 30.695 48 24 48 10.745 48 0 37.255 0 24S10.745 0 24 0z" fill="#6c5b7b" /></g><text transform="translate(11.5 31.286)" fill="#edf2f7" font-size="20" font-family="Quicksand-Medium, Quicksand" font-weight="500"><tspan x="0" y="0">TG</tspan></text></svg>
      <button @click="isMenuOpen = !isMenuOpen" class="block px-1 focus:outline-none text-gray-400 hover:text-white" type="button">
        <svg class="fill-current" v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="28.611" height="20.103" viewBox="0 0 28.611 20.103">
          <path id="svg_menu" d="M4.589,5H30.021a1.519,1.519,0,0,1,1.589,1.436,1.519,1.519,0,0,1-1.589,1.436H4.589A1.519,1.519,0,0,1,3,6.436,1.519,1.519,0,0,1,4.589,5Zm0,8.616H24.1a1.553,1.553,0,0,1,1.626,1.436A1.553,1.553,0,0,1,24.1,16.487H4.589A1.519,1.519,0,0,1,3,15.051,1.519,1.519,0,0,1,4.589,13.616Zm0,8.616H27.075A1.646,1.646,0,0,1,28.8,23.667,1.646,1.646,0,0,1,27.075,25.1H4.589a1.443,1.443,0,1,1,0-2.872Z" transform="translate(-3 -5)" />
        </svg>
        <svg class="fill-current h-10 w-10" v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
      </button>
    </div>
    <div class="gradient-background fixed w-full">
      <ul v-if="isMenuOpen" class="min-h-screen flex flex-col justify-center items-center text-center mx-auto text-gray-100 font-semibold text-4xl">
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
export default {
  data () {
    return {
      headerLinks: [
        {
          name: 'accueil',
          link: '/'
        },
        {
          name: 'a propos',
          link: '/a-propos'
        },
        {
          name: 'projets',
          link: '/projets'
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
