<template>
  <header :class="$style.header">
    <div :class="$style.toolbar">
      <div :class="$style.brand">
        <router-link
          v-if="clickableLogo"
          to="/"
        >
          <img v-if="logoSrc"
            :class="$style.profile"
            :src="logoSrc"
            :alt="appName"
          >
          <template v-else>
            {{ appName }}
          </template>
        </router-link>
        <template v-else>
          <img
            v-if="logoSrc"
            :class="$style.profile"
            :src="logoSrc"
            :alt="appName"
          >
          <template v-else>
            {{ appName }}
          </template>
        </template>
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
  color: rgb(var(--text-color));
  font-weight: 700;
  background-color: rgb(var(--primary-color));
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0.5em 1em;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;

  & .toolbar {
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
  }

  & .brand {
    font-family: var(--type-brand);
    display: flex;
    flex-direction: row;
    align-items: center;
    letter-spacing: var(--type-brand-letter-spacing);

    & a,
    & a:link,
    & a:visited,
    & a:hover,
    & a:active {
      color: rgb(var(--background-color));
    }

    & a:hover,
    & a:active {
      text-decoration: none;
    }
  }

  & img.profile {
    display: block;
    height: 24px;
    margin-right: 1em;
  }

  & nav {
    display: flex;
    flex-direction: row;
    align-items: center;

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
