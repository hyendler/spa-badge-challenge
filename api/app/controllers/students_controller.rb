class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :update, :destroy]
  def index
    @students = Student.all
    render json: @students
  end

  def show
    render json: @student, include: :badges
  end

  def update
  end

  def create
  end

  def destroy
  end
end

def set_student
  @student = Student.find(params[:id])
end

def student_params
  params.permit(:name)
end
