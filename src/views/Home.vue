<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />

  <Tasks
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="tasks"
  />
  <Footer />
</template>

<script>
  import Tasks from '../components/Tasks.vue';
  import AddTask from '../components/AddTask.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'Home',
    props: {
      showAddTask: Boolean,
    },
    components: {
      Tasks,
      AddTask,
      Footer,
    },
    data() {
      return {
        tasks: [],
      };
    },
    methods: {
      async addTask(task) {
        const res = await fetch(`api/tasks`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task),
        });

        const data = await res.json();
        this.tasks = [...this.tasks, task];
      },
      async deleteTask(_id) {
        if (confirm('Sure?')) {
          const res = await fetch(`api/tasks/${_id}`, {
            method: 'DELETE',
          });

          res.status === 200
            ? (this.tasks = this.tasks.filter((task) => task._id !== _id))
            : alert('Error');
        }
      },
      async toggleReminder(_id) {
        const res = await fetch(`api/tasks/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
        });

        const data = await res.json();

        this.tasks = this.tasks.map((task) =>
          task._id === _id ? { ...task, reminder: !task.reminder } : task
        );
      },
      async fetchTasks() {
        const res = await fetch('api/tasks');
        const data = await res.json();
        return data;
      },
      async fetchTask(_id) {
        const res = await fetch(`api/tasks/${_id}`);
        const data = await res.json();
        return data;
      },
    },

    async created() {
      this.tasks = await this.fetchTasks();
    },
  };
</script>
