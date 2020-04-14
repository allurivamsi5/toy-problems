class LRU():
    def __init__(self):
        
        self.cache = []
    def put(self, key):
        if len(self.cache) < 4:
            if key in self.cache:
                self.cache.remove(key)
                self.cache.append(key)
            else:
                self.cache.append(key)
        else:
            if key in self.cache:
                self.cache.remove(key)
                self.cache.append(key)
            else:
                self.cache.pop(0)
                self.cache.append(key)
    def get(self, key):
        return key in self.cache
    def get_cache(self):
        return self.cache


def main():
    obj = LRU()
    obj.put(1)
    obj.put(2)
    print(obj.get(1))
    obj.put(1)
    obj.put(3)
    obj.put(4)
    print(obj.get_cache())

if __name__ == '__main__':
    main()
