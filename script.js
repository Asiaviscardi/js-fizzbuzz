const boxesContainer = document.querySelector(".boxes");

for(let i = 1; i <= 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.append(i + 1);

    if(i % 3 == 0); {
        value = "fizzbuzz"
        box.classList.add("acqua")
    }

    else if(i % 5 == 0); {
        value = "buzz"
        box.classList.add("blu")
    }

    else if(i % 3 == 0); {
        value = "fizz"
        box.classList.add("violet")
    }
    
    boxesContainer.append(box);
}