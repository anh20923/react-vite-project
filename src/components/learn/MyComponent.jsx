import "./style.css"

const MyComponent = () => {
    return (
        <>
            <div> This is my component</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>

    );
}

export default MyComponent