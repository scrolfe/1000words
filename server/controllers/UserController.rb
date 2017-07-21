class UserController < ApplicationController
  get '/' do
    users = User.all()
    users.to_json
  end

  get '/:id' do
    id = params[:id]
    user = User.find(id)
    user.to_json
  end

  post '/' do
    user_content = JSON.parse(request.body.read)
    user = User.new(user_content)
    user.save
    User.all.to_json
  end

  patch '/:id' do
    id = params[:id]
    user_content = JSON.parse(request.body.read)
    user = User.find(id)
    user.update_attributes(user_content)
    user.save
    User.all.to_json
  end

  delete '/:id' do
    id = params[:id]
    user = User.find(id)
    user.destroy
    users.to_json
  end
end

#TODO: proofread
