class ApplicationController < Sinatra::Base

  options '*' do
    response['Access-Control-Allow-Origin'] = '*'
    response['Access-Control-Allow-Headers'] = 'content-type'
    response['Access-Control-Allow-Methods'] = 'GET,OPTIONS,POST,PATCH,DELETE'
    content_type :json
    200
  end

  # before do
  #   response['Access-Control-Allow-Origin'] = '*'
  #   content_type :json
  #
  #   path = request.fullpath.split("?")[0] # gets first part of /page?token=12345
  #   if ['/users/login', '/users/register'].include?(path) || request.request_method == 'OPTIONS'
  #     pass
  #   end
  #   token = params[:token]
  #   user = User.find_by(token: token)
  #   if user
  #     pass
  #   else
  #     halt 403
  #   end
  # end
  #
end
