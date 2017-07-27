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
    reactions = user.reactions
    reactions.to_json
  end

  post '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    reaction_content = JSON.parse(request.body.read)
    reaction = Reaction.new(reaction_content)
    reaction.save
    Reaction.all.to_json
    token = params[:token]
  end

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
