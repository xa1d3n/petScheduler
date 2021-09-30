# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_30_230352) do

  create_table "appointments", force: :cascade do |t|
    t.integer "schedule_id"
    t.string "pet_name"
    t.string "pet_type"
    t.string "time"
    t.index ["schedule_id"], name: "index_appointments_on_schedule_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.datetime "date"
  end

end
