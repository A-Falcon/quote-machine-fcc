import React from 'react';
// import styled from 'styled-components'

import QuoteBox from './components/quoteBox'

const quoteData = [
  {text: 'Heroes never die!', author: '- Mercy'},
  {text: 'Justice rains from above!', author: '- Pharah'},
  {text: 'DIE DIE DIE!', author: '- Reaper'},
  {text: 'Its high noon', author: '- McCree'},
  {text: 'Freeze! dont move!', author: '- Mei'},
  {text: 'Nerf this!', author: '- D.va'},
]


const getRandomIndex = () => 
  Math.round(Math.random() * ((quoteData.length-1) -0) + 0)


const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  
  return(
  <div className='app'>
  <QuoteBox  quote={quote} handleNewQuote={handleNewQuote}/>
</div>)
}

export default App
// ReactDOM.render(<App />, document.querySelector('#root'))


