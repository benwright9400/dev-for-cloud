import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { useState } from 'react';
Amplify.configure(awsExports);
// { signOut, user }
function App() {
  const [page, setPage] = useState("PETS");

  const PETS = "PETS";
  const WALKERS = "WALKERS";
  const ACCOUNT = "ACCOUNT";

  return (
    <div>
      <div className='shadow-md w-full px-12 md:px-20 flex flex-row'>
        <img src='./logo.png' className='h-12 py-2 ml-2'></img>
        <div onClick={() => setPage(PETS)} className='ml-12 h-12 pt-3 align-middle text-center px-4 my-auto pt-1 font-semibold text-vert hover:bg-vert hover:text-white cursor-pointer'>
          Pets
        </div>
        <div onClick={() => setPage(WALKERS)} className='h-12 pt-3 align-middle text-center px-4 my-auto pt-1 font-semibold text-vert hover:bg-vert hover:text-white cursor-pointer'>
          Walkers
        </div>
        <div onClick={() => setPage(ACCOUNT)} className='h-12 pt-3 align-middle text-center px-4 my-auto pt-1 font-semibold text-vert hover:bg-vert hover:text-white cursor-pointer'>
          Account
        </div>
      </div>
      <div className='px-12 md:px-20 mt-4'>
        {
          page
        }
      </div>
    </div>
  );
}

// export default withAuthenticator(App);

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Amplify, { API } from 'aws-amplify';
// import React, { useEffect, useState } from 'react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// const myAPI = "pet";
// const path = '/resources/pet'; 

// const App = () => {
//   const [input, setInput] = useState("")
//   const [customers, setCustomers] = useState([])

//   //Function to fetch from our backend and update customers array
//   function getCustomer(e) {
//     let customerId = e.input
//     API.get(myAPI, path + "/" + customerId)
//        .then(response => {
//          console.log(response)
//          let newCustomers = [...customers]
//          newCustomers.push(response)
//          setCustomers(newCustomers)

//        })
//        .catch(error => {
//          console.log(error)
//        })
//   }

//   return (
    
//     <div className="App">
//       <h1>Super Simple React App</h1>
//       <div>
//           <input placeholder="customer id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
//       </div>
//       <br/>
//       <button onClick={() => getCustomer({input})}>Get Customer From Backend</button>

//       <h2 style={{visibility: customers.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
//       {
//        customers.map((thisCustomer, index) => {
//          return (
//         <div key={thisCustomer.customerId}>
//           <span>{thisCustomer.url} -  {thisCustomer.success}</span>
//         </div>)
//        })
//       }
//     </div>
//   )
// }

// export default withAuthenticator(App);