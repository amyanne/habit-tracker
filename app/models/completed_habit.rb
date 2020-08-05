class CompletedHabit < ApplicationRecord
    validates :habit_object_id, presence: true
end
