class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string "event"
      t.string "band_name"
      t.text "place"
      t.text "date"

      t.timestamps
    end
  end
end
