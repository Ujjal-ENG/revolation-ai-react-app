import React from 'react';
import Button from './components/Button';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <Button color="error">Sort by Date</Button>
        </>
    );
};

export default App;
