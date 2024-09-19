function gerarEtiqueta() {
    // Preencher os dados na etiqueta
    const DestNome = document.getElementById('Dest-nome').value;
    const DestEndereco = document.getElementById('Dest-endereco').value;
    const DestNum = document.getElementById('Dest-num').value;
    const DestCidade = document.getElementById('Dest-cidade').value;
    const DestUF = document.getElementById('Dest-uf').value;
    const DestCep = document.getElementById('Dest-cep').value;
    const DestTelefone = document.getElementById('Dest-telefone').value;
    const RemNome = document.getElementById('Rem-nome').value;
    const RemEndereco = document.getElementById('Dest-endereco').value;
    const RemNum = document.getElementById('Dest-num').value;
    const RemCidade = document.getElementById('Dest-cidade').value;
    const RemUF = document.getElementById('Dest-uf').value;
    const RemCep = document.getElementById('Dest-cep').value;
    const RemTelefone = document.getElementById('Dest-telefone').value;

    if (!DestNome && !DestEndereco && !DestCidade && !DestUF && !DestCep && !DestTelefone){
        alert("Por favor, preencha todos os campos do destinatario.");
        return;
    }
    if (!RemNome && !RemEndereco && !RemCidade && !RemtUF && !RemCep && !RemTelefone){
        alert("Por favor, preencha todos os campos do remetente.");
        return;
    }

    else{
        document.getElementById('DestNomeEtiqueta').innerText = DestNome;
        document.getElementById('DestEnderecoEtiqueta').innerText = DestEndereco + ", " + DestNum;
        document.getElementById('DestCidadeEtiqueta').innerText = DestCidade + " - " + DestUF;
        document.getElementById('DestCepEtiqueta').innerText = DestCep;
        document.getElementById('DestTelefoneEtiqueta').innerText = DestTelefone;

        document.getElementById('RemNomeEtiqueta').innerText = DestNome;
        document.getElementById('RemEnderecoEtiqueta').innerText = DestEndereco + ", " + DestNum;
        document.getElementById('RemCidadeEtiqueta').innerText = DestCidade + " - " + DestUF;
        document.getElementById('RemCepEtiqueta').innerText = DestCep;
        document.getElementById('RemTelefoneEtiqueta').innerText = DestTelefone;

        // Exibir a pré-visualização da etiqueta
        document.getElementById('previewSection').style.display = 'flex';
    }
}

function imprimir() {
    window.print();
}

function fecharPreview() {
    // Ocultar a pré-visualização e voltar à edição
    document.getElementById('previewSection').style.display = 'none';
}