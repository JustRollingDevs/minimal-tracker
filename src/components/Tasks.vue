<template>
  <div v-for="task in tasks" :key="task._id">
    <Task
      :task="task"
      @toggle-reminder="$emit('toggle-reminder', task._id)"
      @delete-task="$emit('delete-task', task._id)"
    />
  </div>
</template>

<script>
  import Task from './Task.vue';
  export default {
    name: 'Tasks',
    props: {
      tasks: Array,
    },
    components: {
      Task,
    },
    emits: ['delete-task', 'toggle-reminder'],
  };
</script>
