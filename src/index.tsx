import React from 'react';
import ReactDOM from 'react-dom';
import { createServer , Model } from 'miragejs';

import {App} from './App';

createServer({
  models: {
    transaction: Model,
  }, 

  seeds(server){
    server.db.loadData({
      transactions: [
        { 
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 12000,
          type: 'deposit',
          category: 'Job',
          createdAt: new Date('2021-05-06 09:00:00'),
        },
        { 
          id: 2,
          title: 'Aluguel',
          amount: 500,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-05-08 10:30:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get("/transactions", () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      //access data in the BODY request and parse JSON to javascript
      let data = JSON.parse(request.requestBody);
      data = {...data, createdAt: new Date()}
      return schema.create('transaction', data)
    });

  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
