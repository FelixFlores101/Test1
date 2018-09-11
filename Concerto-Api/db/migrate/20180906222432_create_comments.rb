class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer "event_id"
      t.integer "rating"
      t.text "comment"

      t.timestamps
    end
  end
end
