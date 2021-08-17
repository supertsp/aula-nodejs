

function Burguer(props) {
    return (
        <>
           <h1>Sua  hora de comer é: {new Date().toLocaleTimeString()}</h1>
           <h2>Sua carne preferia é: {props.carne}</h2>
        </>
    );
}

export default Burguer;