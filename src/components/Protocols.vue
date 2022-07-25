<template>
  <h3>Редактор протокола</h3>
  <div
      style="margin-top: 20px"
      v-for="block in showProtocolBlocks()"
      v-bind:key="block.fieldName"
  >
    <h4>{{ block.label }}</h4>
    <textarea v-model="block.field"/>
    <div
        class="menuButton"
        v-on:mouseover="toggleModal(block.modalName, true)"
        v-on:mouseleave="toggleModal(block.modalName, false)"
    >
      Выбрать шаблон (двойной клик для выбора)
      <div v-if="block.modal" style="position: absolute; width: max-content; z-index: 1">
        <DropdownComponent
            :templates="templates"
            :field="block.fieldName"
        />
      </div>
    </div>
  </div>
  <router-view/>
</template>

<script>
import DropdownComponent from "@/components/Dropdown";

export default {
  name: 'ProtocolsComponent',
  components: {DropdownComponent},
  computed: {
    description: {
      get() {
        return this.$store.state.protocol.description
      },
      set(value) {
        this.$store.commit('updateDescription', value)
      }
    },
    recommendations: {
      get() {
        return this.$store.state.protocol.recommendations
      },
      set(value) {
        this.$store.commit('updateRecommendations', value)
      }
    },
    conclusions: {
      get() {
        return this.$store.state.protocol.conclusion
      },
      set(value) {
        this.$store.commit('updateConclusion', value)
      }
    }
  },
  data() {
    return {
      templates: this.$store.state.templateTrees,
      descriptionModal: false,
      recommendationsModal: false,
      conclusionsModal: false
    }
  },
  methods: {
    getTemplate(id) {
      return this.$store.getters.getTemplate(id)
    },
    addTemplate(data) {
      this.$store.commit('add', data)
    },
    toggleModal(modal, bool) {
      this[modal] = bool;
    },
    showProtocolBlocks() {
      return (
          [
            {
              label: 'Описание',
              modal: this.descriptionModal,
              modalName: 'descriptionModal',
              fieldName: 'description',
              field: this.description,
              buttonText: 'Выбрать шаблон описания (двойной клик для выбора)'
            },
            {
              label: 'Рекомендации',
              modal: this.recommendationsModal,
              modalName: 'recommendationsModal',
              fieldName: 'recommendations',
              field: this.recommendations,
              buttonText: 'Выбрать шаблон рекомендаций (двойной клик для выбора)'
            },
            {
              label: 'Заключение',
              modal: this.conclusionsModal,
              modalName: 'conclusionsModal',
              fieldName: 'conclusions',
              field: this.conclusions,
              buttonText: 'Выбрать шаблон заключения (двойной клик для выбора)'
            }
          ])
    }
  }
}
</script>

<style>
.menuButton {
  width: max-content;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

textarea {
  border-radius: 5px;
  min-height: 100px;
  min-width: 300px;
}
</style>
