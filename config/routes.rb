Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :groups, only: [:index,:new, :create, :edit, :update]
  resources :users, only: [:edit, :update]
end
