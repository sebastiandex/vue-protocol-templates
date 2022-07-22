<template>
  <div style="text-align: center">
    <h3>Перейдите в необходимый раздел:</h3>
    <ul>
      <li>
        <router-link to="/templates">Редактор шаблонов</router-link>
      </li>
      <li>
        <router-link to="/protocols">Редактор протокола</router-link>
      </li>
    </ul>
  </div>
  <router-view/>

</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
