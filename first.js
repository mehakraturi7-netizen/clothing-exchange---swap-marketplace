// FILTER BUTTONS

const filterButtons = document.querySelectorAll(".filter-chip");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        console.log("Selected Filter:", button.textContent);
    });
});


// LIST ITEM FORM SUBMISSION

const itemForm = document.querySelector(".item-form");

itemForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const category = document.querySelector('select[name="category"]').value;
    const size = document.querySelector('select[name="size"]').value;
    const type = document.querySelector('select[name="type"]').value;
    const condition = document.querySelector('select[name="condition"]').value;
    const description = document.querySelector('textarea[name="description"]').value;

    if (
        title === "" ||
        category === "" ||
        size === "" ||
        type === "" ||
        condition === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    alert("Listing Published Successfully!");

    console.log({
        title,
        category,
        size,
        type,
        condition,
        description
    });

    itemForm.reset();
});


// IMAGE PREVIEW

const imageInput = document.getElementById("item-photo");

imageInput.addEventListener("change", function() {

    const file = this.files[0];

    if (file) {
        alert(`Image Selected: ${file.name}`);
    }
});


// REQUEST SWAP BUTTON

const requestButtons = document.querySelectorAll(".btn-request");

requestButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Swap Request Sent Successfully!");
    });

});


// START SWAPPING BUTTON

const startSwapButton = document.querySelector(".hero-buttons .btn-primary");

startSwapButton.addEventListener("click", () => {

    document.querySelector(".listings").scrollIntoView({
        behavior: "smooth"
    });

});


// HOW IT WORKS BUTTON

const howItWorksButton = document.querySelector(".btn-outline");

howItWorksButton.addEventListener("click", () => {

    alert(
        "1. Upload your clothes\n" +
        "2. Browse available items\n" +
        "3. Request a swap\n" +
        "4. Get matched\n" +
        "5. Exchange clothes"
    );

});


// ADD NEW ITEM IN WARDROBE

const addNew = document.querySelector(".add-new");

addNew.addEventListener("click", () => {

    document.querySelector(".list-item").scrollIntoView({
        behavior: "smooth"
    });

});


// REVIEW MATCH BUTTON

const reviewMatchButton = document.querySelector(".swap-match .btn-primary");

reviewMatchButton.addEventListener("click", () => {

    alert("Opening Match Details...");

});


// LOGIN BUTTON

const loginButton = document.querySelector(".btn-login");

loginButton.addEventListener("click", () => {

    alert("Login Page Coming Soon!");

});


// LIST ITEM BUTTON IN NAVBAR

const listItemButton = document.querySelector(".nav-actions .btn-primary");

listItemButton.addEventListener("click", () => {

    document.querySelector(".list-item").scrollIntoView({
        behavior: "smooth"
    });

});

console.log("ThreadSwap App Loaded Successfully!");