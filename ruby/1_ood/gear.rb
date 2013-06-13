class Gear
    attr_reader :chainring, :cog, :rim, :tire
    def initialize(chainring, cog, rim, tire)
        @chainring = chainring
        @cog       = cog
        @rim       = rim
        @tire       = tire
    end

    def ratio
        chainring / cog.to_f
    end

    def gear_inches
        ratio * diameter
    end

    def diameter 
      rim + (tire * 2)
    end
end

puts Gear.new(52, 11, 26, 1.5).ratio
puts Gear.new(30, 27, 29, 1.5).ratio

