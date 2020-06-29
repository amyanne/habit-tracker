class HabitObjectsController < ApplicationController
  before_action :set_habit_object, only: [:show, :edit, :update, :destroy]

  # GET /habit_objects
  # GET /habit_objects.json
  def index
    @habit_objects = HabitObject.all
  end

  # GET /habit_objects/1
  # GET /habit_objects/1.json
  def show
  end

  # GET /habit_objects/new
  def new
    @habit_object = HabitObject.new
  end

  # GET /habit_objects/1/edit
  def edit
  end

  # POST /habit_objects
  # POST /habit_objects.json
  def create
    @habit_object = HabitObject.new(habit_object_params)

    respond_to do |format|
      if @habit_object.save
        format.html { redirect_to @habit_object, notice: 'Habit object was successfully created.' }
        format.json { render :show, status: :created, location: @habit_object }
      else
        format.html { render :new }
        format.json { render json: @habit_object.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /habit_objects/1
  # PATCH/PUT /habit_objects/1.json
  def update
    respond_to do |format|
      if @habit_object.update(habit_object_params)
        format.html { redirect_to @habit_object, notice: 'Habit object was successfully updated.' }
        format.json { render :show, status: :ok, location: @habit_object }
      else
        format.html { render :edit }
        format.json { render json: @habit_object.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /habit_objects/1
  # DELETE /habit_objects/1.json
  def destroy
    @habit_object.destroy
    respond_to do |format|
      format.html { redirect_to habit_objects_url, notice: 'Habit object was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_habit_object
      @habit_object = HabitObject.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def habit_object_params
      params.require(:habit_object).permit(:name, :date)
    end
end
