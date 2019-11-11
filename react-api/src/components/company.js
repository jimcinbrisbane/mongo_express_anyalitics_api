import React from 'react'


const Companies = ({ companies }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {companies.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.id}</h5>

          </div>
        </div>
      ))}
    </div>
  )
};

export default Companies