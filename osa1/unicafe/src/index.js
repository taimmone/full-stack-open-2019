import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const DisplayStats = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const avg = (good - bad) / total
    const positive = good / total * 100

    return (
        <div>
            <h1>statistiikka</h1>
            <p>hyvä {good}</p>
            <p>neutraali {neutral}</p>
            <p>huono {bad}</p>
            <p>yhteensä {total}</p>
            <p>keskiarvo {avg}</p>
            <p>positiivisia {positive}%</p>
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>anna palautetta</h1>
            <Button handleClick={() => setGood(good + 1)} text='hyvä' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutraali' />
            <Button handleClick={() => setBad(bad + 1)} text='huono' />

            <DisplayStats good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)