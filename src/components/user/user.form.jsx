import { Input } from 'antd';
import { Button } from 'antd';

const UserForm = () => {
    return (
        <div className="user-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone</span>
                    <Input />
                </div>
                <div>
                    <Button type="primary"> Create User </Button>
                </div>
            </div>

        </div>
    )
}

export default UserForm;