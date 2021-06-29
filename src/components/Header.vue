<template>
  <header>{{ title }}</header>
  <Button
    v-show="homePage"
    @btn-click="$emit('toggle-add-task')"
    :color="showAddTask ? '#c80815' : '#42b983'"
    :text="showAddTask ? 'close' : 'Add Task'"
  />
</template>

<script>
  import Button from './Button.vue';

  export default {
    name: 'Header',
    props: {
      title: String,
      showAddTask: Boolean,
    },
    components: {
      Button,
    },
    computed: {
      homePage() {
        if (this.$route.path === '/') {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>

<style scoped>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.3rem;
    margin-bottom: 20px;
  }
</style>
