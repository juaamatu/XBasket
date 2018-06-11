const defaultState = [
  { 
    name: 'Juomat',
    id: 1
  },
  {
    name: 'Lihat',
    id: 2
  },
  {
    name: 'Kasvikset',
    id: 3
  },
  {
    name: 'Herkut',
    id: 4
  },
  {
    name: 'Kuivatuotteet',
    id: 5
  },
  {
    name: 'Mausteet',
    id: 6
  },
  {
    name: 'Pakasteet',
    id: 7
  },
  {
    name: 'Säilykkeet',
    id: 8
  },
  {
    name: 'Hedelmät',
    id: 9
  }
]

export default groups = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}