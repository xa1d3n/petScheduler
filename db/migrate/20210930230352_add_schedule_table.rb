class AddScheduleTable < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.datetime :date
    end

    create_table :appointments do |t|
      t.references :schedule
      t.string :pet_name
      t.string :pet_type
      t.string :time
    end
  end
end
