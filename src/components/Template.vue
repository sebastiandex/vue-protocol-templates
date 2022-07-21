<template>
    <div>
      <input :value="item.label" @input="(e) => updateLabel(e, item.id)">
      <button @click="toggle">{{ isOpen ? '-' : '+' }}</button>
      <TemplateItem
          v-show="item.children && isOpen"
          class="child"
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
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
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },
    updateLabel (e, id) {
      console.log({id})
      this.$store.commit('updateLabel', id, e.target.value)
    }
  }
}
</script>


<style>
input {
  background-color: greenyellow;
  width: max-content;
}
  .child {
    padding-left: 50px;
  }
</style>
