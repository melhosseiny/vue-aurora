<template>
  <div :class="{ [$style.toast]: true, [$style.active]: active }">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "VToast",
  data() {
    return {
      active: false,
      message: "",
      timeouts: []
    }
  },
  methods: {
    show(message, delay = 3000) {
      this.clearTimeouts();
      this.message = message;
      this.active = true;
      this.timeouts.push(setTimeout(() => this.hide(), delay));
    },
    hide() {
      this.active = false;
    },
    clearTimeouts() {
      for (let i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
      }
      this.timeouts = [];
    }
  }
}
</script>

<style module>
.toast {
  display: none;
  z-index: 8;
  position: fixed;
  bottom: 0.5em;
  left: 0.5em;
  background-color: #000;
  color: #fff;
  padding: 0.5em;
  text-align: center;
}

.toast.active {
  display: flex;
}
</style>
