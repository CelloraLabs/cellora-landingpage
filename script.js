const form = document.getElementById("waitlist-form");
const status = document.getElementById("form-status");
const button = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.classList.remove("error");
  status.textContent = "A enviar…";
  button.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      status.textContent = "Obrigado! Entraremos em contacto em breve.";
    } else {
      const data = await response.json().catch(() => ({}));
      const message = data?.errors?.[0]?.message ?? "Algo correu mal. Tenta novamente.";
      status.classList.add("error");
      status.textContent = message;
    }
  } catch {
    status.classList.add("error");
    status.textContent = "Sem ligação. Verifica a tua internet e tenta novamente.";
  } finally {
    button.disabled = false;
  }
});
