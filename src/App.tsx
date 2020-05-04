import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Chat, Hero, PrivateRoute } from './components';

const App: React.FC = () => {
    return <Chat />;
};

export default App;
