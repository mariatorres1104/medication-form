document.getElementById("medication-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = {
        medication: document.getElementById("medication").value,
        dosage: document.getElementById("dosage").value,
        frequency: document.getElementById("frequency").value
    };

    const response = await fetch("https://medication-request-api.onrender.com/api/medication", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Formulario enviado con éxito");
    } else {
        alert("Error al enviar el formulario");
    }
});
