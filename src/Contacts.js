import React, { Component } from 'react'; 

import contacts from './contacts.json'

export default class Contacts extends Component  {

  
  state = { 
    person: contacts.slice(0,5)
  }
  render () {
  return (
    <>
 
    <h1>IronContacts</h1>

   <button>Add Random Contact</button>

  <div className="Contacts">
   
    <table>

    <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>

  {this.state.person.map((person, index) => (
   <tr key={person.id}>
                <td>
                  <img src={person.pictureUrl} alt={person.name} />
                </td>
                <td>
                  <h2>{person.name}</h2>
                </td>
                <td>
                  <h2>{Math.round(person.popularity *100)/100}</h2>
                </td>
  </tr> ))}


    </table>

   
    </div>
    </>
  )
}
}
 