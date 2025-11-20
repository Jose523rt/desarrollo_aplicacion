import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './register.css';
import '../../appTypes.ts';

function showAlert(message: string, type: 'success' | 'danger' = 'success') {
  alert(message);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Register page loaded'); 

  //const btn = document.getElementById('btnTest');
  const btn = document.getElementById('btnTest');
  const userRegister = (document.getElementById('registerUser') as HTMLInputElement);
  const passwordRegister = (document.getElementById('registerPassword') as HTMLInputElement);
  const passwordConfirm = (document.getElementById('confirmPassword') as HTMLInputElement);
  const emailRegister = (document.getElementById('registerEmail') as HTMLInputElement);
  const registerBtn = (document.getElementById('btnRegister') as HTMLButtonElement | null);

  registerBtn?.addEventListener('click', async () => {
    const name = userRegister?.value?.trim() ?? '';
    const email = emailRegister?.value?.trim() ?? '';
    const pass = passwordRegister?.value ?? '';
    const passConfirm = passwordConfirm?.value ?? '';
    const state = 1

    if (!name || !email || !pass) {
      showAlert('Completa todos los campos', 'danger');
      return;
    } 
    if (pass !== passConfirm) {
      showAlert('Las contraseñas no coinciden', 'danger');
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      showAlert('Email inválido', 'danger');
      return;
    }

    try {
      // Alinea los nombres de campo con lo que tu API espera (ej: name/email/password)
      const res = await window.http.post('http://localhost:3001/create-user', {
        name,
        email,
        password: pass,
        state: state
      });

      // tu window.http parece devolver { ok, status, body }
      if (!res.ok) {
        const err = res.body?.error || `Error ${res.status}`;
        showAlert(err, 'danger');
        console.error('Error en la petición', res);
      } else {
        showAlert('Registro exitoso', 'success');
        // redirigir al login o a home según tu flujo
        await window.appNav.toLogin();
      }
    } catch (e) {
      console.error(e);
      showAlert('Error de red. Intenta de nuevo.', 'danger');
    }
  });

  btn?.addEventListener('click', async () => {
  console.log('Botón clickeado');
  await window.appNav.toLogin();
  })
});


