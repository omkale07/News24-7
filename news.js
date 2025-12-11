function  toggleDark(){
    document.body.classList.toggle("dark");
    console.log("toggleclick");
}


const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", ()=>{
  const text = search.value.toLowerCase();

    cards.forEach(card =>{
        const title = card.querySelector(".card-title").innerText.toLowerCase();
        const desc = card.querySelector(".card-text").innerHTML.toLocaleLowerCase();

        if(title.includes(text) || desc.includes(text)){
            console.log("found");
            card.style.display = "block";
        }
        else{
            console.log(" not found");
            card.style.display = "none";
        }
    })
})