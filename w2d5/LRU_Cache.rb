class LRUCache
    attr_accessor :c_hash, :c_arr

    def initialize
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
        self.c_arr << el
        self.c_hash[el_hash] = count - 1


      else
        self.c_hash[el_hash] = el
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
