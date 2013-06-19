class Ticket

  attr_reader :venue, :date
  attr_writer :price

  def initialize(venue, date)
    @venue     = venue
    @performer = performer
  end
end

