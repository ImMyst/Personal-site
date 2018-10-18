<template>
  <header>
    <nav class="menu">
      <ul class="menu-nav">
          <li class="nav-item">
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
header {
  padding: 1.25rem;
  position: absolute;
  // background: #none;
  width: 100%;
}
.menu-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;

  .nav-item {
    font-size: 1.25rem;
    text-transform: lowercase;
  }
  a {
    padding: 1.335rem 1.5rem;
    transition: .2s;
    &:hover {
      color: #47bb76;
      box-shadow: inset 0 4px #47bb76;
    }
  }
  .nuxt-link-exact-active {
    box-shadow: inset 0 4px #47bb76;
    color: #47bb76;
  }
}
</style>
