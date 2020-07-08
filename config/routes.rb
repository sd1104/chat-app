Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  resources :groups, only: [:new, :create]
  resources :users, only: [:edit, :update]
end
