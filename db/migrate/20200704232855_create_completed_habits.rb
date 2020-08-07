class CreateCompletedHabits < ActiveRecord::Migration[6.0]
  def change
    create_table :completed_habits do |t|
      t.string :completed_on
      t.references :habit_object, null: false, foreign_key: true

      t.timestamps
    end
  end
end
