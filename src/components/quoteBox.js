import React from 'react'
import styled from 'styled-components'

const QuoteBox = ({quote, handleNewQuote}) => (
  
  <Quotebox id="quote-box">
  <Text id='text'>{quote.text}</Text>
  <Author id='author'>{quote.author}</Author>
  <Actions className='actions'>
    <Button 
      id='new-quote'
      className='button'
      onClick={handleNewQuote}
      >
      New Quote
    </Button>
    <Tweet 
      href="twitter.com/intent/tweet"
      id="tweet-quote"
      target="_blank"
      >
      Tweet
    </Tweet>
  </Actions>
</Quotebox>
)

const Quotebox = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #edf2f4;
  height: 200px;
  width: 500px;
  border-radius: 10px;
  padding: 10px;
`
const Text = styled.p`
  display: flex;
  align-self: flex-start;
  font-size: 30px;
  color: #ef233c;
  margin-left: 40px;
  margin-bottom: 10px;
`
const Author = styled.p`
  display: flex;
  align-self: flex-start;
  font-size: 20px;
  color: #8d99ae;
  font-weight: 700;
  margin-left: 40px;
  margin-top: 0;
`
const Actions = styled.div`
   padding: 10px;
  margin-bottom: 15px;
  margin-left: 40px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 500px;
`
const Button = styled.button`
   margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #ef233c;
  color: #edf2f4;
`
const Tweet = styled.a`
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #ef233c;
  color: #edf2f4;
  text-decoration: none;
`

export default QuoteBox