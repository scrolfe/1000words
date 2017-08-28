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

  # post '/' do (the post request is fulfilled in the reaction controller.
  # 'friending' occurs on the occassion when 2 users like each other's bio

  # the following route should not exist -
  # TODO deletion should occur on the deletion of a reaction (lack of mutual 'like')
  # on either user

  delete '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    friend = Friend.find(id)
    friend.destroy
    friends = Friend.all
    friends.to_json
  end
end
