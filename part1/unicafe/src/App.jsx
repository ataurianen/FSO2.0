import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Stats = ({ text, count}) => {
  return (
    <p>{text} {count}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

const handleClickGood = () => {
  setGood(good + 1)
  setTotal(total + 1)
  setAverage(average +1)
}

const handleClickNeutral = () => {
  setNeutral(neutral + 1)
  setTotal(total + 1)
}

const handleClickBad = () => {
  setBad(bad + 1)
  setTotal(total + 1)
  setAverage(average - 1)
}

  return (
    <div>
      <Header text={"Give Feedback"} />
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <Header text={"Statistics"} />
      <Stats text={"good"} count={good} />
      <Stats text={"neutral"} count={neutral} />
      <Stats text={"bad"} count={bad} />
      <Stats text={"all"} count={total} />
      <Stats text={"average"} count={average / total} />
      <Stats text={"positive"} count={good / total * 100 + " %"}/>
    </div>
  )
}

export default App