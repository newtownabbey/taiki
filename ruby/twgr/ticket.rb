class Ticket

  def venue
    "Town Hall"
  end

  def performer
    "Mark Twain"
  end

  def event
    "Author's reading"
  end

  def price
    5.50
  end

  def seat
    "secondary balcony, row J, seat 12"
  end

  def date
    "01/02/03"
  end

  # def availability_status
  #   "sold"
  # end
  def available?
    false
  end


  # puts "this is for: #{event}, at #{venue}. The performer is #{performer}"

end
