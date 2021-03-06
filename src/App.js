import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import backgroundImage from './assets/floyd.jpg';

import './App.css';

function App() {
    const [projects, setProjects] =  useState([]);

    useEffect(() => {
        api.get('projects').then(resp => {
            setProjects(resp.data);
        });
    }, []);

    async function handleAddProject() {
        const resp = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Ramon Lima"
        });

        const project = resp.data;

        setProjects([...projects, project]);
    }


    return (
        <>
         <img width={300} src={backgroundImage} alt="George Floyd"/>
         <Header title="Projects">
             <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
             </ul>
         </Header>

         <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;