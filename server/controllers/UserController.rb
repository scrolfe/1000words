require "securerandom"
require "pry"

class UserController < ApplicationController

  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    users = User.all
    shuffled = users.shuffle
    shuffled.to_json
  end

  get '/:token' do
    response['Access-Control-Allow-Origin'] = '*'
    token = params[:token]
    user = User.find_by(token: token)
    user.to_json
  end

  get '/friends/:token' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    token = params[:token]
    user = User.find_by(token: token)
    friends = user.friends
    friends.to_json
  end

  post '/register' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    user_content = JSON.parse(request.body.read)
    user = User.new(user_content)
    user.token = SecureRandom.hex
    user.save
    user.to_json
  end

  post '/login' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    user_details = JSON.parse(request.body.read)
    user = User.find_by({email: user_details["email"]})
    if user && user.authenticate(user_details["password"])
      user.to_json
    else
      {"response": "ACCESS DENIED"}.to_json
    end
  end

  patch '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    id = params[:id]
    user = User.find(id)
    user_content = JSON.parse(request.body.read)
    user.update_attributes(user_content)
    user.save
    User.all.to_json
  end

  delete '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    id = params[:id]
    user = User.find(id)
    user.destroy
    User.all.to_json
  end

end
