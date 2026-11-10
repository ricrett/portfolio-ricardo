(() => {
  'use strict';

  const form = document.getElementById('formCadastro');

  form.addEventListener('submit', (event) => {
    const email = document.getElementById('email');
    const cpf = document.getElementById('CPF');

    let valido = true;

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    if (!validarEmail(email.value)) {
      email.classList.add('is-invalid');
      valido = false;
    } else {
      email.classList.remove('is-invalid');
    }


    if (!form.checkValidity() || !valido) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const cliente = {
        nome: document.getElementById('nome').value,
        email: email.value,
        cpf: cpf.value,
        telefone: document.getElementById('telefone').value,
        setor: document.getElementById('setor').value,
        observacoes: document.getElementById('observacoes').value
      };

      const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
      clientes.push(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));

      const modal = new bootstrap.Modal(document.getElementById('modalSucesso'));
      modal.show();

      form.reset();
      form.classList.remove('was-validated');
    }

    form.classList.add('was-validated');
  });

})();