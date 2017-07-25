class ReactionController < ApplicationController
  get '/' do
    reactions = Reaction.all()
    reactions.to_json
  end

  get '/:id' do
    id = params[:id]
    reaction = Reaction.find(id)
    reaction.to_json
  end

  post '/' do
    reaction_content = JSON.parse(request.body.read)
    reaction = Reaction.new(reaction_content)
    reaction.save
    Reaction.all.to_json
  end

  patch '/:id' do
    id = params[:id]
    reaction_content = JSON.parse(request.body.read)
    reaction = Reaction.find(id)
    reaction.update_attributes(reaction_content)
    reaction.save
    Reaction.all.to_json
  end

  delete '/:id' do
    id = params[:id]
    reaction = Reaction.find(id)
    reaction.destroy
    reactions.to_json
  end
end

#TODO: proofread
