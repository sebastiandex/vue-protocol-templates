<template>
  <header>
  <router-link
      v-for="(item, index) in links"
      :to="item.link"
      v-bind:key="item.link"
  >
    {{ item.label }}
    <span
        v-if="index !== links.length - 1"
        class="separator"
    >
      |
    </span>
  </router-link>
  </header>

  <div class="content">
    <router-view/>
  </div>

</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      links: [
        {label: 'Home', link: '/'},
        {label: 'Редактор шаблонов', link: '/templates'},
        {label: 'Редактор протокола', link: '/protocols'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.separator {
  margin: 0 20px;
}
.content {
  text-align: left;
  background: #F2F9FF;
  border-radius: 20px;
  padding: 25px;
  margin-top: 20px;
}

</style>
