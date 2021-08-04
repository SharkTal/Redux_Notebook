


const initialState = {
    notes:[{
        id:1,
        date:'04/08/2021',
        isImportant:false,
        note:'I am note 1'
    },
    {
        id:2,
        date:'04/08/2021',
        isImportant:false,
        note:'I am note 2'
    },
    {
        id:3,
        date:'04/08/2021',
        isImportant:false,
        note:'I am note 3'
    }
]
}







const reducer = (previousState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NOTE":
      return {
          ...previousState,
          notes: [...previousState.notes, payload]
      };
    default:
      return previousState;
  }
};


export default reducer;