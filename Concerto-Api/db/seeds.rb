# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create([
    {
       event: "Taking the world tour",
       band_name: "This is a band name",
       place: "Irving Plaza",
       date: "9/18/18", 
    },
    {
        event: "whiplash",
        band_name: "band name 2",
        place: "Playstation Theatre",
        date: "10/31/18",
    },
    {
        event: "So this is music now?",
        band_name: "music is loud",
        place: "Gramercy Tavern",
        date: "11/23/18",
    }
])

Comment.create([
    {
       rating: "3",
       comment: "esjfekhfkejbfkjblf",
    },
    {
        rating: "5",
        comment: "eflehfliaeffebebbe bdjebbekj",
    },
    {
        rating: "6",
        comment: "kefhekdkjeblkjdbkbjjnjnlk",
    }
])