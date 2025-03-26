function showRecovery() {
    alert("Aqui você pode recuperar sua senha.");
}

function showCreateAccount() {
    window.location.href = "criar_conta.html";
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login realizado com sucesso!");
});

document.getElementById("recoveryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Link de recuperação enviado para o seu e-mail.");
});

document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Conta criada com sucesso! Faça login.");
});