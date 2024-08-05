const initialState = {
	contacts: []
  };
  

  const ADD_CONTACT = 'ADD_CONTACT';
  const UPDATE_CONTACT = 'UPDATE_CONTACT';
  const DELETE_CONTACT = 'DELETE_CONTACT';
  const SET_CONTACTS = 'SET_CONTACTS';
  

  export const actions = {

	fetchContacts: () => {
	  return async (dispatch) => {
		try {
		  const response = await fetch('https://playground.4geeks.com/contact/user/alesanchezr');
		  const data = await response.json();
		  dispatch({ type: SET_CONTACTS, payload: data });
		} catch (error) {
		  console.error('Error fetching contacts:', error);
		}
	  };
	},
  

	addContact: (contact) => {
	  return async (dispatch) => {
		try {
		  const response = await fetch('https://playground.4geeks.com/contact/user', {
			method: 'POST',
			body: JSON.stringify(contact),
			headers: {
			  'Content-Type': 'application/json'
			}
		  });
		  const data = await response.json();
		  dispatch({ type: ADD_CONTACT, payload: data });
		} catch (error) {
		  console.error('Error adding contact:', error);
		}
	  };
	},
  

	updateContact: (contact) => {
	  return async (dispatch) => {
		try {
		  const response = await fetch(`https://playground.4geeks.com/contact/user/${contact.id}`, {
			method: 'PUT',
			body: JSON.stringify(contact),
			headers: {
			  'Content-Type': 'application/json'
			}
		  });
		  const data = await response.json();
		  dispatch({ type: UPDATE_CONTACT, payload: data });
		} catch (error) {
		  console.error('Error updating contact:', error);
		}
	  };
	},
  
	// Delete a contact
	deleteContact: (contactId) => {
	  return async (dispatch) => {
		try {
		  await fetch(`https://playground.4geeks.com/contact/user/${contactId}`, {
			method: 'DELETE'
		  });
		  dispatch({ type: DELETE_CONTACT, payload: contactId });
		} catch (error) {
		  console.error('Error deleting contact:', error);
		}
	  };
	}
  };
  

  const reducer = (state = initialState, action) => {
	switch (action.type) {
	  case SET_CONTACTS:
		return {
		  ...state,
		  contacts: action.payload
		};
  
	  case ADD_CONTACT:
		return {
		  ...state,
		  contacts: [...state.contacts, action.payload]
		};
  
	  case UPDATE_CONTACT:
		return {
		  ...state,
		  contacts: state.contacts.map(contact =>
			contact.id === action.payload.id ? action.payload : contact
		  )
		};
  
	  case DELETE_CONTACT:
		return {
		  ...state,
		  contacts: state.contacts.filter(contact => contact.id !== action.payload)
		};
  
	  default:
		return state;
	}
  };
  
  export default reducer;