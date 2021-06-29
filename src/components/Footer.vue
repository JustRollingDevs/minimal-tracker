<template>
  <footer>
    <p>
      Copyright &copy; 2021 |
      <a
        href="https://justrollingdevs.com/"
        title="go to my website"
        class="website"
        >JustRollingDevs</a
      >
    </p>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>
<style scoped>
  a {
    color: #fc4c02;
    letter-spacing: 0.15rem;
  }
  .website {
    color: #f6b352;
  }

  footer {
    margin-top: 30px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
  }
</style>
