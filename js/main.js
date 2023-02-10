// add active class to a rate
const rates = Array.from(document.querySelectorAll('.rate li'));
const submit = document.querySelector("button");
let rate = 0;
rates.forEach((element, index)=>{
    element.addEventListener(("click"), (event)=>{
        rates.filter((e)=> e!== event.target)
            .map((e)=> e.classList.remove("active"));
        event.target.classList.toggle("active")
        if(event.target.classList.contains("active")){
            rate = Number(element.dataset.rate);
            submit.disabled = false;
            // console.log(rate)
        }else{
            rate = 0;
            submit.disabled = true;
        }
    });
})
submit.addEventListener("click", (event)=>{

});

// console.log("outside",rate)