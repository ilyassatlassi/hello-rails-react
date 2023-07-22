Rails.application.routes.draw do
  namespace :api do
    get '/random_greeting', to: 'greetings#random'
    end
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
