Polymer({
  is: 'game-app',

  properties: {
    route: {
      type: String,
      value: 'login',
      notify: true
    },
  },

  ready: function() {
    var app = this;
  }
});
