let hasUsedFreeGeneration = false;

document.getElementById("generateBtn").addEventListener("click", () => {
    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("imagePlaceholder").innerText =
        "Immagine generata (placeholder).";
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    if (!hasUsedFreeGeneration) {
        alert("Hai scaricato la tua prima immagine gratuitamente!");
        hasUsedFreeGeneration = true;
        document.getElementById("downloadBtn").innerText = "Scarica (1 credito)";
    } else {
        alert("Per scaricare altre immagini devi acquistare crediti.");
    }
});
