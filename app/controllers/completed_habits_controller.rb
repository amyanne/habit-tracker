class CompletedHabitsController < ApplicationController
    before_action :set_completed_habit
    skip_before_action :verify_authenticity_token
      
    def index
        # habits = Habit.all
        @completed_habits = CompletedHabit.all
        @completed_habits.map {|ch| 
        habit_name = HabitObject.find_by id: (ch.habit_object_id)
        
        ch[:habit_name] = habit_name.name
        }
        render json: @completed_habits
    end 
  
  
    def create
  
        @completed_habit = CompletedHabit.new(completed_habit_params)
  
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
    
    def completed_habit_params
        params.permit(:completed_on, :habit_object_id, :completed_habit)
    end 
  end
  