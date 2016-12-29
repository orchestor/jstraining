new Vue({
  el: '#app',
  data: {
    counter: 2
  },
  methods: {
    increment() {
      this.counter=this.counter*2;
    }
  }
});
