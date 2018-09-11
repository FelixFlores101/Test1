class EventsController < ApplicationController
    def index
        render json: {events: Event.all}, include: :comments
    end

    def show
        @event = Event.find(params[:id])
        render json: { event: @event }, include: :comments
    end

    def create
        event = Event.create! event_params
        puts event
        render json: { event: event }
        
    end

    def update
        event = Event.find(params[:id])
        if event.update(event_params)
            render json: {event: event}
        else
            render json: { message: 'Some fields are invalid', errors: event.errors}, status: :bad_request
        end
    end

    def destroy
            @event = Event.find(params[:id])
            @event.destroy
            render json: { message: "Event #{params[:id]} deleted"}
    end

  private
  def event_params
    params.require(:event)    #it wants a json object
      .permit(
        :event,
        :band_name,
        :place,
        :date
      )
  end
end
