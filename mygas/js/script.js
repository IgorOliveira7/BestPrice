function calculate(etanol = 3.03) {
  let gasoline = document.getElementById('iptGasoline').value;
  let result = (etanol / parseFloat(gasoline)).toFixed(2);

  document.getElementById('result').style.display = 'block';

  if (gasoline === '') {
    changeStatusMsg(false);
    return;
  }

  changeStatusMsg(true);

  if (result > parseFloat(0.70)) {
    document.getElementById('success').innerHTML = 'A Gasolina está mais em conta.';
  } else if (result == parseFloat(0.70)) {
    document.getElementById('success').innerHTML = 'Tanto faz.';
  } else {
    document.getElementById('success').innerHTML = 'O álcool está mais em conta.';
  }
}

function changeStatusMsg (value) {
  if(value) {
    document.getElementById('success').style.display = 'block';
    document.getElementById('error').style.display = 'none';
  } else {
    document.getElementById('error').innerHTML = 'O campo não pode estar vazio';
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'block';
  }
}