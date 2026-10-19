/*
  Página estática de link em bio — entrada animada via CSS.
  Este arquivo só registra os cliques nos botões como evento "Lead"
  no Meta Pixel (definido no <head> do index.html).
*/
document.querySelectorAll('a.cta').forEach(function (link) {
  link.addEventListener('click', function () {
    if (typeof fbq !== 'function') return;
    var canal = link.classList.contains('cta-whatsapp') ? 'WhatsApp' : 'Telegram';
    fbq('track', 'Lead', { content_name: 'Grupo ' + canal });
  });
});
