const boxesContainer = document.querySelector(".boxes");

for(let i = 0; i <= 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.append(i + 1);

    if(!((i + 1) % 3 && (i + 1) % 5)){
        value = "fizzbuzz"
        box.classList.add("acqua")
    }

    else if(!((i + 1) % 5)){
        value = "buzz"
        box.classList.add("blu")
    }

    else if(i % 3 == 0); {
        value = "fizz"
        box.classList.add("violet")
    }
    
    boxesContainer.append(box);
}