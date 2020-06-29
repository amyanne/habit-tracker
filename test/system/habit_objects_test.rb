require "application_system_test_case"

class HabitObjectsTest < ApplicationSystemTestCase
  setup do
    @habit_object = habit_objects(:one)
  end

  test "visiting the index" do
    visit habit_objects_url
    assert_selector "h1", text: "Habit Objects"
  end

  test "creating a Habit object" do
    visit habit_objects_url
    click_on "New Habit Object"

    fill_in "Date", with: @habit_object.date
    fill_in "Name", with: @habit_object.name
    click_on "Create Habit object"

    assert_text "Habit object was successfully created"
    click_on "Back"
  end

  test "updating a Habit object" do
    visit habit_objects_url
    click_on "Edit", match: :first

    fill_in "Date", with: @habit_object.date
    fill_in "Name", with: @habit_object.name
    click_on "Update Habit object"

    assert_text "Habit object was successfully updated"
    click_on "Back"
  end

  test "destroying a Habit object" do
    visit habit_objects_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Habit object was successfully destroyed"
  end
end
