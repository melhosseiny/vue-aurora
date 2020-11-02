<template>
  <a href="#">
    <article :class="[$style.card,type]">
      <img
        :src="img"
        alt="image description"
      >
      <div :class="$style.caption">
        <h3
          v-if="meta"
          :class="$style.meta"
        >
          {{ meta }}
        </h3>
        <h1 :class="$style.title">
          {{ title }}
        </h1>
        <h2 :class="$style.subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "main"
    },
    img: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Title"
    },
    subtitle: {
      type: String,
      default: "Subtitle"
    },
    meta: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style module>
.card {
  display: flex;
  flex-direction: column;

  &:global(.top) {
    background-color: #101012;

    & .caption {
      padding: 0 1em 1em 1em;
    }
  }
}

.title,
.subtitle,
.meta {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  color: var(--text-color);
}

.title {
  text-align: left;
  margin-bottom: 0;
}

.meta {
  margin-top: 1em;
  margin-bottom: 0;
  color: var(--accent-color);

  & + .title {
    margin-top: 0;
  }
}
</style>
