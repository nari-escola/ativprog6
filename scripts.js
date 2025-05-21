function validarCamposFormulario() {
    // Obter todos os campos de texto do formulário
    var campos = document.getElementsByTagName('input');
  
    // Inicializar um array para guardar os campos em branco
    var camposEmBranco = [];
  
    // Iterar por cada campo de texto
    for (var i = 0; i < campos.length; i++) {
      var campo = campos[i];
  
      // Verificar o tipo do campo
      if (campo.type === 'text' || campo.type === 'email' || campo.type === 'number' || campo.type === 'tel') {
        // Verificar se o campo está em branco
        if (campo.value.trim() === '') {
          // Adicionar o nome do campo ao array
          camposEmBranco.push(campo.name);
        }
      }
    }
  
    // Se houver campos em branco
    if (camposEmBranco.length > 0) {
      // Exibir uma mensagem de erro
      alert("Por favor, preencha os seguintes campos:\n" + camposEmBranco.join(", "));
      return false; // Impedir o envio do formulário
    } else {
      // Se todos os campos estiverem preenchidos, permitir o envio
      return true; // Permitir o envio do formulário
    }
  }

function aplicarMascaraCPF(valor) {
return valor
    .replace(/\D/g, '') // Remove tudo que não é dígito
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function aplicarMascaraTelefone(valor) {
return valor
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})$/, '$1-$2');
}

function aplicarMascaraCEP(valor) {
return valor
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{3})$/, '$1-$2');
}

// Adiciona eventos de input nos campos
document.getElementById('cpf').addEventListener('input', function(e) {
e.target.value = aplicarMascaraCPF(e.target.value);
});

document.getElementById('telefone').addEventListener('input', function(e) {
e.target.value = aplicarMascaraTelefone(e.target.value);
});

document.getElementById('cep').addEventListener('input', function(e) {
e.target.value = aplicarMascaraCEP(e.target.value);
});

function validarUsuarioSenha() {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    // Verificar se o usuário tem pelo menos 5 caracteres
    if (usuario.length < 5) {
        alert("O usuário deve ter pelo menos 5 caracteres.");
        return false;
    }

    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return false;
    }

    // Verificar se a senha tem letras
    if (!/[a-zA-Z]/.test(senha)) {
        alert("A senha deve conter letras.")
        return false;
    }

    // Verificar se a senha tem números
    if (!/\d/.test(senha)) {
        alert("A senha deve conter números.");
        return false;
    }

    // Verificar se a senha tem símbolos
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        alert("A senha deve conter símbolos (ex: ! @ #).");
        return false;
    }
    
    return true; // Permite o envio do formulário
}

    
