import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import fetch from 'isomorphic-fetch';

const Index = () => {
  const requestServer = fetch('/api/data', {credentials: 'same-origin'})
    .then(response => response.json())
    .catch(err => console.log("ERRR: ", err));

    console.log("REQUEST: ", requestServer);

  return <h1>Hello from client !!</h1>;
};

ReactDOM.render(<Index />, document.getElementById("index"));