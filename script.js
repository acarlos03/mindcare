document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de script para a funcionalidade de navegação
    const ctaButton = document.querySelectorAll('.cta-button');
    ctaButton.forEach(button => {
      button.addEventListener('click', function(event) {
        alert('Sessão agendada com sucesso! Obrigado por usar MindCare.');
      });
    });
  });
  