class FriendController < ApplicationController
  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    friends = Friend.all
    friends.to_json
  end
  get '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    friend = Friend.find(id)
    friend.to_json
  end
end
