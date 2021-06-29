<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Minimal Tracker"
      :showAddTask="showAddTask"
    />

    <router-view :showAddTask="showAddTask"></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    name: 'App',
    components: {
      Header,
    },
    data() {
      return {
        showAddTask: false,
      };
    },
    methods: {
      toggleAddTask() {
        this.showAddTask = !this.showAddTask;
      },
    },
  };
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #1f2124;
    color: #fff;
  }
  .container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid #42b983;
    padding: 30px;
    border-radius: 5px;
  }
  .btn {
    display: inline-block;
    background: #2f2f2f;
    color: #fff;
    border: none;
    width: 100%;
    margin: 0 auto;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
  .btn:focus {
    outline: none;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn-block {
    display: block;
    width: 100%;
  }
</style>
