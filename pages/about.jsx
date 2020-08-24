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
                    <div className="col-md-12  mt-5 mb-4">
                        <h3 className='mt-2 mb-3 text-center'>¡Estos son algunos recuerdos y momentos que me gustaría recordar con ustedes!</h3>
                    </div>
                    <div className="col-md-6  text-center mb-3">
                        <iframe src="https://www.youtube.com/embed/RA6igk-9wMg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi de bebé</p>
                    </div>
                    <div className="col-md-6  text-center mb-3">
                        <iframe src="https://www.youtube.com/embed/Sq89_6pgpSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi viendo la tv</p>
                    </div>
                    <div className="col-md-6  text-center mb-3">
                        <iframe src="https://www.youtube.com/embed/Htic4LpES1c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi ayudando en casa</p>
                    </div>
                    <div className="col-md-6  text-center mb-3">
                        <iframe src="https://www.youtube.com/embed/hgUziyP_ijk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sopi aprendiendo a comer</p>
                    </div>
                    <div className="col-md-6 text-center mb-3">
                        <iframe src="https://www.youtube.com/embed/p43NrJFJ1YY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>¿Cómo hace el gatito?</p>
                    </div>
                    <div className="col-md-6 text-center mb-3">
                        <iframe src="https://www.youtube.com/embed/SE7x1niuPj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Sophi cepillando sus dientes</p>
                    </div>
                </div>

            </Container>
        </div> 
    );
}
 
export default AboutPage;