import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { UserIcon } from '../../components/icon'
import './index.scss'

export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values)
    }

    let urlElements = window.location.pathname

    console.log(urlElements)
    return (
        <div className="registration-form">
            <Form onFinish={onFinish}>
                <div className="form-icon">
                    <span>
                        <UserIcon />
                    </span>
                </div>
                <div className="form-group">
                    <Input
                        type="text"
                        className="form-control item"
                        id="username"
                        placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="password"
                        className="form-control item"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="text"
                        className="form-control item"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="text"
                        className="form-control item"
                        id="phone-number"
                        placeholder="Phone Number"
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="text"
                        className="form-control item"
                        id="birth-date"
                        placeholder="Birth Date"
                    />
                </div>
                <div className="form-group">
                    <Button htmlType="submit" className="btn btn-block create-account">
                        Create Account
                    </Button>
                </div>
            </Form>
        </div>
    )
}
