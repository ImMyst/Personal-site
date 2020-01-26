export const state = () => ({
  isMenuOpen: false
})

export const mutations = {
  toggleMenu (state) {
    state.isMenuOpen = !state.isMenuOpen
  }
}
