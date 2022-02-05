//expanation with data structure set
function mySet(){
    let collection=[];
    this.has=function(ele){
        return (collection.indexOf(ele)!==-1);
    }
    this.values=function(){
        return collection;
    }
    this.add=function(ele){
        collection.push(ele);
    }
    this.remove=function(ele){
        if(!this.has(ele)){
            return undefined;
        }else{
            let index=collection.indexOf(ele);
            collection.splice(index,1);
            return true;
        }
    }
    this.union=function(other){
        let unionSet=new mySet();
        let firstSet=this.values();
        let otherSet=other.values();
        firstSet.forEach(function(ele){
            if(!unionSet.has(ele)){
                unionSet.add(ele);
            }
        });
        otherSet.forEach(function(ele){
            if(!unionSet.has(ele)){
                unionSet.add(ele);
            }
        });
        return unionSet.values();
    }
}
let setA=new mySet();
let setB=new mySet();
setA.add(1);
setA.add(1);
setA.add(2);
setA.add(2);
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
console.log(setA.union(setB));