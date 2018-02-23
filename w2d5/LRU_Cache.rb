class LRUCache
    attr_accessor :c_hash, :c_arr

    def initialize(max_size)
      @c_hash = {}
      @c_arr = []
    end

    def count
      # returns number of elements currently in cache
      self.c_arr.length
    end

    def add(el)
      el_hash = el.hash
      if self.c_hash[el_hash].nil?
        if count == max_size - 1
          old = self.c_arr.shift
          self.c_hash[old.hash] = nil
        end
        self.c_arr << el
        self.c_hash[el_hash] = count - 1
      else
        self.c_hash[el_hash] = count - 1
        self.c_arr.delete(el)
        self.c_arr << el
      end
      # adds element to cache according to LRU principle

    end

    def show
      p self.c_arr
      # shows the items in the cache, with the LRU item first
    end

    private
    # helper methods go here!

  end
