class RemoveDateFromHabitObjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :habit_objects, :date, :string
  end
end
