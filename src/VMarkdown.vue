<template>
  <article v-html="markup" />
</template>

<script>
import commonmark from "commonmark";

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

export default {
  name: "VMarkdown",
  props: {
    path: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      markup: ""
    }
  },
  async created() {
    const response = await fetch(this.path);
    const markdown = await response.text();
    this.markup = writer.render(reader.parse(markdown));
  }
}
</script>
