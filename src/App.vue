<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyName name="Aaron" @was-clicked="handleWasClicked"></MyName>
    <my-list :incomingListData="anArray" @list-clicked="handleListClicked"></my-list>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyName from "./components/MyName.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    MyName,
    MyList
  },
  data() {
    return {
      anArray: [
        { id: 0, name: { firstName: "Andrea", lastName: "Saunders" } },
        { id: 1, name: { firstName: "Aaron", lastName: "Saunders" } }
      ]
    };
  },
  methods: {
    handleWasClicked: function(_data) {
      debugger;
      alert(_data);
    },
    handleListClicked: function(_data) {
      alert(_data.name.firstName);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
