import Row from 'react-bootstrap/Row'; 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css';

function SearchCity() {
  return ( 
    <Form>
        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Rechercher une ville</Form.Label>
        <Form.Control type="email" placeholder="Rechercher une ville" />
    </Form.Group>
        </Row>
    
        <Button variant="primary" type="submit">
            Submit
        </Button>
</Form>
  );
}

export default SearchCity;