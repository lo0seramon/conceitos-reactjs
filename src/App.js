import React, { useState } from 'react';
import Header from './components/Header';

import backgroundImage from './assets/floyd.jpg';

import './App.css';

function App() {
    const [projects, setProjects] =  useState(["Guia Pauta", "Site Crialab"]);

    function handleAddProject() {
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }


    return (
        <>
         <img width={300} src={backgroundImage} alt="George Floyd"/>
         <Header title="Projects">
             <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
             </ul>
         </Header>

         <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;