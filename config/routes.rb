Rails.application.routes.draw do
  scope :api do
    resources :habit_objects
  end 
  scope :api do 
    resources :completed_habits
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

