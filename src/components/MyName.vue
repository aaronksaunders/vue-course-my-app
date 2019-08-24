<template>
  <div @click="gotClicked">{{name}}</div>
</template>
<script>
export default {
  name: "MyName",
  props: {
    name: String
  },
  methods: {
    gotClicked: function() {
      this.$emit("was-clicked", this.name + " - " + new Date());
    }
  }
};
</script>