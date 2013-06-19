class Ticket

  attr_reader :venue, :date
  attr_accessor :price

  def initialize(venue, date)
    @venue     = venue
    @performer = performer
  end
end

