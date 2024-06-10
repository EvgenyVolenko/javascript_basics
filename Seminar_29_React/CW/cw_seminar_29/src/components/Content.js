function Content(props) {

    let colorItem = null;

    if (props.count) {
        colorItem = 'green';
    } else {
        colorItem = 'red';
    }

    return (
        <div>
            <input type="text" style={{ backgroundColor: colorItem }}></input>
        </div >
    );
}

export default Content;