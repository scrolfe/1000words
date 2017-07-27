class ReactionController < ApplicationController
  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    reactions = Reaction.all()
    reactions.to_json
  end

  get '/:token' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    token = params[:token]
    user = User.find_by(token: token)
    reactions = user.likes
    reactions.to_json
    # friends = user.friends #
    # friends.to_json #
  end

  post '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    reaction_content = JSON.parse(request.body.read)
    reaction = Reaction.new(reaction_content)
    if Reaction.find_by(reader_id: reaction_content["writer_id"], writer_id: reaction_content["reader_id"])
      friend = Friend.new(friend1_id: reaction_content["reader_id"], friend2_id: reaction_content["writer_id"])
      friend.save
      friend2 = Friend.new(friend2_id: reaction_content["reader_id"], friend1_id: reaction_content["writer_id"])
      friend2.save
    end
    reaction.save
    Reaction.all.to_json
  end

#804d7a29ad0d1b1590a8af7b8dff466c 17
#45fe805a98480b7e0cd466282146b25b 16

  patch '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    reaction_content = JSON.parse(request.body.read)
    reaction = Reaction.find(id)
    reaction.update_attributes(reaction_content)
    reaction.save
    Reaction.all.to_json
  end

  delete '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    reaction = Reaction.find(id)
    reaction.destroy
    reactions.to_json
  end
end

#TODO: proofread
