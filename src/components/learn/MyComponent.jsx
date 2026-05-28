import "./style.css"

const MyComponent = () => {
    //const myVariable = "Hello Anh -"; //string
    //const myVariable = 25; // number

    // const myVariable = true; // boolean - html se khong hien len vi day la toan tu
    //const myVariable = undefined; //  html se khong hien len vi day la toan tu
    // const myVariable = null; //html se khong hien len vi day la toan tu

    //object
    //const myVariable = [1,2,3]
    const myVariable = {
        name: "Anh",
        age: 25
    }

    return (
        <>
            <div> {JSON.stringify(myVariable)} This is my component</div>
            <div>{console.log("Hi hihiihi")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>

    );
}

export default MyComponent