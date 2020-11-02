<template>
  <dialog
    ref="dialog"
    @click.prevent="clickOutside($event)"
  >
    <p>I'm a dialog</p>
    <slot />
  </dialog>
</template>

<script>
export default {
  name: "VDialog",
  methods: {
    show() {
      this.$refs.dialog.showModal();
    },
    close() {
      this.$refs.dialog.close();
    },
    clickOutside(event) {
      if (event.target === this.$refs.dialog) {
        this.close();
      }
    }
  }
}
</script>

<style module>
dialog {
  font-family: var(--primary-font-family);
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
  min-width: 280px;
  max-width: 560px;
  left: 50%;
  right: auto;
  transform: translate(-50%, 0);
}

dialog header {
  background: none;
  border-right: 0;
  padding: 0.5em;
}

dialog form {
  padding: 0.5em;
}

dialog footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #fff;
  padding: 0.5em;
}

dialog button {
  background-color: rgba(0, 0, 0, 0.12);
  border: none;

  & + button {
    margin-left: 0.25em;
  }

  &:hover {
    background-color: var(--text-decoration-color);
    color: #fff;
  }
}

dialog + :global(.backdrop) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
