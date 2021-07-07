import './style.scss';
import clsx from "clsx";

const FilterButton = ({active, ...props}) => {
    const buttonStyle = clsx('filter_btn', {'active': active});
    return (
        <button {...props} className={buttonStyle}/>
    );
}

export default FilterButton;