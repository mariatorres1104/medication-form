document.getElementById("medication-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = {
        status: document.getElementById("status").value,
        intent: document.getElementById("intent").value,
        medicationCodeableConcept: {
            text: document.getElementById("medication").value
        },
        subject: {
            reference: document.getElementById("subject").value
        },
        authoredOn: document.getElementById("authoredOn").value,
        requester: {
            reference: document.getElementById("requester").value
        },
        dosageInstruction: [
            {
                text: document.getElementById("dosage").value
            }
        ]
    };

    try {
        const response = await fetch("https://medication-request-api.onrender.com/api/medicationrequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Formulario enviado con éxito");
            document.getElementById("medication-form").reset();
        } else {
            alert("Error al enviar el formulario");
        }
    } catch (error) {
        console.error("Error al conectar con la API:", error);
        alert("No se pudo conectar con el servidor");
    }
});
