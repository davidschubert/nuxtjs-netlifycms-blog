<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Über mich</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint quis amet modi? Assumenda esse delectus ab sed iste, excepturi nam eveniet nulla ipsam itaque temporibus id dicta unde maxime reiciendis error est aut neque quos iure fugit eos non? Nobis molestiae asperiores ducimus dicta quos amet iste sunt temporibus odio pariatur ipsam officiis natus, odit tempora vel dolores libero.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tempora perferendis dolorem quae dolorum soluta a alias, deserunt suscipit dolore nulla ab vitae asperiores aliquid, ex eligendi delectus optio ullam rem harum cumque accusantium. Id distinctio corporis aspernatur, quidem dolores, totam optio nulla ad odit nisi eum enim esse iure neque vitae necessitatibus labore molestias, quaerat dignissimos ipsam reiciendis itaque. Quisquam quaerat natus expedita fuga esse aspernatur asperiores sit iusto, dolorem eligendi nobis, saepe neque cum, nisi illo sunt accusamus nulla velit debitis voluptates alias ipsum ea voluptatibus. Reiciendis ad necessitatibus maxime doloribus voluptatum quisquam, in velit corrupti perspiciatis suscipit libero deleniti ab ipsa officia eum adipisci error quasi reprehenderit minus quam quis dolorem corporis? Neque natus quaerat expedita reprehenderit, facere et soluta similique modi voluptatem itaque ad accusantium non unde? Quod est facere suscipit hic dignissimos obcaecati earum eius vero? Sapiente nulla non dicta magnam recusandae aspernatur tenetur, optio corporis deserunt dolore doloremque, veniam repellat natus quam nemo iure! Aliquid, quae doloremque. Aperiam iusto, praesentium quisquam, sit delectus earum eius vero magni, possimus assumenda natus! Facilis distinctio natus optio!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maiores nostrum est ullam, eligendi impedit, quibusdam aut enim dicta recusandae obcaecati. Ut possimus, earum eum, at velit, non necessitatibus molestias voluptatum excepturi omnis quidem debitis. Veritatis nemo possimus quaerat qui.</p>
    </section>
  </main>
</template>

<script>
export default {
  transition: {
    name: 'intro',
    mode: 'out-in'
  }
}
</script>

<style lang="scss">
$t-duration: 500ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    display: block;
    width: 100%;
    height: 100%;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  }

  &::before {
    background-color: rgb(0, 0, 0);
  }
}

.intro-leave {
  &::before {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }
}

.intro-leave-to {
  &::before {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }
}

.intro-enter-to {
  &::before {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>