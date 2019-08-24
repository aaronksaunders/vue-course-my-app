<template>
  <div class="list-container">
    <h3>Show List Of Users</h3>
    <ol>
      <li v-for="e in this.incomingListData" :key="e.id">
        <span @click="$emit('list-clicked',e)">{{ e.name.firstName }} {{ e.name.lastName }}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "MyList",
  props: {
    incomingListData: Array
  },
  methods: {}
};
</script>

<style scoped>
.list-container {
  background-color: aliceblue;
  padding: 10px;
  margin : 10px;
}
</style>