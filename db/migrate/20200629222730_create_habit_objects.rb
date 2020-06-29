class CreateHabitObjects < ActiveRecord::Migration[6.0]
  def change
    create_table :habit_objects do |t|
      t.string :name
      t.string :date

      t.timestamps
    end
  end
end
