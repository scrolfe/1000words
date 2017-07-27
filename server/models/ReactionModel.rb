class Reaction < ActiveRecord::Base
  self.table_name = 'reactions'
  belongs_to :user, foreign_key: "reader_id"
end
