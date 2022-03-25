import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';

const App = () => {
    return(
        <div className='application'>
            <Header />
            <div className='scroll-list'>
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
            </div>
        </div>
    );
}

export default App;