import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
  {text: 'Heroes never die!', author: '- Mercy'},
  {text: 'Justice rains from above!', author: '- Pharah'},
  {text: 'DIE DIE DIE!', author: '- Reaper'},
  {text: 'Its high noon', author: '- McCree'},
  {text: 'Freeze! dont move!', author: '- Mei'},
  {text: 'Nerf this!', author: '- D.va'},
]

const QuoteBox = ({quote, handleNewQuote}) => (

    <div id="quote-box">
    <p id='text'>{quote.text}</p>
    <p id='author'>{quote.author}</p>
    <div class='actions'>
      <button 
        id='new-quote'
        class='button'
        onClick={handleNewQuote}
        >
        New Quote
      </button>
      <a 
        href="twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
        >
        Tweet
      </a>
    </div>
  </div>

)

const getRandomIndex = () => 
  Math.round(Math.random() * ((quoteData.length-1) -0) + 0)


const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  
  return(
  <div class="main">
  <QuoteBox  quote={quote} handleNewQuote={handleNewQuote}/>
</div>)
}


ReactDOM.render(<App />, document.querySelector('#app'))
