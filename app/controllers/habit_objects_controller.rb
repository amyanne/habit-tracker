class HabitObjectsController < ApplicationController
  before_action :set_habit_object
    
  def index
      @habit_objects = habit_object.all
      render json: @habit_objects
  end 

  def show
      render json: @habit_object
  end 

  def create
      @habit_object = habit_object.new(habit_object_params)

      if @habit_object.save
          render json: @habit_object
      end 
  end 

  def delete
      @habit_object.destroy
  end 

  private
  def set_habit_object
      @habit_object = habit_object.find_by_id(params[:id])
  end
  
  def habit_object_params
      params.require(:habit_object).permit(:name, :date)
  end 
end
