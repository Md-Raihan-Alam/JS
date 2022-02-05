function cakes(recipe, available) {
    let availableItem=[];
    let availableItemAmount=0;
    let totalCake=0;
    let moduleItems=available;
    let runAgain=true;
    for(let item in recipe){
        if(!moduleItems.hasOwnProperty(item)) {
            return 0;
        };
        if(moduleItems.hasOwnProperty(item)){
            availableItem.push(item);
        }
    }    
    let totalItem=availableItem.length;
    function makeCake(){
        for(let item in availableItem){
            let remainingItem=moduleItems[availableItem[item]]-recipe[availableItem[item]];
            moduleItems[availableItem[item]]=remainingItem;//this is how I finally managed to update it
        }
        totalCake++;
        console.log(moduleItems);
        for(let item in availableItem){
            if(!(recipe[availableItem[item]]<=moduleItems[availableItem[item]])){
                runAgain=false;
            }  
        }
        if(runAgain==true) makeCake();
        // return 'can make another';
    }
   for(let item in availableItem){
     if(recipe[availableItem[item]]<=moduleItems[availableItem[item]]){
        availableItemAmount++;
     }  
   }
   if(availableItemAmount==totalItem) makeCake();
   return totalCake;
} 

//another solution
/*
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}
*/