Polymer({
  is: 'screen-map',

  properties: {
    userId: String
  },

  attached: function() {
    console.log(this.userId);
  }
});
