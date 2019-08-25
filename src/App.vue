<template>
  <div id="app">
    <MyName name="Aaron" @was-clicked="handleWasClicked"></MyName>
    <my-list
      :incomingListData="theUserArray"
      @list-clicked="handleListClicked"
      @delete-item="handleDeleteListItem"
      @edit-item="handleEditListItem"
    ></my-list>
    <template v-if="inEditMode">
      <my-form
        :initialFormData="editingUser"
        @form-clicked="handleFormEdit"
        @form-cancelled="handleFormCancelled"
      ></my-form>
    </template>
    <template v-else>
      <my-form
        :initialFormData="{}"
        @form-clicked="handleFormClicked"
        @form-cancelled="handleFormCancelled"
      ></my-form>
    </template>
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
  computed: {
    inEditMode: function() {
      return this.editingUser.id != undefined ? true : false;
    }
  },
  data() {
    return {
      editingUser: {},
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
     * the data from the list click DOES contain an id becuase
     * this is handling list items, and for an object to be the
     * list it must have an id.
     *
     * it is id, name.irstName and the name.lastName
     */
    handleEditListItem: function(_item) {
      alert(_item.name.firstName + " " + _item.name.lastName);
      this.editingUser = { ..._item };
    },

    /**
     * the data from the list click DOES contain an id becuase
     * this is handling list items, and for an object to be the
     * list it must have an id.
     *
     * it is id, name.irstName and the name.lastName
     */
    handleDeleteListItem: function(_item) {
      console.log("deleteListElement", _item);
      let result = this.theUserArray.filter(element => {
        return element.id != _item.id;
      });
      this.theUserArray = result;
    },
    /**
     * the data from the form click DOES NOT contain an id becuase
     * this is handling when we are creating a new object.
     *
     * it is just the firstName and the lastName
     */
    handleFormClicked: function(_data) {
      console.log("handleFormClicked", _data);
      // add the item to the array
      this.theUserArray.push({
        name: _data,
        id: new Date().getTime()
      });
    },
    /**
     */
    handleFormEdit: function(_item) {
      console.log("handleFormEdit", _item);
      let edited = this.theUserArray.map(item => {
        if (item.id == _item.id) {
          return { ..._item };
        } else {
          return item;
        }
      });

      this.theUserArray = edited;
      this.editingUser = { };
    },
    /**
     */
    handleFormCancelled: function(_data) {
      console.log(_data);
      this.editingUser = {};
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
