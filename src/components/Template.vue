<template>
    <div>
      {{item.label}}
      <input>
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
    }
  }
}
</script>


<style>
  .child {
    padding-left: 25px;
  }
</style>
