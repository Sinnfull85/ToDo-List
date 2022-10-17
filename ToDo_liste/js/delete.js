document.addEventListener("click", function (e) {
    // Delete Task
    if (e.target.className == "mv-delete") {
        console.log("this Is our Element");

        const parent = e.target.parentNode.parentNode;
        console.log(parent);

        parent.remove();
    }
});

