<template>
  <div>
    <h1 class="text-8xl text-primary-white leading-none font-bold">
      <p>Titouan</p>
      <p>Galvani</p>
    </h1>
    <div class="relative mt-24">
      <ButtonMain
        text="Work in Progress"
        @mouseover.native="displayGithubTip"
        @mouseleave.native="removeGithubTip"
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
    displayGithubTip() {
      this.tipText = 'I hope before 2026 !';
    },
    removeGithubTip() {
      this.tipText = '';
    },
  },
};
</script>

<style></style>
