<template>
  <nav :class="$style.nav">
    <slot />
  </nav>
</template>

<script>
export default {
  name: "VNav"
}
</script>

<style module>
.nav {
  display: flex;
  flex-direction: row;

  & a {
    min-width: 70px;
  }
}
</style>
