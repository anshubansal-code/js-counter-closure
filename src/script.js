// logic(our main focus)

function createCounter(){
    let count=0;
    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        reset: function(){
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();

const countDisplay = document.getElementById("countParaId");
const incrementButton = document.getElementById("incrementButtonId");
const decrementButton = document.getElementById("decrementButtonId");
const resetButton = document.getElementById("resetButtonId");

incrementButton.addEventListener("click", function(){
    countDisplay.innerText = counter.increment();
});
decrementButton.addEventListener("click", function(){
    countDisplay.innerText = counter.decrement();
});
resetButton.addEventListener("click", function(){
    countDisplay.innerText = counter.reset();
});