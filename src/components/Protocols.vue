<template>
  <h3>Протокол</h3>
  <div>
    <div>
      <div>Описание</div>
      <textarea v-model="description"/>
      <div
          class="menuButton"
          v-on:mouseover="toggleModal('firstModal', true)"
          v-on:mouseleave="toggleModal('firstModal', false)"
      >
        Выбрать шаблон описания (двойной клик для выбора)
        <div v-if="firstModal" style="position: absolute; width: max-content; z-index: 2">
          <DropdownComponent
              :show="firstModal"
              :templates="templates"
              field='description'
          />
        </div>
      </div>

    </div>
    <div>
      <div>Рекомендации</div>
      <textarea v-model="recommendations"/>
      <div
          class="menuButton"
          v-on:mouseover="toggleModal('secondModal', true)"
          v-on:mouseleave="toggleModal('secondModal', false)"
      >
        Выбрать шаблон рекомендаций (двойной клик для выбора)
        <div v-if="secondModal" style="position: absolute; width: max-content; z-index: 1">
          <DropdownComponent
              :show="secondModal"
              :templates="templates"
              field='recommendations'
          />
        </div>
      </div>
    </div>
    <div>
      <div>Заключение</div>
      <textarea v-model="conclusions"/>
      <div
          class="menuButton"
          v-on:mouseover="toggleModal('thirdModal', true)"
          v-on:mouseleave="toggleModal('thirdModal', false)"
      >
        Выбрать шаблон заключения (двойной клик для выбора)
        <div v-if="thirdModal" style="position: absolute; width: max-content">
          <DropdownComponent
              :show="thirdModal"
              :templates="templates"
              field='conclusions'
          />
        </div>
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
      firstModal: false,
      secondModal: false,
      thirdModal: false
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
</style>
