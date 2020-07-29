class CompletedHabitsController < ApplicationController
    before_action :set_completed_habit
      
    def index
        @completed_habits = CompletedHabit.all
        render json: @completed_habits
    end 
  
  
    def create
  
        @completed_habit = CompletedHabit.new(completed_habit__params)
  
        if @completed_habit.save
            render json: @completed_habit
        end 
    end 
  
    def delete
        @completed_habit.destroy
    end 
  
    private
    def set_completed_habit
        @completed_habit = CompletedHabit.find_by_id(params[:id])
    end
    
    def habit_object_params
        params.permit(:completed_on, :habit_object_id)
    end 
  end
  