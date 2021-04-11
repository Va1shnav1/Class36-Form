class Form {
    constructor(){

    }
    display(){
        var title = createElement("H1");
        title.position(220, 50);
        title.html("Multiplayer Car Racing");
        var L1 = createElement("H2");
        L1.position(300, 100);
        L1.html("Enter your name");
        var input = createInput("Enter Name Here");
        input.position(300, 150);
        var button = createButton("PLAY");
        button.position(360, 230);
        var greeting = createElement("H2");
        greeting.position(320, 100);

        button.mousePressed(function(){
            L1.hide();
            input.hide();
            button.hide();
            var name = input.value();
            pCount++;
            player.update(name);
            player.updateCount(pCount);
            greeting.html("Welcome " + name);
        })
    }
}