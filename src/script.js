// logic(our main focus)

function createCounter(){
    let count=0;
    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            if (count > 0) {
                count--;
            }
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

function render(value){
    countDisplay.innerText = value;
    decrementButton.disabled = value === 0;
}

render(counter.reset());

incrementButton.addEventListener("click", function(){
    render(counter.increment());
});
decrementButton.addEventListener("click", function(){
    render(counter.decrement());

});
resetButton.addEventListener("click", function(){
    render(counter.reset());
});

document.addEventListener("keydown", (e) => {
    if (e.key === "+") {
        render(counter.increment());
    }
    if (e.key === "-") {
        render(counter.decrement());
    }
    if (e.key === "0") {
        render(counter.reset());
    }
});
