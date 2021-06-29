<template>
  <div
    @dblclick="$emit('toggle-reminder', task._id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task._id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: Object,
    },
    emits: ['delete-task', 'toggle-reminder'],
  };
</script>

<style scoped>
  .fas {
    color: #c80815;
  }
  .task {
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  .task.reminder {
    border-left: 5px solid #42b983;
  }
  .task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
