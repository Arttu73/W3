function initialize() {
    const userForm = document.getElementById("userForm")
    

    userForm.addEventListener("submit", async function() {
        const emailInput = document.getElementById("email")
        const nameInput = document.getElementById("name")
        const submit = document.getElementById("submit")
        const inputData = await fetch("https://localhost:3000/users", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: {
                "name": nameInput.value,
                "email": emailInput.value
            }
        })
        const response = await inputData.json()
        console.log(response)

    })
}

initialize()