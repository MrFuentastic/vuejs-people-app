document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      people: [
        {
          name: "person 1",
          bio: "person 1 was a person, who was lonely, cause 1 is the loneliest number",
          bioVisible: false
        },
        {
          name: "person 2",
          bio: "person 2 was also lonely, until person 1 and person 2 found each other, but they were still lonely, cause 2 is the second loneliest number, after 1",
          bioVisible: false
        },
        {
          name: "cookie monster",
          bio: "addicted to love. its in the cookies. they were made with love.",
          bioVisible: false
        },
        {
          name: "the Count",
          bio: "called the Count because he loves to *****",
          bioVisible: false
        },
      ],
      newPersonName: "",
      newPersonBio: ""
    },
    mounted: function() {

    },
    methods: {
      toggleBio: function(currentPerson) {
        currentPerson.bioVisible = !currentPerson.bioVisible;
      },
      addNewPerson: function() {
        if (this.newPersonName !== "" && this.newPersonBio !== "") {
          let newPerson = {
            name: this.newPersonName,
            bio: this.newPersonBio,
            bioVisible: false
          };
          this.people.push(newPerson);
        }
        this.newPersonName = "";
        this.newPersonBio = "";
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