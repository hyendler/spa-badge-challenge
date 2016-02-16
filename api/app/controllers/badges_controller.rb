class BadgesController < ApplicationController
  before_action :set_badge, only: [:show, :update, :destroy]

  def index
    @badges =
  end

  def show
  end

  def update
  end

  def create
  end

  def destroy
  end
end
