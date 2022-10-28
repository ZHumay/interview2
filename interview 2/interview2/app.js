
function reverseArray(sentence) {
    let ret = new Array;
    for(let i = sentence.length-1; i >= 0; i--) {
        ret.push(sentence[i]);
    }
    return ret;
}

const a = ["sense", "make", "all", "will", "This"];
const b = reverseArray(a);
console.log(b)  ;




const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
function greetAliens(){
    console.log(`Oh powerful,${aliens[0]} we humans offer our unconditional surrender! `)
    console.log(`Oh powerful,${aliens[1]} we humans offer our unconditional surrender! `)
    console.log(`Oh powerful,${aliens[2]} we humans offer our unconditional surrender! `)
    console.log(`Oh powerful,${aliens[3]} we humans offer our unconditional surrender! `)
}
greetAliens()






   function justCoolStuff (){
    const coolStuff = [
        "gameboys",
        "skateboards",
        "backwards hats",
        "my room",
        "temporary tattoos"
      ];
      const myStuff = [
        "sweaters",
        "skateboards",
        "family-night",
        "my room",
      ];
coolStuff.sort()
myStuff.sort()
let i=coolStuff.length, x=myStuff.length ,arr=[]    ;
while(i>0 && x>0){
    i--;
    x--;
    if (coolStuff[i]> myStuff[x]) x++;
    else if (coolStuff[i]< myStuff[x]) i++;
    else arr.push(coolStuff[i])

}
console.log(arr)
   }
  justCoolStuff();






  const meal = [
    { name: "arugula", source: "plant" } ,

    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant"},
    { name: "olive oil", source: "plant" },
  ];
  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];
 

  function isTheDinnerVegan(array){
    for(let i=0; i<array.length; i++){
        if((array[i].source=='meat')){
            return false
        }
        else{
            return true;
        }
    }
  
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner))