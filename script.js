const { createApp } = Vue

  createApp({
    data() {
      return {
        keyTodo : '',
        newTodo : '',
        todos : [
          {
            text: "Portare la spesa a casa",
            done: true,
          },
          {
            text: "Aggiornare pc",
            done: false,
          },
          {
            text: "cena per venerdì sera",
            done: true,
          },
          {
            text: "Chiamare dottore",
            done: false,
          },
          {
            text: "Partita padel",
            done: true,
          },
        ]
      }
    },
    methods : {

    }
  }).mount('#app');