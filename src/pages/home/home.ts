import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './home.css';
import '../../appTypes.ts';

function showAlert(message: string, type: 'success' | 'danger' = 'success') {
  alert(message); // Puedes reemplazar esto por un modal de Bootstrap si lo prefieres
}

document.addEventListener('DOMContentLoaded', () => {

  console.log('Login page loaded'); 

  const backLoginBtn = document.getElementById('btnBackLogin');

  backLoginBtn?.addEventListener('click', async () => {
    console.log('Login clickeado');
    await window.appNav.toLogin();
  });
});