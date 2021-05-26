import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  
  return {
    mobile: namor.generate({ words: 0, numbers: 10 }),
    ID: Math.floor(Math.random()),
    earning: Math.floor(Math.random() * 1000),
    
    action:
    <select id = "dropdown" ref = {(input)=> this.menu = input}>
    <option value="Accept">Accept</option>
    <option value="Reject">Reject</option>
   
</select>
        
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}