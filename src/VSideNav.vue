<template>
  <nav :class="{ [$style.nav]: true, [$style.active]: active }">
    <slot />
  </nav>
</template>

<script>
export default {
  name: "VNav",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module>
.nav {
  z-index: 100;
  position: fixed;
  top: 0;
  right: -1em;
  width: 0;
  height: 100vh;
  padding: 0.5em;
  background-color: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: width 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > button,
  & a:global(.btn) {
    margin-bottom: 0.5em;
    justify-content: start;
    background-color: rgba(0, 0, 0, 0);
    color: rgb(var(--text-color));
    border: 0 none;
  }

  & > button:hover,
  & a:global(.btn):hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgb(var(--text-color));
  }
}

.nav.active {
  display: flex;
  width: 25vw;
  right: 0;

  @media screen and (max-width: 30em) {
    width: 50vw;
  }
}
</style>
