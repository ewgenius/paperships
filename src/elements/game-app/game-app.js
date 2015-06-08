Polymer({
  is: 'game-app',

  properties: {
    route: {
      type: String,
      value: 'login',
      notify: true
    },

    user: {
      type: Object,
      value: null,
      notify: true
    }
  },

  ready: function() {
    this.logged = this.user != null;
    if(this.logged) {
      this.route = 'map';
    }
    window.app = this;
  },

  login: function() {
    this.$.firebaseLogin.login();
  },

  logout: function() {
    this.$.firebaseLogin.logout();
    this.user = null;
    this.route = 'login';
    this.logged = false;
  },

  loginHandler: function(e) {
    if (!this.logged) {
      this.route = 'map';
      this.logged = true;
    }
  }
});
