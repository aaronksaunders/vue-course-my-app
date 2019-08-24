<template>
  <div id="app">
    <MyName name="Aaron" @was-clicked="handleWasClicked"></MyName>
    <my-list :incomingListData="theUserArray" @list-clicked="handleListClicked"></my-list>
    <my-form :initialFormData="{}" @form-clicked="handleFormClicked"></my-form>
  </div>
</template>

<script>
/** 
    ALL of the components that are being used in this component 
    must be imported here 
*/
import MyName from "./components/MyName.vue";
import MyList from "./components/MyList.vue";
import MyForm from "./components/MyForm.vue";

export default {
  name: "app",
  /**
    ALL of the components that are being used in this component 
    must be listed here 
  */
  components: {
    MyName,
    MyList,
    MyForm
  },
  data() {
    return {
      /* we put some dummy data in here to pre-fill the list */
      theUserArray: [
        { id: 0, name: { firstName: "Andrea", lastName: "Saunders" } },
        { id: 1, name: { firstName: "Aaron", lastName: "Saunders" } }
      ]
    };
  },
  methods: {
    handleWasClicked: function(_data) {
      alert(_data);
    },
    /**
     * the data from the list click DOES contain an id becuase
     * this is handling list items, and for an object to be the
     * list it must have an id.
     *
     * it is id, name.irstName and the name.lastName
     */
    handleListClicked: function(_data) {
      alert(_data.name.firstName + " " + _data.name.lastName);
    },
    /**
     * the data from the form click DOES NOT contain an id becuase
     * this is handling when we are creating a new object.
     *
     * it is just the firstName and the lastName
     */
    handleFormClicked: function(_data) {
      console.log(_data);
      // add the item to the array
      this.theUserArray.push({
        name: _data,
        id: new Date().getTime()
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 30px;
}
</style>
