<template>
  <div class="fixed bottom-0 h-16 w-full gradient-background top-shadow" :class="$store.state.isMenuOpen ? 'hidden' : ''">
    <div class="flex h-full items-center justify-around text-gray-100">
      <a href="https://github.com/ImMyst" target="_blank" class="p-4 hover:fill-current hover:text-secondary-red">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/titouan-galvani/" target="_blank" class="p-4 hover:fill-current hover:text-secondary-red">
        <LinkedIn />
      </a>
      <a href="https://twitter.com/ImMyst_" target="_blank" class="p-4 hover:fill-current hover:text-secondary-red">
        <Twitter />
      </a>
    </div>
  </div>
</template>

<script>
import Github from '~/components/icons/Github'
import LinkedIn from '~/components/icons/LinkedIn'
import Twitter from '~/components/icons/Twitter'

export default {
  components: {
    Github,
    LinkedIn,
    Twitter
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.top-shadow {
  -webkit-box-shadow: 0 -6px 20px rgba(0,0,0,0.15);
  -moz-box-shadow: 0 -6px 20px rgba(0,0,0,0.15);
    box-shadow: 0 -6px 20px rgba(0,0,0,0.15)
}
</style>
