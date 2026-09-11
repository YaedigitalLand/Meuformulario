document.getElementById('meuformulario').addEventListener('submit', function(event) {
    // Impede que a página recarregue ao clicar em enviar
    event.preventDefault();

    // Captura os dados que o usuário digitou
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const instagram = document.querySelector('input[name="instagram"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    // Monta o texto bonitinho para chegar no WhatsApp (%0A é a quebra de linha)
    const textoMensagem = `Olá, YEA! Meu nome é ${nome}.%0A%0A` +
                          `E-mail: ${email}%0A` +
                          `Instagram: ${instagram}%0A%0A` +
                          `Mensagem: ${mensagem}`;

    // ATENÇÃO: Coloque o seu número de WhatsApp aqui
    // Formato: DDI + DDD + Número (Exemplo: 5551999999999)
    const numeroWhatsApp = "5551996404784"; 

    // Cria o link oficial do WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');
});