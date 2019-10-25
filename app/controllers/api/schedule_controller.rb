class Api::ScheduleController < ApplicationController
  def index
    render json: { message: 'Get schedule' }
  end
end
