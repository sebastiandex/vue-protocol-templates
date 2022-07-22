<template>
    <h3>Редактор шаблонов</h3>

      <TemplateItem
          v-for="(id) in templates"
          class="coreTemplate"
          :key="id"
          :item="getTemplate(id)"
          @make-folder="$emit('make-folder', $event)"
          @add-item="$emit('add-item', $event)"
      >
      </TemplateItem>
  <button v-on:click="addTemplate( null)">Создать шаблон</button>
  <router-view/>

</template>

<script>
import TemplateItem from "@/components/Template";

export default {
  name: 'TemplateEditor',
  components: {TemplateItem},
  data() {
    return {
      templates: this.$store.state.templateTrees
    }
  },
  methods: {
    getTemplate(id) {
      return this.$store.getters.getTemplate(id)
    },
    addTemplate(data) {
      this.$store.commit('add', data)
    }
  }
}
</script>

<style scoped>
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
.coreTemplate {
  margin-bottom: 10px;
}
</style>
