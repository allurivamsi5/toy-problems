from LRU import LRU
class LRUTest:
    def __init__(self):
        self.lru = LRU()
        
    def put(self, key):
        return self.lru.put(key)
    def get(self, key):
        return self.lru.get(key)
    def get_cache(self):
        return self.lru.get_cache()

def main():
    Test_obj = LRUTest()
    Test_obj.put(2)
    Test_obj.put(1)
    Test_obj.put(1)
    Test_obj.put(3)
    Test_obj.put(4)
    Test_obj.put(5)
    assert True == Test_obj.get(1)
    assert [1,3,4,5] == Test_obj.get_cache()
    Test_obj.put(6)
    assert [3,4,5,6] == Test_obj.get_cache()
    print("All the test cases are passed!")

if __name__ == '__main__':
    main()