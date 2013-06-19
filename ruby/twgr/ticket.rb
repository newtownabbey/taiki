class Ticket

  attr_reader :venue, :date
  attr_accessor :price

  def initialize(venue, date)
    @venue     = venue
    @performer = performer
  end
end

my_ticket = Ticket.new
my_ticket.price = 8.5

p
