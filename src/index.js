import React from 'react';
import ReactDOM from 'react-dom';
import App from './Root/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAUaVLz3BBFlw0_XJBw34vuO8b3toz5VnQ",
	authDomain: "todo-react-2f695.firebaseapp.com",
	databaseURL: "https://todo-react-2f695.firebaseio.com",
	projectId: "todo-react-2f695",
	storageBucket: "todo-react-2f695.appspot.com",
	messagingSenderId: "39471958776"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
