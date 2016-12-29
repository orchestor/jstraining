var myModel = {
  name: 'Ashley',
  age: 24,
  friends: [{
    name: 'Bob',
    age: 21
  }, {
    name: 'Jane',
    age: 20
  }, {
    name: 'Megan',
    age: 38
  }, {
    name: 'Lin',
    age: 36
  }],
  search: ''
};

var myViewModel = new Vue({
  el: '#my_view',
  data: myModel
});
