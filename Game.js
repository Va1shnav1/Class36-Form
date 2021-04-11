class Game{
    constructor(){

    }
    getState(){
        var stateRef = database.ref('gameState')
        console.log("hello");
        stateRef.on("value", function(data){
            GS = data.val();
        })
        console.log(GS);
    }
    updateState(State){
        database.ref('/').update({
            gameState:State
        })
    }
    start(){
        if(GS===0){
            player=new Player()
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}