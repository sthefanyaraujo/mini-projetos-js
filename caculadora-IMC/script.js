const calculate = document.querySelector('#calculate');

function imc () {
  const name = document.querySelector('#name').value;
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#result');

  if(name !== '' && height !== '' && weight !== '') {
    const IMC = (weight / (height * height)).toFixed(1)

    let classification = ''

    if(IMC < 18.5) {
      classification = 'abaixo do peso'
    }else if(IMC < 25) {
      classification = 'com o peso ideal'
    }else if(IMC < 30) {
      classification = 'levemente acima do peso'
    }else if(IMC < 35) {
      classification = 'com obesidade grau I'
    }else if(IMC < 40) {
      classification = 'com obesidade grau II'
    }else{
      classification = 'com obesidade grau III'
    }

    result.textContent = `${name} seu IMC é ${IMC} e você está ${classification}`
  } else {
    result.textContent = 'Por favor preencha todos os campos!'
  }

}
calculate.addEventListener('click', imc);