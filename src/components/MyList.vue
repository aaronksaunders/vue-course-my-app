<template>
  <div class="list-container">
    <h3>Show List Of Users</h3>
    <ol>
      <li v-for="listItem in this.incomingListData" :key="listItem.id">
        <span
          @click="handleItemClicked(listItem)"
        >{{ listItem.name.firstName }} {{ listItem.name.lastName }}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "MyList",
  props: {
    // this is the list data to render
    incomingListData: Array
  },
  methods: {
    /**
     * this will emit an "list-clicked" event to the parent with the
     * value from the current list item
     *
     */
    handleItemClicked: function(_listItem) {
      this.$emit("list-clicked", _listItem);
    }
  }
};
</script>

<style scoped>
.list-container {
  background-color: aliceblue;
  padding: 10px;
  margin: 10px;
}
</style>