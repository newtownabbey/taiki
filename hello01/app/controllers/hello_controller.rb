class HelloController < ApplicationController
  layout "standardLayout" # instead of looking for views/layouts/hello.html.erb to be the layout, Rails will now look for views/layouts/standardLayout.html.erb
  
  def index
    @message = 'Hello!'
    @count = 3
    @bonus = "This message came from the controller."
  end
end
