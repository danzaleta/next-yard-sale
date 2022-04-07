import React from 'react';
import '@styles/CreateAccount.scss'

const CreateAccount = () => {
    return (
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <h1 className="title">Create a new account</h1>

                <form action="/" className="main-form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" placeholder="Example Name" id="name" className="input input-name" />

                        <label htmlFor="email" className="label">Email address</label>
                        <input type="text" placeholder="user@email.com" id="email" className="input input-email" />

                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" placeholder="********" id="password" className="input input-password" />
                    </div>

                    <input type="submit" value="Create" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;