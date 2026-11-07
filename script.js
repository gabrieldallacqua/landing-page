const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');
const clientName = document.getElementById('client-name');
const clientWhatsapp = document.getElementById('client-whatsapp');

if (btnSendWhatsapp) {
    btnSendWhatsapp.addEventListener('click', () => {
        const name = clientName.value.trim();
        const whatsapp = clientWhatsapp.value.trim();

        if (!name || !whatsapp) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Substitua pelo seu número de WhatsApp real (com DDI e DDD, ex: 5511999999999)
        const meuNumeroWhatsApp = '5511999999999';
        const mensagem = `Olá! Meu nome é *${name}* e tenho interesse em um site profissional. Meu contato é ${whatsapp}.`;
        
        const link = `https://wa.me/${meuNumeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(link, '_blank');
    });
}