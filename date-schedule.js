// --- Définir les dates de début et de fin ---
const startDate = new Date("2026-01-05T00:00:00"); 
const endDate   = new Date("2026-01-10T23:59:59"); 

// Fonction pour afficher le texte entre les deux dates
function showScheduledText() {
  const now = new Date(); // on récupère la date actuelle ici
  const el = document.getElementById("scheduledText");

  if (!el) return; // sécurité si l'élément n'existe pas

  // Vérifie si now est entre startDate et endDate
  if (now >= startDate && now <= endDate) {
    el.textContent = "bla bla bla";  // texte affiché dans l’intervalle
  } else {
    el.textContent = "";  // rien en dehors de l’intervalle
  }
}

// Appeler la fonction au chargement
window.addEventListener("load", showScheduledText);
