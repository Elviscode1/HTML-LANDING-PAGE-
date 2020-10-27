 

let cardArray = [
    {

        domEle: document.getElementById("ma"),
        end: 1250,
        incre: 125,
        start: 0,
    
    },
    {

        domEle: document.getElementById("grt"),
        end: 570,
        incre: 35,
        start: 0,

    },
    {

        domEle: document.getElementById("just"),
        end: 380,
        incre: 40,
        start: 0,

    
    },
    {

        domEle: document.getElementById("st"),
        end: 250,
        incre: 25,
        start: 0,

    
    }

]

const clock = (card) =>{

  var start = card.start;

    var timerid = setInterval(  () =>{

start = start + card.incre

card.domEle.innerHTML = start


if(start >= card.end){

    clearInterval(timerid)
}



    }, 150)


}



window.onscroll = function(e){

    myFunction()

    console.log(window.pageYOffset)

};
function myFunction(){
    if (window.pageYOffset > 433 && window.pageYOffset < 440 ){

        document.getElementById("mysec");

        cardArray.map( (obj) =>{

            clock(obj)
        })
    }

}