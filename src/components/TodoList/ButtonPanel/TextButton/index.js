import './style.scss';
import clsx from "clsx";

const TextButton = ({hidden, ...props}) => {
    const buttonStyle = clsx('text_button', {'hidden': hidden});
    return (
        <button {...props} className={buttonStyle}/>
    );
};

export default TextButton;