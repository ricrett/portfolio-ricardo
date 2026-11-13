(() => {
  'use strict';

  const form = document.getElementById('form-contato');

  form.addEventListener('submit', (event) => {
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone')
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

    function validarTelefone(telefone) {
      const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
      return regexTelefone.test(telefone);
    }

    if (!validarTelefone(telefone.value)) {
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
        telefone: document.getElementById('telefone').value,
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