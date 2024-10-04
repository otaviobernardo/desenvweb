   //Faz as validações necessárias antes do envio padrão do formulário
   document.getElementById("forms").onsubmit = function(event) { 
    event.preventDefault(); 

    // Puxa os valores dos campos de telefone e email .
    const telefone = document.getElementById("inputtel").value;
    const email = document.getElementById("inputemail").value;

    // Padrão para validar o telefone
    const telPattern = /^\d{11}$/;
    
    // Padrão para validar o email
    // seguido por caracteres alfanuméricos e pontos para o domínio, e pelo menos duas letras para o TLD.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Oculta as mensagens de erro e de sucesso (se estiverem visíveis).
    document.getElementById("telError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("message").style.display = "none";

    // Variável de controle para verificar se os campos são válidos.
    let isValid = true;
    
    // Verifica se o valor do telefone segue o padrão definido.
    if (!telPattern.test(telefone)) {
        // Se não seguir, exibe a mensagem de erro associada ao telefone e marca o formulário como inválido.
        document.getElementById("telError").style.display = "block";
        isValid = false;
    }
    
    // Verifica se o valor do email segue o padrão definido.
    if (!emailPattern.test(email)) {
        // Se não seguir, exibe a mensagem de erro associada ao email e marca o formulário como inválido.
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }
    
    // Se os campos são válidos, exibe a mensagem de sucesso e limpa o formulário.
    if (isValid) {
        document.getElementById("message").style.display = "block";
        this.reset(); // Limpa todos os campos do formulário.
    }
};
