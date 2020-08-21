import { Row, Col } from 'react-bootstrap';

const HeaderComponent = () => {
    return ( 
        <Row className='mt-5 mb-5 header'>
            <Col>
                <div className="header__img shadow rounded position-relative">
                    <div className="header__img--title shadow p-2 bg-white position-absolute mx-auto rounded text-center">
                        <h1>Bautizo de Sophia</h1>
                    </div>
                </div>
            </Col>
        </Row>
     );
}
 
export default HeaderComponent;