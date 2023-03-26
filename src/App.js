import React from 'react';
import Button from './components/Button';
import Cards from './components/Cards';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <Button color="error">Sort by Date</Button>
            <Cards />
            <Button color="success">Show More</Button>
        </>
    );
};

export default App;
