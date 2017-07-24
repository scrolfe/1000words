require 'bundler'
Bundler.require

require './models/MessageModel'
require './models/UserModel'

require './controllers/ApplicationController'
require './controllers/MessageController'
require './controllers/UserController'

run Sinatra::Application

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'one_thousand_words'
)

map('/users'){run UserController}
map('/messages'){run MessageController}
