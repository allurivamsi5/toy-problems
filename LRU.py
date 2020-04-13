class LRU:
    def __init__(self, cache_size):
        self.cache_size = cache_size
        self.cache = []
