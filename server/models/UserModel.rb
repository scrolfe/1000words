class User < ActiveRecord::Base
  self.table_name = 'users'
  has_many :reactions, foreign_key: "reader_id"
end
