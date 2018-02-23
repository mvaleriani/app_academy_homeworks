class LRUCache
    def initialize
      @c_hash = {}
      @c_arr = []
    end

    def count
      # returns number of elements currently in cache
      self.c_arr.length
    end

    def add(el)
      # self.c_
      # adds element to cache according to LRU principle

    end

    def show
      # shows the items in the cache, with the LRU item first
    end

    private
    attr_accessor :c_hash, :c_arr
    # helper methods go here!

  end
