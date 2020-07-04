class HabitObjectsController < ApplicationController
  skip_before_action :verify_authenticity_token

   before_action :set_habit_object
    
  def index
      @habit_objects = HabitObject.all
      render json: @habit_objects
  end 

  def show
      render json: @habit_object
  end 

  def create
    puts "!!!!!!!!!!!!!!!!!@@@@@@@@@@@22 #{habit_object_params}"
      @habit_object = HabitObject.new(habit_object_params)

      if @habit_object.save
          render json: @habit_object
      end 
  end 

  def delete
      @habit_object.destroy
  end 

  private
  def set_habit_object
      @habit_object = HabitObject.find_by_id(params[:id])
  end
  
  def habit_object_params
      params.permit(:name, :date)
  end 
end
