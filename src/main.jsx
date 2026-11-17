import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout';
import Home from './pages/Home';
import Treinos from './pages/Treinos';
import Consultorias from './pages/Consultorias';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import NosConheca from './pages/NosConheca';
import './styles.css';

function App() {
    return <BrowserRouter><Layout><Routes><Route path="/" element={<Home/>}/><Route path="/treinos"
                                                                                    element={<Treinos/>}/><Route
        path="/consultorias" element={<Consultorias/>}/><Route path="/galeria" element={<Galeria/>}/><Route
        path="/contato" element={<Contato/>}/><Route path="/nos-conheca" element={<NosConheca/>}/><Route path="*"
                                                                                                         element={
                                                                                                             <section
                                                                                                                 className="section not-found container">
                                                                                                                 <h1>404</h1>
                                                                                                                 <p>Esta
                                                                                                                     página
                                                                                                                     não
                                                                                                                     existe.</p>
                                                                                                                 <a href="/">Voltar
                                                                                                                     ao
                                                                                                                     início</a>
                                                                                                             </section>}/></Routes></Layout></BrowserRouter>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
