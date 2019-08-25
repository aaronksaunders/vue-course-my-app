<template>
  <div class="form-container">
    <h3>{{formTitle}}</h3>
    <div>
      <ion-item>
        <ion-label>First Name</ion-label>
        <ion-input @input="userData.firstName = $event.target.value" :value="userData.firstName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Last Name</ion-label>
        <ion-input @input="userData.lastName = $event.target.value" :value="userData.lastName"></ion-input>
      </ion-item>
      <ion-button @click="handleBtnClicked()">Save</ion-button>
      <ion-button  color="danger" @click="handleCancelClicked()">Cancel</ion-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyForm",
  props: {
    // this is the data being passed into the component, see the watch section
    // below
    initialFormData: Object
  },
  computed: {
    /**
     * if there is an id then we know we ae editing and we
     * are adjusting the title appropriately
     */
    formTitle: function() {
      return this.initialFormData.id !== undefined
        ? "Editing User: " + this.initialFormData.id
        : "Create New User";
    }
  },
  watch: {
    /**
     * The best way is to watch your prop then update your data if you want. You
     * will always access the last props even if they change after the creation
     * of the component.
     */
    initialFormData: function(_initialData) {
      // if we have a name field then set the form to
      // be able to edit the name
      if (_initialData.name) {
        this.userData = { ..._initialData.name };
      }
    }
  },
  data() {
    return {
      // here we are using the initialFormData to set the v-model data
      // that will be used in the component
      userData: {}
    };
  },
  methods: {
    /**
     * this will emit an "form-clicked" event to the parent with the
     * value from the userData property
     *
     * the userData will only contain the firstName and LastName
     */
    handleBtnClicked: function() {
      var returnVal = {};
      if (this.initialFormData.id !== undefined) {
        returnVal = {
          id: this.initialFormData.id,
          name: this.userData
        };
      } else {
        returnVal = this.userData;
      }

      this.$emit("form-clicked", returnVal);
      // clear the ui
      this.userData = {};
    },
    /**
     * this will emit an "form-cancelled" event to the parent with the
     * value from the userData property
     *
     * the userData will be empty
     */
    handleCancelClicked: function() {
      this.$emit("form-cancelled", {});
      // clear the ui
      this.userData = {};
    }
  },
  created() {}
};
</script>
<style scoped>
.form-container {
  /* background-color: aliceblue;
  padding: 10px;
  margin: 10px; */
}
</style>