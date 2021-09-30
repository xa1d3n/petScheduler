Rails.application.routes.draw do
  root 'static#index'
  namespace :api, defaults: { format: 'json' } do
    get 'index' => 'schedule#index'
    post 'destroy' => 'schedule#destroy'
    post 'move' => 'schedule#move'
  end
end
