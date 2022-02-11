<template>
  <main>
    <section class="w-full max-w-5xl mx-auto mt-10 bg-puklightblue dark:bg-pukyellow">
      <nuxt-content :document="impressum" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const impressum = await $content('meta/impressum').fetch()

    return {
      impressum,
    }
  },
}
</script>

<style></style>
