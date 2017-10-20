# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Person.create(
  [
    {
      name: "person 1",
      bio: "person 1 was a person, who was lonely, cause 1 is the loneliest number"
    },
    {
      name: "person 2",
      bio: "person 2 was also lonely, until person 1 and person 2 found each other, but they were still lonely, cause 2 is the second loneliest number, after 1"
    },
    {
      name: "cookie monster",
      bio: "addicted to love. its in the cookies. they were made with love."
    },
    {
      name: "the Count",
      bio: "called the Count because he loves to *****"
    }
  ]
)