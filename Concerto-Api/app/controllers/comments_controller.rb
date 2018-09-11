class CommentsController < ApplicationController
        def index
            event = Event.find(params[:event_id])
            render json: {comments: event.comments}
        end
    
        def show
            @comment = Comment.find(params[:id])
            render json: { comment: @comment }  #renderjson
        end
    
        def create
            event = Event.find(params[:event_id])
            comment = event.comments.create comment_params
            render json: { comment: comment }
            
        end
    
        # def update
        #     comment = Comment.find(params[:id])
        #     if comment.update(event_params)
        #         render json: {comment: comment}
        #     else
        #         render json: { message: 'Some fields are invalid', errors: comment.errors}, status: :bad_request
        #     end
        # end
        
        def destroy
                @comment = Comment.find(params[:id])
                @comment.destroy
                render json: { message: "Comment #{params[:id]} deleted"}
        end
    
      private
      def comment_params
        params.require(:comment)    #it wants a json object
          .permit(
            :event_id,
            :rating,
            :comment
          )
      end
    end
    
