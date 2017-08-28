require 'bundler'
Bundler.require

require './models/UserModel'
require './models/ReactionModel'
require './models/FriendModel'

require './controllers/ApplicationController'
require './controllers/UserController'
require './controllers/ReactionController'
require './controllers/FriendController'

run Sinatra::Application


if ENV['DATABASE_URL']
  db = URI.parse(ENV['DATABASE_URL'])
  ActiveRecord::Base.establish_connection(
    adapter: 'postgresql',
    host: db.host,
    port: db.port,
    username: db.user,
    password: db.password,
    database: db.path[1..-1],
    encoding: 'utf8'
  )
else
  ActiveRecord::Base.establish_connection(
    adapter: 'postgresql',
    database: 'thousand_words'
  )
end


map('/users'){run UserController}
map('/reactions'){run ReactionController}
map('/friends'){run FriendController}
