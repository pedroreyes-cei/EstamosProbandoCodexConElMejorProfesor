const palmera = document.getElementById('palmera');
const salvarBtn = document.getElementById('salvarBtn');
const estado = document.getElementById('estado');

let angulo = 0;
let girando = true;

const LIMITE_CAIDA = 28;
const PASO_GIRO = 0.35;

function render() {
  palmera.style.transform = `rotate(${angulo}deg)`;
}

function actualizarPalmera() {
  if (!girando) {
    return;
  }

  angulo += PASO_GIRO;
  render();

  if (angulo >= LIMITE_CAIDA) {
    girando = false;
    estado.textContent = '¡La palmera cayó!';
    salvarBtn.disabled = true;
    salvarBtn.textContent = 'Demasiado tarde';
  }
}

salvarBtn.addEventListener('click', () => {
  if (!girando) {
    return;
  }

  girando = false;
  angulo = 0;
  render();
  estado.textContent = '¡Bien hecho! La palmera está estable.';
  salvarBtn.textContent = 'Palmera a salvo';
});

render();
setInterval(actualizarPalmera, 80);
