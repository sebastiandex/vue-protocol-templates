<template>
    <div>Template Editor</div>

      <TemplateItem
          v-for="(template, index) in templates"
          :key="index"
          :item="template"
          @make-folder="$emit('make-folder', $event)"
          @add-item="$emit('add-item', $event)"
      >
      </TemplateItem>
      <li class="add" @click="$emit('add-item', template)">+</li>
  <button v-on:click="addTemplate( {label: 'Второй', children: []})">Add Template</button>
  <router-view/>

</template>

<script>
import TemplateItem from "@/components/Template";

export default {
  name: 'TemplateEditor',
  components: {TemplateItem},
  data() {
    return {
      templates: this.$store.state.templates
    }
  },
  methods: {
    addTemplate(data) {
      console.log({data})
      this.$store.commit('add', data)
      this.$store.getters.getTemplate(1)
    },
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
