<template>
  <header>
        <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>

        <nav class="menu">
            <div class="menu-branding">
                <div class="portrait"></div>
            </div>
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
