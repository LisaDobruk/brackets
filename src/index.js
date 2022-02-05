module.exports = function check(str, bracketsConfig) {

let bracketsPair = {};
for(let i = 0; i < bracketsConfig.length; i++){
    let key = [bracketsConfig[i][0]];
    let value = bracketsConfig[i][1];
   bracketsPair[key] = value;
}

let stack = [];
  for(let i = 0; i < str.length; i++){
      let currentElement = str[i];
      let topElement = stack[stack.length - 1];
      let partBrecket = bracketsPair[topElement];
     if(partBrecket === currentElement){
              stack.pop();
      }else{
          stack.push(currentElement);
      }
  }
  return stack.length === 0;
}
