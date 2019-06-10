import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const updateValue = (index) => {
    const copy = [...points]
    copy[index] += 1
    setPoints(copy)
  }

  const mostVotes = () => {
    var index = -1
    var highest = -1

    points.forEach((point, i) => {
      if (point !== 0 && point > highest) {
        highest = point;
        index = i;
      }
    })

    if (index < 0) {
      return (
        <p>No votes</p>
      )
    } else {
      return (
        <p>
          {anecdotes[index]}
          <br />
          has {points[index]} votes
        </p>
      )
    }
  }

  return (
    <div>
      
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]}
        <br />
        has {points[selected]} points
        <br />
        <Button handleClick={() => updateValue(selected)} text='vote' />
        <Button handleClick={() => {
          setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
        }} text='next anecdote' />
      </p>
      
      <h1>Anecdote with most votes</h1>
      {mostVotes()}
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
