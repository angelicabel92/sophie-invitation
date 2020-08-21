import Head from 'next/head';
import HeaderComponent from '../components/HeaderComponent';
import { Container } from 'react-bootstrap';
import NavComponent from '../components/NavComponent';

const AboutPage = () => {
    return (
        <div>
            <Head>
                <title>Sophia Bautizo</title>
                <link rel="icon" href="/conejo.ico" />
            </Head>
            <Container>
                <HeaderComponent />
                <NavComponent />
                <div className="row">
                    <div className="col-md-12 text-center mb-5 mt-5">
                        <h3 className='mb-3'>¡Mi invitación personalizada!</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bZKA5ZOBBF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className='mt-2 mb-3 text-center'> ¡Estos son algunos recuerdos y momentos que me gustaría recordar con ustedes!</p>
                    </div>
                    <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RA6igk-9wMg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi de bebé</p>
                    </div>
                    <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sq89_6pgpSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi viendo la tv</p>
                    </div>
                    <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Htic4LpES1c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi ayudando en casa</p>
                    </div>
                    <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/huV4N2JjeVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi celebrando el cumple de la abuelita Alicia</p>
                    </div>
                    <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/p43NrJFJ1YY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>¿Cómo hace el gatito?</p>
                    </div>
                </div>

            </Container>
        </div> 
    );
}
 
export default AboutPage;