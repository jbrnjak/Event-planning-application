import Button from './Button';
import PropTypes from 'prop-types';
const Header = ({ title, onAdd }) => {

    return(
        <header className="header">
            <h1>{title}</h1>
           <Button onClick = {onAdd}/>
        </header>
    );
}
Header.defaultProps = {
    title: 'Planer',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header