require_relative '../ticket'

describe Ticket do

  describe "venue" do
    it "should be Town Hall" do
      expect(Ticket.new().venue).to eq("Town Hall")
    end
  end

  describe "available?" do
    it "should be not available" do
      expect(Ticket.new().available?).to eq(false)
    end
  end

end
