require 'spec_helper'

describe "Tasks" do
  describe "GET /tasks" do
   # it "works! (now write some real specs)" do
   #   # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
   #   get tasks_index_path
   #   response.status.should be(200)
   # end
    it "display some tasks" do
      visit tasks_path
      page.should have_content 'go to bed'
    end

  end
end
