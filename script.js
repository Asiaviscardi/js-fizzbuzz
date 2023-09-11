const boxesContainer = document.querySelector(".boxes");

for(let i = 1; i <= 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    if(i % 3 == 0 && i % 5 == 0 ) {
        value = "fizzbuzz"
        box.classList.add("acqua")
        box.append("fizzbuzz")
    }

    else if(i % 5 == 0) {
        value = "buzz"
        box.classList.add("blu")
        box.append("buzz")
    }

    else if(i % 3 == 0) {
        value = "fizz"
        box.classList.add("violet")
        box.append("fizz")
    }

    else{
        box.append(i);
    }
    
    boxesContainer.append(box);
}