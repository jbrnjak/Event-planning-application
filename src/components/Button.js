import PropTypes from 'prop-types'
const Button = () => {
   const onClick = (e) => {
   }
    return (
        <button onClick={onClick} className="btn">Dodaj</button>
    );
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
   
}
export default Button;

