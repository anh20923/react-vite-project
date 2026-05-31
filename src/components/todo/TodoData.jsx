const TodoData = (props) => {
    //props is an object{}
    // {
    //     name: "Anh",
    //     age: 25,
    //     data: {}
    // }

    //cach1: 
    const { todoList } = props;

    //cach2
    //const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //cach3 khong nen lam

    console.log(">>> check props: ", todoList)
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("check map: ", item, index)
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}

            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )

}

export default TodoData