import React from 'react';
import module from './index.module.scss'
import {Container} from '../layout'
const Projects = () => {
    return (
        <div className={module.container}>
        <Container>
        <div className="center">
            <h1>Projekty</h1>
            <h5>Autorski kod:</h5>
            <span className="img_cnt">
                <figure>
                    <figcaption>kwakwak.pl
                        
                    </figcaption>
                    <a href="http://kwakwak.pl"><img src="./img/kwakwak.jpg" alt="img"/></a>
                    
                    <figcaption><i>Prosty serwis ogłoszeniowy, dotychczasowo mój największy z 
                            ukończonych projektów, były to moje początki dlatego stronę 
                            udostępniam jako Open Source. Aktualnie pracuję nad lepszym 
                            layoutem, dodatkowo nowa wersja będzie implementowana w oparciu o Jave</i></figcaption>
                    <a class="dwn" href="./open_source/kwakwak_open.rar">Pobierz</a>
                </figure>

                <figure>
                    <figcaption>portfolio
                        
                    </figcaption>
                    <a href="./pawel_old/"><img src="./img/pawel_portfolio.jpg" alt="img"/></a>
                    
                    <figcaption><i>Przykładowe portfolio świetnego modela, ciekawym elementem jaki udało mi się 
                            stworzyć jest ładowanie kolejnych zdjęć wraz ze scrollem</i></figcaption>
                </figure>
            
            
            </span>
            <h5>WordPress:</h5>
            <span className="img_cnt">
                <figure>
                    <figcaption>dekory-samochodowe.pl
                        
                    </figcaption>
                    <a href="http://dekory-samochodowe.pl"><img src="./img/dekory.jpg" alt="img"/></a>
                    
                    <figcaption><i>Pierwszy zadowolony klient</i></figcaption>
                </figure>
                <figure class="ciek">
                    <figcaption>Ciekawostki
                        
                    </figcaption>
                    <a><img src="./img/chmurka.svg" alt="img"/></a>
                    
                    <figcaption><i>Wiele projektów wciąż wisi w powietrzu i niestety ciężko z czasem,
                        ale wraz z jego upływem będzie ich przybywać. Dodatkowo trzeba też zaznaczyć, że 
                        dużo napisanego przeze mnie kodu to przede wszystkim testy 
                        różnych technologii, które nie nadają się do publikacji. 
                        Aktualnie udoskonalam kwakwak.pl oraz tworzę wersję aplikacji mobilnej. Kolejnymi dużymi projektemi mają być: darmowy serwis hostingowy oraz gra przeglądarkowa.</i></figcaption>
                </figure>
            
            </span>
        </div>
        </Container>
    </div>
    );
}

export default Projects;
