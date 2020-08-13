import React from 'react';
import module from './index.module.scss'
import {Container} from '../layout'
const Contact = () => {
    return (
        <div className={module.container}>
        <Container>
        <div className="center" style={{margin:"auto 0"}}>
            <h1>Kontakt</h1>
            <p>Zainteresowany współpracą?</p>
            <p><s>Napisz do mnie korzystając z poniższego formularza:</s></p>
            <form action="./mailto/index.php" method="post">
                <input type="text" placeholder="Subject" name="subject"/>
                <input type="email" name="mail" placeholder="Your email adress"/>
                <textarea name="message" placeholder="type here"></textarea>
                <input type="submit" name="submit" value="Send message"/>
            </form>
            <p>Uwaga: wysyłanie meili chwilowo niedostępne, proszę pisać na poniższy adres</p>
            <a href="mailto:lukasz.bakowski@amu.edu.pl">lukasz.bakowski@amu.edu.pl</a>
        </div>
        </Container>
    </div>
    );
}

export default Contact;
