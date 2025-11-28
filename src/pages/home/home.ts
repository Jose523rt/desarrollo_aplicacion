import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './home.css';
import '../../appTypes.ts';

function showAlert(message: string, type: 'success' | 'danger' = 'success') {
  alert(message); // Puedes reemplazar esto por un modal de Bootstrap si lo prefieres
}

document.addEventListener('DOMContentLoaded', () => {

  console.log('Login page loaded');

  const token = localStorage.getItem('authToken')
  const image = document.getElementById('button-image');
  const backLoginBtn = document.getElementById('btnBackLogin');
  const testBtn = document.getElementById('btnTest');

  backLoginBtn?.addEventListener('click', async () => {
    console.log('Login clickeado');
    await window.appNav.toLogin();
  });

  testBtn?.addEventListener('click', async () => {
    console.log('El token es /n', token);
  });

  image?.addEventListener('click', async () => {
    console.log('Icono clickeado');
    await window.appNav.toUser();
  });
});