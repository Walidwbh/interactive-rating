// add active class to a rate
const rates = Array.from(document.querySelectorAll('.rate li'));

let rate = 0;
rates.forEach((element, index)=>{
    element.addEventListener(("click"), (event)=>{
        rates.filter((e)=> e!== event.target)
            .map((e)=> e.classList.remove("active"));
        event.target.classList.toggle("active")
        if(event.target.classList.contains("active")){
            rate = Number(element.dataset.rate);
            submit.disabled = false;
        }else{
            rate = 0;
            submit.disabled = true;
        }
    });
})
//display exit when submitting a rate
const submit = document.querySelector("button");
submit.addEventListener("click", ()=>{
    document.querySelector(".rating").style.display = "none";
    document.querySelector(".exit").style.display = "block";
    document.querySelector("span.given-rate").innerHTML = rate+" "
});
