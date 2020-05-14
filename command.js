let input = document.getElementById('command')


input.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
       let content = input.value;
        switch(content){
            case '/git':
                console.log('show git')
                break;
            case '/yt':
                console.log('opening YouTube...')
                break;
            case '/':
                console.log('incorrect command')
                break;
        }
    }
})

/// JS Class structures

class htmlContainer{
    constructor(isIsolated){
        this.isIsolated = isIsolated;
    }
   isolateElement(){
       return this.isIsolated = true;
   }
}

let htmlDiv = new htmlContainer(false);

//htmlDiv.isolateElement();

class htmlDependecies extends htmlContainer{

}

console.log(htmlDiv.isIsolated);


/////////////////////////////