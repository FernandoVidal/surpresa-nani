const senhaValida = "flor123"; // Troque por sua senha
const chaveLocal = "senha_usada";

function verificarSenha() {
  const input = document.getElementById("senhaInput").value;
  const erro = document.getElementById("mensagemErro");

  if (localStorage.getItem(chaveLocal)) {
    erro.textContent = "Essa senha já foi usada.";
    return;
  }

  if (input === senhaValida) {
    localStorage.setItem(chaveLocal, "usada");
    window.location.href = "segredo.html";
  } else {
    erro.textContent = "Senha incorreta!";
  }
}
