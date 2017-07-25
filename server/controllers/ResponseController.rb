class ResponseController < ApplicationController
  get '/' do
    responses = Response.all()
    responses.to_json
  end

  get '/:id' do
    id = params[:id]
    response = Response.find(id)
    response.to_json
  end

  post '/' do
    response_content = JSON.parse(request.body.read)
    response = Response.new(response_content)
    response.save
    Response.all.to_json
  end

  patch '/:id' do
    id = params[:id]
    response_content = JSON.parse(request.body.read)
    response = Response.find(id)
    response.update_attributes(response_content)
    response.save
    Response.all.to_json
  end

  delete '/:id' do
    id = params[:id]
    response = Response.find(id)
    response.destroy
    responses.to_json
  end
end

#TODO: proofread
