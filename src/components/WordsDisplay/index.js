const WordsDisplay = props => {
  const {items} = props
  const {inputValue} = items
  console.log(inputValue)

  const arr = inputValue.split('')

  const count = arr.length

  return (
    <li>
      <p className="li">
        {inputValue} : {count}
      </p>
    </li>
  )
}

export default WordsDisplay
