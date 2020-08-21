import { Row, Nav } from 'react-bootstrap';
import Link from 'next/link';

const NavComponent = () => {
    return ( 
        <Row className='pt-3 justify-content-center'>
            <Nav className='header-nav' activeKey="/">
                <Nav.Item>
                    <Link href="/"><a>Bautizo</a></Link>
                </Nav.Item>
                <span> | </span>
                <Nav.Item>
                    <Link href="/about"><a>Sobre Sophi</a></Link>
                </Nav.Item>
            </Nav>
        </Row>
     );
}
 
export default NavComponent;