import { Row, Col, Image } from "react-bootstrap";

const CeremonyComponent = () => {
    return (
        <div>
            <Row className='ceremory-component align-items-center mt-5 pt-3'>
                <Col lg='12' className='text-center mt-2 mb-5'>
                    <p className='ceremory-component__intro'>Quiero invitarlos a mi bautizo, por razones que ya sabemos
                        no podemos celebrarlo en grande así que se nos ocurrió la idea de que todos
                        podamos participar
                    </p>
                </Col>
                <Col lg='6' className="text-center">
                    <div className='d-flex align-items-center justify-content-center ceremory-component__date'>
                        <span className="ceremory-component__date--number mr-3">30</span>
                        <span className="ceremory-component__date--month">Agosto <br/> de 2020</span>
                    </div>
                    <p className="ceremory-component__hour">Hora: 09:00 AM</p>
                    <a className="btn btn-lg ceremory-component__btn" href="https://meet.google.com/xeq-nkpp-ozy" target='_blank'> Ir a la capilla</a>
                </Col>
                <Col lg='6' className='ceremory-component__img'>
                    <Image src="./familia-bm.jpeg" rounded />
                </Col>
            </Row>
            <Row className='mt-5 text-center'>
                <Col lg='12' className='mb-4'>
                    <h2 className='ceremory-component__title'>¿Quiénes estaremos?</h2>
                    <p>Personal y telemáticamente</p>
                </Col>
                <Col lg='6'>
                    <h4 className='ceremory-component__title'>Mis papis</h4>
                    <div className='d-flex justify-content-around mt-4'>
                        <div className='d-flex ceremory-component__retr mb-4'>
                            <Image className='ceremory-component__retr--img' src="./jessica.png" />
                            <p>Jessica Martinez</p>
                        </div>
                        <div className='d-flex ceremory-component__retr mb-4'>
                            <Image className='ceremory-component__retr--img' src="./jose.png" />
                            <p>Jose Beltrán</p>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <h4 className='ceremory-component__title'>Mis padrinos</h4>
                    <div className='d-flex justify-content-around mt-4'>
                        <div className='d-flex ceremory-component__retr mb-4'>
                            <Image className='ceremory-component__retr--img' src="./angelica.png" />
                            <p>Angélica Beltrán</p>
                        </div>
                        <div className='d-flex ceremory-component__retr mb-4'>
                            <Image className='ceremory-component__retr--img' src="./santiago.jpeg" />
                            <p>Santiago Martinez</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
     );
}
 
export default CeremonyComponent;