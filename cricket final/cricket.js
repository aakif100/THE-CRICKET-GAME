let odd = document.querySelector(".odd");

let even = document.querySelector(".even");


let button = document.querySelectorAll("button");

let body = document.querySelector("body");


let div = document.querySelector(".buttons");


let chooseText = document.querySelector(".chooseText");

let oe = document.querySelectorAll(".oe");


let newdiv = document.querySelector(".newdiv");

let mainDiv = document.querySelector(".main");
// let b = document.querySelector

let random = Math.ceil(Math.random()*6);


let p = document.querySelector("p");

let h5 = document.querySelector("h5");

let h4 = document.querySelector("h4");

let h6 = document.querySelector("h6");


let rebat = document.querySelector(".rebat");


let finaldiv = document.querySelector(".finaldiv");



let play = document.querySelector(".play");



play.addEventListener("click",()=>{
    // body.classList.remove("father");
    mainDiv.classList.remove("main");
    mainDiv.classList.add("displayy");
    

})



 score = 0;

 scoreS = 0;

for(let btn of button){
btn.addEventListener("click",(event)=>{
    console.log(event);
    if(event.target.innerText == 'EVEN'){
        // alert("good choice");
        chooseText.innerText = "ENTER YOUR  NUMBER...."
        div.classList.remove("disp");
        div.addEventListener("click",(event)=>{
            console.log(random);
            let total = random + Number(event.target.innerText);
            chooseText.innerText = `IT IS :${total}`;

            setTimeout(()=>{
                if(total%2==0){
                    alert("congrats you have won...choose to bat or bowl");
                    newdiv.classList.remove("batball");
                    

                    let bat = document.querySelector(".bat");

                    bat.addEventListener("click",()=>{
                        console.log("clock");

                        div.classList.add("disp");

                        // ABOVE ONE IS TO REMOVE THE BUTTONS WHEN WE CHOOSE BAT BUTTON IF TOSS IS WON....

                        let finaldiv = document.querySelector(".finaldiv");
                        finaldiv.classList.remove("finaldisp");
                        // till above one required..


                        // console.log("clicked");
                    
                        // console.log(input.value);


                        finaldiv.addEventListener("click",(event)=>{   
                            let system = Math.ceil(Math.random () * 6 );

                            console.log("hello");
                            console.log(event.target.innerText);
                            console.log("the system value is :", system);
                            h5.innerText = `the system value is : ${system}`;



                            if(event.target.innerText == system){
                                console.log("game over");
                                console.log("the score is",score);
                                h6.innerText = `GAME OVER!!!!  THE SCORE IS : ${score}`
                                score = 0;

                                alert("page will be restarted in 5 seconds automatically after clicking 'OK'!!");
                                setTimeout(()=>{
                                    location.reload();
                                },5000)
                        
                            }
                            else{
                                // inpval = input.value;
                                // inpvalstr = parseInt(inpval);
                                score = score + Number(event.target.innerText);
                                console.log(score);
                                h4.innerText = `your score is : ${score}`;
                            }   




                        });
                    
                    
                    
                    
                        

                    })

                    let bowl = document.querySelector(".bowl");






                    
                    bowl.addEventListener("click",()=>{
                        console.log("bowling to system");

                        div.classList.add("disp");

                        // ABOVE ONE IS TO REMOVE THE BUTTONS WHEN WE CHOOSE BAT BUTTON IF TOSS IS WON....

                        finaldiv.classList.remove("finaldisp");
                        // till above one required..


                        // console.log("clicked");
                    
                        // console.log(input.value);


                        finaldiv.addEventListener("click",(event)=>{   
                            let system = Math.ceil(Math.random () * 6 );

                            console.log("hello");
                            // console.log(event.target.innerText);
                            console.log("the system value is :", system);
                            h5.innerText = `the system value is : ${system}`;
                            // scoreS = scoreS + Number(event.target.innerText);
                            scoreS = scoreS + system;

                            h6.innerText = `  THE  SYSTEM SCORE IS : ${scoreS}`



                            if(event.target.innerText == system){
                                console.log("YOU HAVE BOWLED OUT THE SYSTEM");
                                // console.log("the score is",score);
                                // h6.innerText = `BOWILNG OVER!!!!  THE SCORE IS : ${score}`

                                // scoreS = scoreS + Number(event.target.innerText);
                                console.log(scoreS);
                                h4.innerText = `YOU HAVE BOWLED OUT THE SYSTEM AT : ${scoreS}`;



                                rebat.classList.remove("rebatdisp");


                                rebat.addEventListener("click",()=>{
                                    rebat.classList.add("rebatdisp");
                                     finaldiv = document.querySelector(".finaldiv");

                                    finaldiv.classList.add("finaldiv");



                                    console.log("clock");

                        div.classList.add("disp");

                        // ABOVE ONE IS TO REMOVE THE BUTTONS WHEN WE CHOOSE BAT BUTTON IF TOSS IS WON....

                        let finaldiv = document.querySelector(".finaldiv");
                        finaldiv.classList.remove("finaldisp");
                        // till above one required..


                        // console.log("clicked");
                    
                        // console.log(input.value);


                        finaldiv.addEventListener("click",(event)=>{   
                            let system = Math.ceil(Math.random () * 6 );

                            console.log("hello");
                            console.log(event.target.innerText);
                            console.log("the system value is :", system);
                            h5.innerText = `the system value is : ${system}`;



                            if(event.target.innerText == system){
                                console.log("game over");
                                console.log("the score is",score);
                                h6.innerText = `GAME OVER!!!!  THE SCORE IS : ${score}`
                                score = 0;

                                alert("page will be restarted in 5 seconds automatically after clicking 'OK'!!");
                                setTimeout(()=>{
                                    location.reload();
                                },5000)
                        
                            }
                            else{
                                // inpval = input.value;
                                // inpvalstr = parseInt(inpval);
                                score = score + Number(event.target.innerText);
                                console.log(score);
                                h4.innerText = `your score is : ${score}`;
                            }   




                        });
                    


                                    
                                    // alert("hello");


                                });

                                // scoreS = 0;

                                // alert("page will be restarted in 5 seconds automatically after clicking 'OK'!!");
                                // setTimeout(()=>{
                                //     location.reload();
                                // },5000)
                        
                            }
                            // else{
                            //     // inpval = input.value;
                            //     // inpvalstr = parseInt(inpval);
                            //     score = score + Number(event.target.innerText);
                            //     console.log(score);
                            //     h4.innerText = `your score is : ${score}`;
                            // }   






                        });
                        console.log(scoreS);
                        
                    
                    
                    
                        

                    })



                    // let bat = document.createElement("button");
                    // bat.setAttribute("class","bat");
                    // bat.setAttribute("class","oe");

                    // bat.innerHTML = "<centre>BAT</centre>";
                    // let bowl = document.createElement("button");
                    // bowl.setAttribute("class","bowl");
                    // bowl.setAttribute("class","oe");

                    // bowl.innerHTML = "<centre>BOWL</centre>";
                    // div.append(bat);
                    // div.append(bowl);


                    // for(let val of oe){
                    //     val.addEventListener("click",(event)=>{

                    //         if(event.target.innerText == 'BAT'){
                    //             alert("CHOSE TO BAT");
                    //         }
                    //     })
                    // }

                }
    
                else{
                    alert("computer has won the toss and is deciding to bat or bowl");
                }
            },500);
           

        })
       
        
    }

    
    
    else{
        // alert("bad choice");
        chooseText.innerText = "ENTER YOUR  NUMBER...."

        div.classList.remove("disp");

        div.addEventListener("click",(event)=>{
            console.log(random);
            let total = random + Number(event.target.innerText);
            chooseText.innerText = `IT IS :${total}`;

            setTimeout(()=>{
                if(total%2!=0){
                    alert("congrats you have won...choose to bat or bowl");
                    newdiv.classList.remove("batball");


                    let bat = document.querySelector(".bat");


                    bat.addEventListener("click",()=>{

                        let system = Math.ceil(Math.random () * 6 );
                        div.classList.add("disp");

                        // ABOVE ONE IS TO REMOVE THE BUTTONS WHEN WE CHOOSE BAT BUTTON IF TOSS IS WON....

                        let finaldiv = document.querySelector(".finaldiv");
                        finaldiv.classList.remove("finaldisp");

                        // console.log("clicked");
                    
                        // console.log(input.value);
                        console.log(event.target.innerText);
                    
                        console.log("the system value is :", system);
                    
                        h3.innerText = `the system value is : ${system}`;
                    
                    
                        if(event.target.innerText == system){
                            console.log("game over");
                            console.log("the score is",score);
                            p.innerText = `GAME OVER!!!!  THE SCORE IS : ${score}`
                            score = 0;
                    
                        }
                        else{
                            // inpval = input.value;
                            // inpvalstr = parseInt(inpval);
                            score = score + Number(event.target.innerText);
                            console.log(score);
                            h2.innerText = `your score is : ${score}`;
                        }    

                    })


                   
                }
    
                else{
                    alert("computer has won the toss and is deciding to bat or bowl");
                }
            },500);
           

        })


    }
})
}


