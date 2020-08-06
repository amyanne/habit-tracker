class AddHabitNameToCompletedHabits < ActiveRecord::Migration[6.0]
  def change
    add_column :completed_habits, :habit_name, :string
  end
end
