require_relative '../ticket'

describe Ticket do

  describe "venue" do
    it "should be Town Hall" do
      expect(Ticket.new().set_venue("Town Hall")).to eq("Town Hall")
    end
  end

  describe "available?" do
    it "should be not available" do
      expect(Ticket.new().available?).to eq(false)
    end
  end

  describe "method available?" do
    it "should test available methods" do
      expect(Ticket.new().sendtest('performer')).to eq("Mark Twain")
    end
  end
  

end
