<template>
  <div class="flex justify-between">
    <a href="https://github.com/ImMyst" target="_blank"
      ><GithubIcon class="social-icons"
    /></a>
    <a href="https://www.linkedin.com/in/titouan-galvani/" target="_blank"
      ><LinkedInIcon class="social-icons"
    /></a>
    <a href="https://twitter.com/ImMyst_" target="_blank"
      ><TwitterIcon class="social-icons"
    /></a>
  </div>
</template>

<style scoped>
.social-icons {
  @apply text-primary-darkgray hover:text-primary-black dark:text-primary-lightgray dark:hover:text-primary-white transition-colors ease-in duration-100 cursor-pointer;
}
</style>
