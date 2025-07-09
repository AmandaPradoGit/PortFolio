document.querySelectorAll('.btnAba').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        document.querySelectorAll('.btnAba').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.conteudoAba').forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});