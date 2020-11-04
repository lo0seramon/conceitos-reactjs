import React, { useState } from 'react';
import Header from './components/Header';

function App() {
    const [projects, setProjects] =  useState(["Guia Pauta", "Site Crialab"]);

    function handleAddProject() {
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }


    return (
        <>
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