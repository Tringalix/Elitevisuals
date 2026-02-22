let userData = {
    credits: 0,
    freeUsed: false,
    history: []
};

document.getElementById("creditsCount").innerText = userData.credits;

document.getElementById("freeStatus").innerText = userData.freeUsed
    ? "Utilizzata"
    : "Non utilizzata";

const historyList = document.getElementById("historyList");

if (userData.history.length === 0) {
    historyList.innerHTML = '<p class="empty">Nessuna immagine generata.</p>';
} else {
    userData.history.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("history-item");
        div.innerText = item;
        historyList.appendChild(div);
    });
}
