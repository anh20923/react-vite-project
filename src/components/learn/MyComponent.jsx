//component = html + css + js
import './style.css'

const MyComponent = () => {
    const value = "Anh"

    const arr = [1, 2, 3]
    return (
        <>
            <div> This is MyComponent.</div>
            <div> Value is {value}, {JSON.stringify(arr)}</div>
            <div className='child' style={{ borderRadius: "10px" }}> child</div>
        </>

    )
}

const FakeComponent = () => {
    return (
        <div> Fake Component</div>
    )
}


export default MyComponent;