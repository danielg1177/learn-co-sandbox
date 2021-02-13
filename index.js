function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}
var myScope = outerFunction();
myScope;

function find(array, criteriaFn) {
    let current = Array
    let next = []
    
    while (current.length === 0) {
        
        if (criteriaFn(current)) {
            return current 
        }
        
        if (Array.isArray(current)) {
            for (let i = 0; i < current.length; i++) { 
              next.push(current[i])
              }
            }
            current = next.shift()
          }
        return null
      }
      
      