import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/counter';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Biography } from './pages/Biography';
import { Gallery } from './pages/Gallery';
import { Messages } from './pages/Messages';
import { Programme } from './pages/Programme';
import { useState } from 'react';

function Home() {
    return (
        <>
            <Hero />
            <Counter />
        </>
    )
}

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/biography" Component={Biography} />
                <Route path="/goodwill-messages" Component={Messages} />
                <Route path="/gallery" Component={Gallery} />
                <Route path="/programme" Component={Programme} />
            </Routes>
            <Footer />
        </>

    );
}

export default App;
