class User < ActiveRecord::Base
  self.table_name = 'users'
  has_and_belongs_to_many :likes, # the relationship name
    class_name: "User", #tells that it is a user relationship
    join_table: :reactions, #the middlepoint
    foreign_key: :reader_id, #start to middlepoint
    association_foreign_key: :writer_id #middle to end

  has_and_belongs_to_many :friends, # the relationship name
    class_name: "User", #tells that it is a user relationship
    join_table: :friends, #the middlepoint
    foreign_key: :friend1_id, #start to middlepoint
    association_foreign_key: :friend2_id #middle to end

  has_secure_password

end
