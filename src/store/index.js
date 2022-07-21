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
        ]
    },
    getters: {
        getCount2(state) {
            return state.counter * 2;
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
        }
    },
    actions: {},
    modules: {}
})
