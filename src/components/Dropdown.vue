<template>
  <div class="modal">
    <div
        class="modalItem"
        v-for="id in templates"
        v-bind:key="id"
        v-on:dblclick.stop="chooseTemplate(getTemplate(id).label)"
    >
      <span>{{ getTemplate(id).label }}</span>
      <DropdownComponent
          v-if="getTemplate(id).children && getTemplate(id).children.length"
          :templates="getTemplate(id).children"
          :field="this.field"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent',
  props: {
    templates: Array,
    field: String
  },
  data() {
    return {
      showModal: true
    }
  },
  methods: {
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
    chooseTemplate(text) {
      if (this.field === 'description') {
        this.$store.commit('updateDescription', text)
      } else if (this.field === 'recommendations') {
        this.$store.commit('updateRecommendations', text)
      } else {
        this.$store.commit('updateConclusion', text)
      }

    }
  }
}
</script>


<style>
.modal {
  margin-left: 50px;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
}

.modalItem {
  display: grid;
  margin-bottom: 5px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
}

.modalItem:hover {
  cursor: pointer;
}
</style>
