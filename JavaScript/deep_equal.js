function deepEqual(a, b) {

    if (a === b) return true;

    if (a == null || typeof a != "object" || b == null || typeof b != "object")
        return false;

    var propsInA = 0, propsInB = 0;
    
    for (var prop in a)
         propsInA += 1;

    for (var prop in b) {
        propsInB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }
    return propsInA == propsInB;
}
var obj = {foo:1,object:2};
console.log(deepEqual (obj,obj));//true
console.log(deepEqual (obj,{foo:2,object:2}));//false
console.log(deepEqual (obj,{foo:1,object:2}));//true
console.log(deepEqual (obj,{foo:2,object:1}));//false
console.log(deepEqual (obj,{foo:1}));//false
console.log(deepEqual (obj));//false
console.log(deepEqual ({foo:1,object:2},obj));//true
