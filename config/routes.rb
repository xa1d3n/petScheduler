Rails.application.routes.draw do
  root 'static#index'
  namespace :api, defaults: { format: 'json' } do
    get 'index' => 'schedule#index'
  end
end
