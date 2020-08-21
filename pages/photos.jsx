import Head from 'next/head';
import HeaderComponent from '../components/HeaderComponent';
import { Container } from 'react-bootstrap';
import NavComponent from '../components/NavComponent';

const PhotosPages = () => {
    return (
        <div>
            <Head>
                <title>Sophia Bautizo</title>
                <link rel="icon" href="/conejo.ico" />
            </Head>
            <Container>
                <HeaderComponent />
                <NavComponent />
                <h1>photos</h1> 
            </Container>
        </div> 
    );
}
 
export default PhotosPages;