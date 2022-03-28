
var score=-1;
var highscore=0;

var userPattern=[];

    $(".green").click(function(){
        var audio=new Audio("sounds/green.mp3");
        audio.play();
        //score++;
        //$(".score").text("Score : "+score)
        buttonAnimation("green");
        userPattern.push("green");

        if(start==false)
            wrongAnswer();
        else if(userPattern.length==formedPattern.length){
            if( checkAnswer(userPattern,formedPattern)==true)
                setTimeout(function() {
                    //your code to be executed after 1 second
                    nextColor();
                    }, 1000);
            else
                wrongAnswer();
        }

    });

    $(".blue").click(function(){
        var audio=new Audio("sounds/blue.mp3");
        audio.play();
        buttonAnimation("blue");
        userPattern.push("blue");

        if(start==false)
            wrongAnswer();
        else if(userPattern.length==formedPattern.length){
            if( checkAnswer(userPattern,formedPattern)==true)
                    setTimeout(function() {
                    //your code to be executed after 1 second
                    nextColor();
                    }, 1000);
            else
                wrongAnswer();
        }
    });

    $(".red").click(function(){
        var audio=new Audio("sounds/red.mp3");
        audio.play();
        buttonAnimation("red");
        userPattern.push("red");

        if(start==false)
            wrongAnswer();
        else if(userPattern.length==formedPattern.length){
            if( checkAnswer(userPattern,formedPattern)==true)
                        setTimeout(function() {
                    //your code to be executed after 1 second
                    nextColor();
                    }, 1000);
            else
                wrongAnswer();
        }
    });

    $(".yellow").click(function(){
        var audio=new Audio("sounds/yellow.mp3");
        audio.play();
        buttonAnimation("yellow");
        userPattern.push("yellow");

        if(start==false)
            wrongAnswer();
        else if(userPattern.length==formedPattern.length){
            if( checkAnswer(userPattern,formedPattern)==true)
                    setTimeout(function() {
                    //your code to be executed after 1 second
                    nextColor();
                    }, 1000);
            else
                wrongAnswer();
        }
    });
    


    function buttonAnimation(color){
        $("."+color).addClass("pressed");
        setTimeout(function() {
            //your code to be executed after 1 second
            $("."+color).removeClass("pressed");
            }, 100);
    }

function checkAnswer(a, b){
    if(a.length!=b.length)
    {
        console.log(false)
        return false;
    }
    else
    {
    // Comparing each element of array
    for(var i=0;i<a.length;i++)
        if(a[i]!=b[i])
        {
            console.log(false);
            return false;
        }
    console.log(true);
    return true;
    }
}

function wrongAnswer(){
    $("body").addClass("game-over");
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-title").text("Game Over.. Try Again ? Press any key to restart");
    score=-1;
    start=false;
    formedPattern=[];

    setTimeout(function() {
        //your code to be executed after 1 second
        $("body").removeClass("game-over");
        }, 100);
}

var colors=["green","red","yellow","blue"];

var formedPattern=[];

function nextColor(){
    score++;
    $("#level-title").text("Game started ! Level : "+score);
    if(score>highscore)
        highscore=score;
    $(".score").text("Score : "+score+" | High Score : "+highscore);

    userPattern=[];
    var randomChoosenNumber = Math.floor(Math.random()*4);
    buttonAnimation(colors[randomChoosenNumber]);
    formedPattern.push(colors[randomChoosenNumber]);

}

var start=false;
function beginGame(){
    
        $("body").keypress(function(){
            if(start==false){
            $("#level-title").text("Game started ! Level : 0");
            start =true;

            if(start==true)
            nextColor();
            }
        });

    
}

beginGame();




