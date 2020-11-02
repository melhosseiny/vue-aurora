<template>
  <header :class="$style.header">
    <div :class="$style.toolbar">
      <div :class="$style.brand">
        <router-link
          v-if="clickableLogo"
          to="/"
        >
          <img
            :class="$style.profile"
            :src="logoSrc"
            :alt="appName"
          >
        </router-link>
        <img
          v-else
          :class="$style.profile"
          :src="logoSrc"
          :alt="appName"
        >
      </div>
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: "VAppBar",
  props: {
    appName: {
      type: String,
      default: "My App"
    },
    logoSrc: {
      type: String,
      default: ""
    },
    clickableLogo: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style module>
.header {
  height: 50px;
  color: rgb(var(--text-color));
  font-weight: 700;
  background-color: rgb(var(--primary-color));
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0 1em 1em 1em;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;

  & .toolbar {
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 1rem;
    right: 1rem;
  }

  & .brand {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  & img.profile {
    display: block;
    height: 24px;
    margin-right: 1em;
  }

  & nav {
    margin-top: 0.5em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    & button,
    & a:global(.btn) {
      background-color: transparent;
      color: rgb(var(--background-color));
      border: 0 none;
    }

    & button:hover,
    & a:global(.btn):hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
