<template>
  <div class="form-container">
    <h3>My Form Component</h3>
    <div>
      <input type="text" v-model="userData.firstName" />
      <input type="text" v-model="userData.lastName" />
      <button @click="handleBtnClicked()">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyForm",
  props: {
    initialFormData: Object
  },
  data() {
    return {
      userData : this.initialFormData.name || {}
    }
  },
  methods: {
    /**
     * this will emit an event to the parent with the value from the
     * userData property
     */
    handleBtnClicked: function() {
      this.$emit("form-clicked", this.userData);
    }
  }
};
</script>
<style scoped>
.form-container {
  background-color: aliceblue;
  padding: 10px;
  margin: 10px;
}
</style>