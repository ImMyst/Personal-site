<template>
  <div>
    <h1 class="text-8xl text-white leading-none font-bold">
      <p>Titouan</p>
      <p>Galvani</p>
    </h1>
    <div class="relative mt-24">
      <ButtonMain
        text="Work in Progress"
        @mouseover.native="displayTip"
        @mouseleave.native="removeTip"
      />
      <Tip
        v-if="tipText"
        :class="tipText ? 'animate-fade-in' : 'animate-fade-out'"
        :text="tipText"
      />
    </div>
  </div>
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
