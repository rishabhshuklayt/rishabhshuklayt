// for age Dynamics

// Get the current year
const currentYear = new Date().getFullYear();
const dob = 2004;
var fdob = currentYear - dob;

// Display the current year
console.log(`The current year is: ${fdob}`);
document.getElementById("age").innerHTML = fdob;
document.getElementById("age1").innerHTML = fdob;
// -----------------------------------------------------------------

var mail = window.prompt("hello")


document.getElementById("age1").innerHTML = mail;

// ---------------------------------------------------------------------------

function getValue() {
    // Get the input element by its ID
    var inputValue = document.getElementById("myInput").value;

    // Display the value (you can also do something else with it)
    alert("Input value: " + inputValue);
    document.getElementById("mail2").innerHTML = inputValue;
    localStorage.setItem("content", inputValue);
        }
// ---------------------------------------------------------------------------------------------------------------------

const toTop = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active")
    } else{
        toTop.classList.remove("active")
    }
})


// -----------------------------------locomotive js------------------




