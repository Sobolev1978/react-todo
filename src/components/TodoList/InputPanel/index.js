import './style.scss';

const InputPanel = (props) => {
    return (
        <div className={'input_panel'}>
            <input {...props} className={'todo_input'}/>
        </div>
    );
};

export default InputPanel;