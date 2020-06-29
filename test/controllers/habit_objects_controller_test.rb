require 'test_helper'

class HabitObjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @habit_object = habit_objects(:one)
  end

  test "should get index" do
    get habit_objects_url
    assert_response :success
  end

  test "should get new" do
    get new_habit_object_url
    assert_response :success
  end

  test "should create habit_object" do
    assert_difference('HabitObject.count') do
      post habit_objects_url, params: { habit_object: { date: @habit_object.date, name: @habit_object.name } }
    end

    assert_redirected_to habit_object_url(HabitObject.last)
  end

  test "should show habit_object" do
    get habit_object_url(@habit_object)
    assert_response :success
  end

  test "should get edit" do
    get edit_habit_object_url(@habit_object)
    assert_response :success
  end

  test "should update habit_object" do
    patch habit_object_url(@habit_object), params: { habit_object: { date: @habit_object.date, name: @habit_object.name } }
    assert_redirected_to habit_object_url(@habit_object)
  end

  test "should destroy habit_object" do
    assert_difference('HabitObject.count', -1) do
      delete habit_object_url(@habit_object)
    end

    assert_redirected_to habit_objects_url
  end
end
