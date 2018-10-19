<template>
  <footer id="main-footer">
    <span>&copy; Titouan GALVANI 2018 - All rights reserved &nbsp;&nbsp;─&nbsp;&nbsp;</span>
    <span>Fait avec
      <i class="far fa-heart"></i> par Titouan GALVANI -
      <a href="https://github.com/ImMyst/Portfolio-v2" class="text-secondary" target="_blank">Code</a>
    </span>
  </footer>
</template>

<style lang="scss" scoped>

#main-footer {
  text-align: center;
  padding: 0.3rem;
  background: #494949;
  color: #fff;
  height: 30px;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.2), 3px 0 10px 0 rgba(0, 0, 0, 0.19);

  .far {
    cursor: pointer;
    &:hover {
      animation: heart .3s ease-in-out;
    }
  }

  @keyframes heart {
    0% {
      transform: scale(1);
      transform-origin: 0% 0%;
    }
    25% {
      transform: scale(1.25);
      transform-origin: 10% 10%;
    }
    44% {
      transform: scale(1.5);
      transform-origin: 50% 50%;
    }
    66% {
      transform: scale(1.5);
      transform-origin: 50% 50%;
    }
    75% {
      transform: scale(1.25);
      transform-origin: 10% 10%;
    }
    100% {
      transform: scale(1);
      transform-origin: 0% 0%;
    }
  }

  span {
    font-weight: 400;
    i {
      color: crimson;
    }
    a {
      font-weight: 700;
      text-decoration: none;
      -webkit-box-shadow: inset 0 -2px #47bb76;
              box-shadow: inset 0 -2px #47bb76;
      transition: .3s ease-out;
      &:hover {
        background-color: #47bb76;
        color: #000;
      }
    }
  }
}
</style>

