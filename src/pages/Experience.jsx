import React from 'react';
import module from './index.module.scss'
import {Container} from '../layout'
const Experience = () => {
    return (
        <div className={module.container}>
        <Container>

        <div className="center">
            <h1>Kim jestem</h1>
            <article>
                Na dzień dzisiejszy jestem studentem Politechniki Poznańskiej, ale przede wszystkim
                jestem programistą. Mam fioła na punkcie wydajności dlatego
                zawsze staram się tworzyć optymalny i jak najlepszej jakości kod.
                Lubię testować i badac różne języki programowania jak i technologie.
                Zajmuje się także hostingiem i od ponad roku prowadzę testy na własnym 
                serwerze Linux. <a className="open">Czytaj więcej...</a>
            </article>

            <div className="flexit">


                <div>
                    <h3>Umiejętności i znane technologie:</h3>
                    <table className="skills">
                        <thead><th>Technologia</th><th>Skill</th></thead>
                        <tr><td>PHP</td><td>4/5</td></tr>
                        <tr><td>C++</td><td>3/5</td></tr>
                        <tr><td>CSS3 {'{SASS}'}</td><td>4/5</td></tr>
                        <tr><td>HTML</td><td>5/5</td></tr>
                        <tr><td>JavaScript</td><td>4/5</td></tr>
                        <tr><td>AJAX</td><td>4/5</td></tr>
                        <tr><td>JSON</td><td>4/5</td></tr>
                        <tr><td>SQL</td><td>4/5</td></tr>
                    </table>
                </div>
                <div>
                    <h3>Aktualnie poznaje/badam/testuje:</h3>
                    <table className="skills">
                        <thead><th>Technologia</th><th>Skill</th></thead>
                        <tr><td>Java</td><td>1/5</td></tr>
                        <tr><td>WebSocket</td><td>1/5</td></tr>
                    </table> 
                </div>

            </div>
        </div>

        </Container>
    </div>
    );
}

export default Experience;
