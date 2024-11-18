
const userForm = document.getElementById("userForm")
    

userForm.addEventListener("submit", async function() {
    const emailInput = document.getElementById("email").value
    const nameInput = document.getElementById("name").value
    const inputData = { name: nameInput, email: emailInput }
    await fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(inputData)
    })
        .then((response) => response.json())
})
