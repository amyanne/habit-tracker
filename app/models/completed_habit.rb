class CompletedHabit < ApplicationRecord
    validates :completed_on, presence: true
end
