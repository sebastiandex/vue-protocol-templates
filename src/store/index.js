import {createStore} from "vuex";

export default createStore({
    state: {
        counter: 10,
        templates: [
            {
                label: 'Первый', id: 12, children: [
                    {
                        label: 'Вложенный шаблон уровень 2', id: 132, children: [
                            {label: 'уровень 3 4543534', id: 13232},
                            {label: 'уровень 3 33333', id: 4324234},
                            {label: 'уровень 3 222222', id: 5555454},
                        ]
                    }
                ]
            }
        ],
        templatesDB: [
            {label: 'Первый', id: 1, children: [6, 7, 8]},
            {label: 'Второй ', id: 2, children: []},
            {label: 'Тры', id: 3, children: []},
            {label: 'Четыре', id: 4, children: []},
            {label: 'Пять', id: 5, children: []},
            {label: 'Ребенок 2 уровня(1)', id: 6, children: []},
            {label: 'Ребенок 2 уровня(2)', id: 7, children: []},
            {label: 'Ребенок 2 уровня(3)', id: 8, children: [9]},
            {label: 'Ребенок 3 уровня(1)', id: 9},

        ]
    },
    getters: {
        getTemplate: (state) => (id) => {
            console.log('getTemplate', id);
            console.log(232, state.templatesDB.filter((item) => item.id === id))
        }
    },
    mutations: {
        add(state, data) {
            console.log('add Mutation', state);
            // Конечно, айдишник нужно получать с бека при создании, но пока оставим так
            data.id = (Math.random() * 100).toFixed(0);
            console.log('add Mutation', data);

            state.templates.push(data)
        },
        change(state, data) {
            console.log('change', state, data);
        },
        remove(state, data) {
            console.log('remove', state, data);
        },
        // логично было бы отправить на бек айдишник шаблона и измененные данные, но так как бека нет
        // будем заниматься поисками элемента

        updateLabel: (state) => (id, label) => {
            console.log('updateLabelSTORE', id, label);
            state.templatesDB.filter((item) => item.id === id).label = label
        }
    },
    actions: {},
    modules: {}
})
