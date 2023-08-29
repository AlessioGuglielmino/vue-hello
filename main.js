const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Hello Vue!",
      black: "black white",
      url: "./img/foto.jpg",
    };
  },
}).mount("#app");
