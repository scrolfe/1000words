require 'bundler'
Bundler.require

require './models/MessageModel'
require './models/UserModel'
require './models/ReactionModel'

require './controllers/ApplicationController'
require './controllers/MessageController'
require './controllers/UserController'
require './controllers/ReactionController'

run Sinatra::Application

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'one_thousand_words'
)

map('/users'){run UserController}
map('/messages'){run MessageController}
map('/reactions'){run ReactionController}
