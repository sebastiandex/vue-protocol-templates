<template>
  <div>
    <input
        :value="item.label"
        @input="(e) => updateTemplate(item.id, 'label', e)"
    >
    <button @click="deleteTemplate(item.id)">Удалить Шаблон</button>
    <button
        v-if="item.level !== 3"
        @click="toggle"
    >
      {{ isOpen ? `&#8593;` : `&#8595;` }}
    </button>
    <div v-if="item.level !== 3 && isOpen">
      <button v-on:click="addTemplate( item.id)">
        Создать шаблон
      </button>
    </div>
    <TemplateItem
        v-show="item.children && isOpen"
        class="child"
        v-for="(child, index) in item.children"
        :key="index"
        :item="getTemplate(child)"
    >
    </TemplateItem>
  </div>
</template>

<script>

export default {
  name: 'TemplateItem',
  props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    deleteTemplate(id) {
      this.$store.commit('remove', id)
    },
    updateTemplate(id, field, e) {
      this.$store.commit('updateTemplate', {id, field, e})
    },
    getTemplate(id) {
      return this.$store.getters.getTemplate(id)
    },
    addTemplate(id) {
      this.$store.commit('add', id)
    },
  }
}
</script>


<style>
input {
  width: 400px;
}

.child {
  padding-left: 80px;
  margin: 5px 0;
}
</style>
