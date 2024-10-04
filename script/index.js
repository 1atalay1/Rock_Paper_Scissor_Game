var playerSelect=false;
var cards=["rock","paper","scissor"];
var lang="eng";
var selectedOption=null;
var isPressed=false;
$("#english").click(function(){
    if(lang!=="eng"){
        if($("h1").text()==="Rock Paper Scissors"){
            $("h1").text("Rock Paper Scissors");
           }
            else{
                if($("h1").text()==="Berabere"){
                    $("h1").text("Draw");
                }
                else if ($("h1").text()==="Kazandınız!!!"){
                    $("h1").text("You Won!!!");
                }
                else {
                    $("h1").text("You Lost");
                }
            }
    }
    lang="eng";
    

    $(".plybtn").text("PLAY");
    $(".player-selection p").text("Choose one of the below options");
    $(".rock").text("Rock");
    $(".paper").text("Paper");
    $(".scissors").text("Scissors");
   
});
$("#turkish").click(function(){
   
    if(lang!=="tr"){
        if($("h1").text()==="Taş Kağıt Makas"){
            $("h1").text("Taş Kağıt Makas");
            }
            else{
                if($("h1").text()==="Draw"){
                    $("h1").text("Berabere");
                }
                else if ($("h1").text()==="You Won!!!"){
                    $("h1").text("Kazandınız!!!");
                }
                else{
                    $("h1").text("Kaybettiniz");
                }
            }
    }
    $(".plybtn").text("OYNA");
    $(".player-selection p").text("Aşağıdaki seçeneklerden birini seç");
    $(".rock").text("Taş");
    $(".paper").text("Kağıt");
    $(".scissors").text("Makas");
    lang="tr";
    
});
function randomNumberCreator(){
    var random=Math.floor(Math.random()*3);
    return random;
}

for(var i=0;i<document.querySelectorAll(".option-button").length;i++){
    document.querySelectorAll(".option-button")[i].addEventListener("click",function(){
           if(!playerSelect){
            this.classList.add("option-button-active");
            playerSelect=true;
            selectedOption=this;
           }
           else{
                selectedOption.classList.remove("option-button-active");
                this.classList.add("option-button-active");
                playerSelect=true;
                selectedOption=this;
           }
    });
}

$(".plybtn").click(function(){
    if(playerSelect && !isPressed){
       isPressed=true;
            
            console.log(isPressed);
            var cpuSelect=cards[randomNumberCreator()];
        setTimeout(function(){
            $(".player img").attr("src","./images/rock.png");
            if(lang==="tr"){
                var audio=new Audio("./sounds/taş_tr.mp3");
                audio.play();
            }
            else{
                var audio=new Audio("./sounds/rock_eng.mp3");
                audio.play();
            }
        },750); 
        setTimeout(function(){
            $(".player img").attr("src","./images/paper.png");
            if(lang==="tr"){
                var audio=new Audio("./sounds/kağıt_tr.mp3");
                audio.play();
            }
            else{
                var audio=new Audio("./sounds/paper_eng.mp3");
                audio.play();
            }
        },1500);   
        setTimeout(function(){
            $(".player img").attr("src","./images/scissor.png");
            if(lang==="tr"){
                var audio=new Audio("./sounds/makas_tr.mp3");
                audio.play();
            }
            else{
                var audio=new Audio("./sounds/scissor_eng.mp3");
                audio.play();
            }
        },2250);    
        setTimeout(function(){
            $(".player1 img").attr("src","./images/"+selectedOption.classList[1]+".png");
            $(".cpu img").attr("src","./images/"+cpuSelect+".png");
        },3000);

        setTimeout(function(){
            if(lang==="tr"){
                switch(selectedOption.classList[1]){
                    case "paper":
                        switch(cpuSelect){
                            case "paper":
                                $("h1").text("Berabere");
                                break;
                            case "rock":
                                $("h1").text("Kazandınız!!!");
                                var audio=new Audio("./sounds/victory.mp3");
                                audio.play();
                                break;
                            case "scissor":
                                $("h1").text("Kaybettiniz");
                                var audio=new Audio("./sounds/fail.mp3");
                                audio.play();
                                break;
                        }
                        break;
                    case "rock":
                        switch(cpuSelect){
                            case "paper":
                                $("h1").text("Kaybettiniz");
                                var audio=new Audio("./sounds/fail.mp3");
                                audio.play();
                                break;
                            case "rock":
                                $("h1").text("Berabere");
                                break;
                            case "scissor":
                                $("h1").text("Kazandınız!!!");
                                var audio=new Audio("./sounds/victory.mp3");
                                audio.play();
                                break;
                        }
                        break;
                    case "scissor":
                        switch(cpuSelect){
                            case "paper":
                                $("h1").text("Kazandınız!!!");
                                var audio=new Audio("./sounds/victory.mp3");
                                audio.play();
                                break;
                            case "rock":
                                $("h1").text("Kaybettiniz");
                                var audio=new Audio("./sounds/fail.mp3");
                                audio.play();
                                break;
                            case "scissor":
                                $("h1").text("Berabere");
                                break;
                        }
                        break;
                        
                }
            }
            else{
                switch(selectedOption.classList[1]){
                    case "paper":
                        switch(cpuSelect){
                            case "paper":
                                $("h1").text("Draw");
                                break;
                            case "rock":
                                $("h1").text("You Won!!!");
                                var audio=new Audio("./sounds/victory.mp3");
                                audio.play();
                                break;
                            case "scissor":
                                $("h1").text("You Lost");
                                var audio=new Audio("./sounds/fail.mp3");
                                audio.play();
                                break;
                        }
                        break;
                    case "rock":
                        switch(cpuSelect){
                            case "paper":
                                $("h1").text("You Lost");
                                var audio=new Audio("./sounds/fail.mp3");
                                audio.play();
                                break;
                            case "rock":
                                $("h1").text("Draw");
                                break;
                            case "scissor":
                                $("h1").text("You Won");
                                var audio=new Audio("./sounds/victory.mp3");
                                audio.play();
                                break;
                        }
                        break;
                    case "scissor":
                        switch(cpuSelect){
                            case "paper":
                                $("h1").text("You Won!!!");
                                var audio=new Audio("./sounds/victory.mp3");
                                audio.play();
                                break;
                            case "rock":
                                $("h1").text("You Lost");
                                var audio=new Audio("./sounds/fail.mp3");
                                audio.play();
                                break;
                            case "scissor":
                                $("h1").text("Draw");
                                break;
                        }
                        break;
                        
                }
            }
            isPressed=false;
        },3200);
        
       

    }
    else if(!playerSelect){
        
            if(lang==="eng"){
                alert("Please select one of the game cards");
            }
            else{
                alert("Lütfen oyun kartlarından birini seçiniz");
            }
    }
});

