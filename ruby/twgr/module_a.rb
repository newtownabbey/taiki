module MyFirstModule
  def say_hello
    puts "hello"
  end

end

class ModuleTester
  include MyFirstModule
end

mt = ModuleTester.new
mt.say_hello

module Stacklike

  def stack
    @stack ||= [] # shortcut to @stack || stack = []
  end

  def add_to_stack(obj)
    stack.push(obj)
  end

  def take_from_stack
    stack.pop
  end
end


