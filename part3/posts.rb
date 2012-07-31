require 'sinatra'
require 'json'
require 'active_record'

ActiveRecord::Base.include_root_in_json = false

class Post < ActiveRecord::Base
end

Post.establish_connection(
    :adapter => "sqlite3",
    :database => "data.db"
)

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/posts' do
    content_type :json
    Post.last.to_json
end

post '/posts' do
    data = JSON.parse request.body.read

    post = Post.new
    post.title = data['title']
    post.text = data['text']

    post.save
end

put '/posts/:id' do
    data = JSON.parse request.body.read

    post = Post.find params[:id]
    post.title = data['title']
    post.text = data['text']

    post.save
end

delete '/posts/:id' do
    Post.destroy params[:id]
end