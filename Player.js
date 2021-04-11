class Player{
    constructor(){

    }
    update(n1){
        var playerIndex = "Player" + pCount
        database.ref(playerIndex).set({
            Name:n1
        })
    }
    updateCount(Count){
        database.ref('/').update({
            playerCount:Count
        })
    }
    getCount(){
      var countRef = database.ref("playerCount");  
      countRef.on("value", function(data){
        pCount = data.val();
      })
      console.log(pCount)

    }
}