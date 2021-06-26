// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)
  const [DBitems, setDBItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, DBitems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  function handleChange(event) {
    const newValue = event.target.value;
    const idChanged = event.target.id;
    console.log(event)
    setDBItems(DBitems.map(item =>({
      id : item.id,
      value : item.id === idChanged ? newValue : item.value
    })))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}`}>{item.value}</label>{' '}
            <input id={`${item.id}`} defaultValue={item.value} onChange={handleChange} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
