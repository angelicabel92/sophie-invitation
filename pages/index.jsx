import Head from 'next/head';
import HeaderComponent from '../components/HeaderComponent';
import { Container } from 'react-bootstrap';
import NavComponent from '../components/NavComponent';
import CeremonyComponent from '../components/ceremonyComponent';

export default function Home() {
  return (
    <div className='mb-5'>
      <Head>
        <title>Sophia Bautizo</title>
        <link rel="icon" href="/conejo.ico" />
      </Head>
      <Container>
        <HeaderComponent />
         <NavComponent />
        <CeremonyComponent />
      </Container>
    </div>
  )
}
