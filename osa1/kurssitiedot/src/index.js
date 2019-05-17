import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) =>  {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.content[0]} exercises={props.content[1]} />
            <Part part={props.content[2]} exercises={props.content[3]} />
            <Part part={props.content[4]} exercises={props.content[5]} />
        </div>
        )
}

const Total = (props) =>  {
    return (
        <p>yhteensä {props.total} tehtävää</p>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content content={[part1, exercises1, part2, exercises2, part3, exercises3]} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))