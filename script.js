document.getElementById("medication-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Captura de datos desde el formulario (asegúrate de tener estos campos con estos IDs)
    const data = {
        status: "completed",  
        intent: "original-order",
        medicationCodeableConcept: {
            text: document.getElementById("medication").value
        },
        subject: {
            reference: "Patient/" + document.getElementById("patientId").value
        },
        authoredOn: document.getElementById("authoredOn").value,
        requester: {
            reference: "Practitioner/" + document.getElementById("requesterId").value
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
