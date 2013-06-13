obj = Object.new

def obj.c2f(c)
  c * 9.0 / 5 + 32
end

def obj.ego
  puts "from method ego: #{self}"
end

puts "100 degree celsius are #{obj.c2f(100)} degree fahrenheit"
puts obj.ego
puts "from main: #{self}"
