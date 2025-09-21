import React from 'react'
import useAppStore from '../../../stores/app'
import { useShallow } from 'zustand/shallow'

import './Contacts.css'

const Contacts = () => {
  const { contacts } = useAppStore(useShallow((state => ({
    contacts: state.contacts,
  }))));

  return (
    <section className='contactsContainer'>
      <header>
        Contacts
      </header>
      <div className='contacts'>
        {contacts.map(contact => (
          <div className='contact'>
            <img src={contact?.avatarUrl} height="24" width="24" />
            <span>{contact?.firstName + " " + contact?.lastName}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contacts