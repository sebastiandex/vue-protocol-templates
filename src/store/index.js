import {createStore} from "vuex";

export default createStore({
    state: {
        templatesDB: [
            {label: 'Первый', id: 1, level: 1, children: [6, 7]},
            {label: 'Второй ', id: 2, level: 1, children: []},
            {label: 'Тры', id: 3, level: 1, children: []},
            {label: 'Четыре', id: 4, level: 1, children: []},
            {label: 'Пять', id: 5, level: 1, children: []},
            {label: 'Ребенок 2 уровня(1)', level: 2, id: 6, parentId: 1, children: []},
            {label: 'Ребенок 2 уровня(2)', level: 2, id: 7, parentId: 1, children: [8, 9]},
            {label: 'Ребенок 2 уровня(3)', level: 3, id: 8, parentId: 7},
            {label: 'Ребенок 3 уровня(1)', level: 3, id: 9, parentId: 7}
        ],
        templateTrees: [1, 2, 3, 4, 5]
    },
    getters: {
        getTemplate: (state) => (id) => {
            return state.templatesDB.find((item) => item.id === id)
        },
        findTemplate: (state) => (id) => {
            const changingIndex = state.templatesDB.findIndex((item) => item.id === id);
            return state.templatesDB[changingIndex]
        }
    },
    mutations: {
        add(state, id) {
            // Конечно, не самый изящный способ создать айдишник, но предположим что на беке все будет проверяться
            const generatedId = Math.random() * 100;

                const templateToAdd = id ? this.getters.findTemplate(id) : null;
                const currentLevel = templateToAdd?.level || 0;
                state.templatesDB.push({
                    label: '',
                    level: currentLevel + 1,
                    id: generatedId,
                    parentId: id ? id : null,
                    children: []
                });
                // Проверяем корневой ли шаблон и пушим в корневой массив либо в children родителя
                if (id) {
                   return  templateToAdd.children.push(generatedId)
                } else {
                   return  state.templateTrees.push(generatedId)
                }
            },
            remove(state, id) {
                const arrToRemove = this.getters.findTemplate(id);
                if (arrToRemove.level !== 1) {
                    const parent = this.getters.findTemplate(arrToRemove.parentId);
                    parent.children.splice(parent.children.indexOf(id), 1)
                } else {
                    state.templateTrees.splice(state.templateTrees.indexOf(id), 1);
                }
            },
            updateTemplate(state, {id, field, e})
            {
                return this.getters.findTemplate(id)[field] = e.target.value;
            }
        },
        actions: {},
        modules: {}
    })
