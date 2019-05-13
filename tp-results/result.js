let observations = [
  {label:'Identación', score:9},
  {label:'Maquetado', score:8},
  {label:'Css', score:8},
  {label:'Responsive', score:7},
  {label:'Interacciones', score:7},
  {label:'Consigna', score:7},
  {label:'Apreciativa', score:8}
]
let finalScore = 0;
observations.forEach( e => {finalScore += e.score})

const styledScore = e => {
  let span = document.createElement('span')
  span.textContent = e
  span.className = e >= 7 ? 'check' : 'alert'
  return span
}

const createElements = () => {
  let container = document.createElement('div')
  container.className = 'tp-result-container'

  let strong = document.createElement('strong')
  strong.textContent = Math.round((finalScore / observations.length)*10) / 10

  let title = document.createElement('h3')
  title.textContent = 'Aprobado'
  title.appendChild(strong)
  container.appendChild(title)
  
  let observationsList = document.createElement('ul')
  container.appendChild(observationsList)

  observations.forEach(e => {
    let item = document.createElement('li')
    item.textContent = e.label+': '
    item.appendChild(styledScore(e.score))
    observationsList.appendChild(item)
  })

  return container
}

document.addEventListener("DOMContentLoaded", function(event) {
  let body = document.getElementsByTagName("BODY")[0] 
  body.appendChild(createElements())
});
