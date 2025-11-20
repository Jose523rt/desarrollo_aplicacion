import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './login.css';
import '../../appTypes.ts';

function showAlert(message: string, type: 'success' | 'danger' = 'success') {
  alert(message); // Puedes reemplazar esto por un modal de Bootstrap si lo prefieres
}

document.addEventListener('DOMContentLoaded', () => {

  console.log('Login page loaded'); 

  const btn = document.getElementById('btnTest');
  const emailInput = (document.getElementById('inputEmail') as HTMLInputElement);
  const passwordInput = (document.getElementById('inputPassword') as HTMLInputElement);
  const loginBtn = document.getElementById('btnLogin');
  const registroLink = document.getElementById('registroLink');

  loginBtn?.addEventListener('click', async () => {
    console.log('Login clickeado');
    const res = await window.http.post('http://localhost:3001/user-login',{
      email: emailInput.value,
      password: passwordInput.value
    });
  
    console.log(res);
      
      /*Credenciales para la prueba
      Email: ofeck@gmail.com
      Password: ofeck1234
      */
      
    if (!res.ok){
      showAlert(res.body.error, 'danger');
      console.error('Error en la petición', res.status);
    } else {
      showAlert('Login Exitoso', 'success');
      await window.appNav.toHome();
      console.log(res)
    }
  });

  btn?.addEventListener('click', async () => {
    const res1 = await window.http.get('http://localhost:3001/get-users')
    console.log(res1)
  })

  if (registroLink) {
    registroLink.addEventListener('click', async (e) => {
      e.preventDefault();                  // evita la navegación por defecto
      // llama al handler que ya tienes en el main: 'nav:toRegister'
      await window.appNav.toRegister();
    });
  }
});
