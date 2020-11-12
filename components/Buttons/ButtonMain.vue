<template>
  <div>
    <NuxtLink
      class="uppercase bg-primary-white rounded-lg text-accent-grey text-2xl px-6 py-3 font-bold border-4 border-transparent hover:bg-transparent hover:text-primary-white transition-all duration-200 hover:border-primary-white"
      to="/"
    >
      {{ text }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
