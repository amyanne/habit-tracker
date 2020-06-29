json.extract! habit_object, :id, :name, :date, :created_at, :updated_at
json.url habit_object_url(habit_object, format: :json)
