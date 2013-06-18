class Ticket

  def set_venue(string)
    @venue = string
  end

  def get_venue
    @venue
  end

  def set_performer(string)
    @performer = string
  end

  def set_event(string)
    @event = string
  end

  def set_price(float)
    @price = float
  end

  def set_seat(string)
    @seat = string
  end

  def set_date(date)
    @date = date
  end

  # def availability_status
  #   "sold"
  # end
  def available?
    false
  end

  def sendtest(request)
    if self.respond_to?(request)
      self.send(request)
    else
      puts "no such information available"
    end
  end

  # puts "this is for: #{event}, at #{venue}. The performer is #{performer}"

end

