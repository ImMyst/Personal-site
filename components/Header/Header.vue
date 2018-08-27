<template>
  <header>
    <nav class="menu">
      <ul class="menu-nav">
          <li class="nav-item current">
              <nuxt-link to="/" class="nav-link">
                  Accueil
              </nuxt-link>
          </li>
          <li class="nav-item">
              <nuxt-link to="/about" class="nav-link">
                  A Propos
              </nuxt-link>
          </li>
          <li class="nav-item">
              <nuxt-link to="/blog" class="nav-link">
                  Blog
              </nuxt-link>
          </li>
          <li class="nav-item">
              <nuxt-link to="/companies" class="nav-link">
                  Entreprises
              </nuxt-link>
          </li>
          <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link">
                  Contact
              </nuxt-link>
          </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.menu-nav {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
