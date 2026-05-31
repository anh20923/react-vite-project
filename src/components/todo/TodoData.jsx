const TodoData = (props) => {
    //props is an object{}
    // {
    //     name: "Anh",
    //     age: 25,
    //     data: {}
    // }

    //cach1: 
    const { name, age, data } = props;

    //cach2
    //const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //cach3 khong nen lam

    console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )

}

export default TodoData