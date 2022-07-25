<template>
  <div style="margin-top: 10px">
    <input
        :value="item.label"
        @input="(e) => updateTemplate(item.id, 'label', e)"
    >
    <button @click="deleteTemplate(item.id)">Удалить Шаблон</button>
    <button
        v-if="item.level !== 3"
        @click="toggle"
        class="toggleList"
    >
      {{ isOpen ? `&#8593;` : `&#8595;` }}
    </button>
    <div v-if="item.level !== 3 && isOpen">
      <button
          style="margin-top: 10px"
          v-on:click="addTemplate( item.id)"
      >
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
  padding: 10px;
}
button {
  color: white;
  font-weight: bolder;
  font-size: 12px;
  background-color: rgba(233,89,91,0.8);
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}
button:hover {
   background-color: rgba(233,89,80,0.9);;
}
.child {
  padding-left: 80px;
  margin: 5px 0;
}
.toggleList {
  background-color: transparent;
  border: none;
  color: black;
  font-weight: bolder;
  font-size: 14px;
  cursor: pointer;
}
.toggleList:hover {
  color: cadetblue;
  background-color: transparent;
}
</style>
