import React from 'react';
import ReactDOM from 'react-dom';
import App from './lib/reddit';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<App/>, root);
});
