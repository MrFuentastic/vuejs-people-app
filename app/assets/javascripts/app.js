document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      people: [],
      newPersonName: "",
      newPersonBio: "",
      errors: []
    },
    mounted: function() {
      $.get('/api/v1/people.json', function(data) {
        this.people = data;
      }.bind(this));
    },
    methods: {
      toggleBio: function(currentPerson) {
        currentPerson.bioVisible = !currentPerson.bioVisible;
      },
      addNewPerson: function() {
        
        var params = {
          name: this.newPersonName,
          bio: this.newPersonBio
        };
        $.post('/api/v1/people.json', params, function(newPerson) {
          this.people.push(newPerson);
          this.newPersonName = "";
          this.newPersonBio = "";
          this.errors = [];
        }.bind(this)).fail(function(response) {
          this.errors = response.responseJSON.errors;
        }.bind(this));
        
      },
      deletePerson: function(currentPerson) {
        let index = this.people.indexOf(currentPerson);
        this.people.splice(index, 1);
      }
    },
    computed: {

    }
  });
});