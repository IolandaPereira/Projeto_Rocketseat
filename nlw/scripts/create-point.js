
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json() }  )
    .then (  states =>{

        for (const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    } )
}

populateUFs();


function getCities(event){
    const citySelect = document.querySelector("select[name=city]") 
    const stateInput = document.querySelector("input[name=state]") 
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.Value = event.target.options[indexOfSelectedState]
    

    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML ="<option value> Selecione a Cidade </option>"
    citySelect.disabled = true

    fetch(url)
    .then( (res) => {return res.json() }  )
    .then ( cities =>{
        for (const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled=false
    } )
}

document
    .querySelector("select[name=uf]") //selecionar o select que tem o name=uf
   .addEventListener("change", getCities)

  
//Itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li") //Pegar todos os li's

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem); //Toda vez que pegar um li o ouvidor de eventos vai "ouvir" o evento click
}

let selectedItems = []; //vetor p guardar os itens selecionados

function handleSelectedItem(event) { /*Toda vez que a função é disparada, passa pra dentro dela um evento*/
    const itemLi = event.target;
     
    //adicionar ou remover com js
    itemLi.classList.toggle("selected")

    //Pegar os número que tem no id do item selecionado*
    const itemId= itemLi.dataset.id;  
    

    //Verificar se existem items selecionados, se sim
    //pegar os items selecionados
    const alreadySelected = selectedItems.findIndex(item=>{
        const itemFound = item == itemId
        return itemFound
    })

    //se já estiver selecionado, tirar da seleção
        if(alreadySelected >=0){
            //tirar da seleção

        }


    //se não estiver selecionado, add à seleção

    //atualizar o campo escondido com os items selecionados

}




