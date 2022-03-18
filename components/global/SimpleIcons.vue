<template>
  <section class="w-full max-w-5xl mx-auto mb-16 bg-green-500">
    <facebook-icon size="1.5x" class="custom-class"></facebook-icon>
    <facebook-icon size="60" class="custom-class"></facebook-icon>
    <twitter-icon size="1.5x" class="custom-class"></twitter-icon>
    <twitter-icon size="60" class="custom-class"></twitter-icon>
  </section>
</template>

<script>
import { FacebookIcon, TwitterIcon } from 'vue-simple-icons'

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
  },
}
</script>
