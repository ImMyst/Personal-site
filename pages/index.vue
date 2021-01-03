<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      tipText: '',
    };
  },
  methods: {
    displayTip() {
      this.tipText = 'I hope before 2026 !';
    },
    removeTip() {
      this.tipText = '';
    },
  },
};
</script>
