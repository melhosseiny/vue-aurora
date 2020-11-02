<template>
  <div :class="[$style.carousel, type]">
    <div
      ref="carousel"
      :class="$style.items"
    >
      <slot />
    </div>
    <button
      :class="$style.leftButton"
      @click="changeSlide(-1)"
    >
      <i class="material-icons">keyboard_arrow_left</i>
    </button>
    <button
      :class="$style.rightButton"
      @click="changeSlide(1)"
    >
      <i class="material-icons">keyboard_arrow_right</i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "main"
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeSlide(delta) {
      const carousel = this.$refs.carousel;
      const width = carousel.offsetWidth;
      console.log(width, carousel.scrollLeft);
      carousel.scrollTo(carousel.scrollLeft + (width + 10) * delta, 0);
    }
  }
}
</script>

<style module>
.carousel {
  --item-size: 170px;
  --item-size-top: 33.33%;
  --item-size-top-md: 50%;
  --item-size-top-sm: 100%;

  position: relative;
  width: 100%;

  & .items {
    display: flex;
    overflow: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    & > * {
      margin-right: 10px;
      flex: 0 0 var(--item-size);
      width: var(--item-size);

      &:last-child {
        margin-right: 0;
      }

      & img {
        display: block;
        width: var(--item-size);
      }
    }
  }

  &:global(.top) .items > * {
    flex: 0 0 calc(var(--item-size-top) - (10px / 3) * 2);
    width: calc(var(--item-size-top));

    & img {
      width: 100%;
    }

    @media (--md-viewport) {
      flex: 0 0 calc(var(--item-size-top-md) - 10px / 2);
      width: calc(var(--item-size-top-md));
    }

    @media (--sm-viewport) {
      flex: 0 0 calc(var(--item-size-top-sm) + 0 * 10px);
      width: calc(var(--item-size-top-sm) + 0 * 10px);
    }
  }

  & .leftButton,
  & .rightButton {
    position: absolute;
    top: 0;
    height: 100%;
    background: none;
    border: 0;
    border-radius: 0;
    color: rgb(var(--accent-color));
    margin: 0;
    padding: 0;

    & :global(.material-icons) {
      font-size: 36px;
    }
  }

  & .leftButton {
    left: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(var(--background-color), 0.8));
  }

  & .rightButton {
    right: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(var(--background-color), 0.8));
  }

  & .leftButton:hover,
  & .rightButton:hover {
    background-color: transparent;
  }

  &:global(.top) {
    & .leftButton,
    & .rightButton {
      background: none;

      & :global(.material-icons) {
        border-radius: 50%;
        background-color: rgba(20, 20, 20, 0.8);
      }
    }
  }
}

.carousel:global(.main) .items > :nth-child(n+1) {
  scroll-snap-align: start;
}
</style>
