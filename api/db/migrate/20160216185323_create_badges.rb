class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :text
      t.integer :points
      t.integer :student_id

      t.timestamps null: false
    end
  end
end
