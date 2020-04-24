import React, { useState, useEffect } from 'react';

import Main from '../../components/Main';
import About from '../../components/About';
import Techs from '../../components/Techs';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <>
            <Main />
            <About />
            <Techs />
            <Projects />
            <Footer />
        </>
    );
}
