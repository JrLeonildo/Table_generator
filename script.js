function gerar(){
  const numero = document.querySelector('#enter_numero').value
  const aviso = document.querySelector('#aviso')
  const saida = document.querySelector('#tab')
  if(numero==0){
    aviso.innerHTML = "[ERRO] Por favor digite um valor!"
    aviso.style.color = "red"
    saida.innerHTML = ""
  }else{
    aviso.innerHTML = ""
    saida.innerHTML = ""
    let operador = document.getElementsByName('operador')
    if(operador[0].checked){
      for(let c=1; c<11; c++){
        var item = document.createElement('option')
        item.text = `${numero} + ${c} = ${Number(numero)+c}`
        saida.appendChild(item)
      }
    }else if(operador[1].checked){
      for(let c=1; c<11; c++){
        var item = document.createElement('option')
        item.text = `${numero} - ${c} = ${Number(numero)-c}`
        saida.appendChild(item)
      }
    }else if(operador[2].checked){
      for(let c=1; c<11; c++){
        var item = document.createElement('option')
        item.text = `${numero} x ${c} = ${Number(numero)*c}`
        saida.appendChild(item)
      }
    }else if(operador[3]){
      for(let c=1; c<11; c++){
        var item = document.createElement('option')
        item.text = `${numero} / ${c} = ${Number(numero)/c}`
        saida.appendChild(item)
      }
    } 
  }
}