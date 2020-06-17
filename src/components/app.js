import React from 'react';

import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js'
import ModelProvider from './context.js';

import './style.scss';
import './responsive.scss';

function App() {
    return (
        <ModelProvider>
            <Header />
            <Main />
            <Footer />
        </ModelProvider>
    )
}

export default App;