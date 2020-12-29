<template>
  <div class="absolute inset-x-0 mt-16 text-primary-white text-lg">
    {{ text }}
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
