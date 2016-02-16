# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


require 'faker'

10.times do
  Student.create(name: Faker::Name.name)
end

20.times do
  Badge.create(text: Faker::Company.catch_phrase,
                points: 0,
                student_id: rand(1...10))
end
