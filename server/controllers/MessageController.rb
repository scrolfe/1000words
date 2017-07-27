class MessageController < ApplicationController
  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    messages = Message.all()
    messages.to_json
  end

  get '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    message = Message.find(id)
    message.to_json
  end

  post '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    message_content = JSON.parse(request.body.read)
    message = Message.new(message_content)
    message.save
    Message.all.to_json
  end

  patch '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    message_content = JSON.parse(request.body.read)
    message = Message.find(id)
    message.update_attributes(message_content)
    message.save
    Message.all.to_json
  end

  delete '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    message = Message.find(id)
    message.destroy
    messages.to_json
  end
end

#TODO: proofread
