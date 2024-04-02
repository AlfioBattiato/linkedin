import Button from 'react-bootstrap/Button';

function MyButton(props) {
    return (
        <Button className='rounded-pill fw-semibold'  variant={`outline-${props.colore}`} 
        onClick={props.funzione}
        type={props.type}>
           <div className='d-flex'> {props.img&&(<img src={`${props.img}`} alt='img'></img>)}{props.text}</div>
        </Button>
    )
}
export default MyButton;