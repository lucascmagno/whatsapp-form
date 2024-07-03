function buscarCep() {
    var cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('endereco').value = data.logradouro;
                    document.getElementById('numero').focus();
                } else {
                    alert("CEP não encontrado.");
                }
            })
            .catch(error => console.log(error));
        } else {
            alert("Formato de CEP inválido.");
        }
    } else {
        alert("CEP não preenchido.");
    }
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var cnpj = document.getElementById('cnpj').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var nomeMae = document.getElementById('nomeMae').value;
    var nomeEstabelecimento = document.getElementById('nomeEstabelecimento').value;
    var ramoAtuacao = document.getElementById('ramoAtuacao').value;
    var email = document.getElementById('email').value;
    var cep = document.getElementById('cep').value;
    var bairro = document.getElementById('bairro').value;
    var endereco = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;

    var texto = `*ABERTURA DE CONTA*\n*NOME COMPLETO:* ${nome}\n*TELEFONE:* ${telefone}\n*CPF:* ${cpf}\n*CNPJ:* ${cnpj}\n*DATA DE NASCIMENTO:* ${dataNascimento}\n*NOME DA MÃE:* ${nomeMae}\n*NOME DO ESTABELECIMENTO:* ${nomeEstabelecimento}\n*RAMO DE ATUAÇÃO PROFISSIONAL:* ${ramoAtuacao}\n*EMAIL:* ${email}\n*CEP:* ${cep}\n*BAIRRO:* ${bairro}\n*ENDEREÇO:* ${endereco}\n*NÚMERO:* ${numero}`;

    var numeroWhatsApp = '5591982869577';
    var url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
});
