<template>
  <div
    class="h-screen flex justify-center items-center text-center antialiased relative bg-primary-white dark:bg-primary-black transition-colors ease-in duration-100"
  >
    <BulbIcon
      class="text-primary-black dark:text-primary-lightgray absolute top-5 right-5 cursor-pointer"
    />
    <Nuxt />
    <Navbar />
  </div>
</template>
