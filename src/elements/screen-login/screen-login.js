Polymer({
  is: 'screen-login',

  ready: function() {
    var app = this;
    window.app = this;
    this.logged = false;
  },

  login: function() {
    this.$.firebaseLogin.login();
  },

  userSuccessHandler: function(e) {
    if (!this.logged) {
      this.logged = true;
      this.fire('login', e.detail.user);
    }
  }
});
