Polymer({
  is: 'screen-login',

  ready: function() {
    var app = this;
    window.app = this;
  },

  login: function() {
    this.$.firebaseLogin.login();
  },

  userSuccessHandler: function(data) {
  }
});
