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
    // this is the data being passed into the component
    initialFormData: Object
  },
  data() {
    return {
      // here we are using the initialFormData to set the v-model data
      // that will be used in the component
      userData : this.initialFormData.name || {}
    }
  },
  methods: {
    /**
     * this will emit an "form-clicked" event to the parent with the
     * value from the userData property
     * 
     * the userData will only contain the firstName and LastName
     */
    handleBtnClicked: function() {
      this.$emit("form-clicked", this.userData);
      // clear the ui
      this.userData = {};
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