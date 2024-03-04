import React from 'react';
import withLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({

    AppBody: {
        marginTop: '1rem',
        padding: 'calc(2rem + 2vw)',
        minHeight: '60vh',
        '@media (max-width: 900px)': {
            height: '40vh',

        }
    },
    form: {
        marginTop: '1rem',
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column'

        }

    }

})

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    handleLoginSubmit(e) {
        e.preventDefault()
        this.setState({
            isLoggedIn: true
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    componentDidUpdate() {
        if (this.state.email && this.state.password) {
            if (!this.state.enableSubmit) {
                this.setState({
                    enableSubmit: true
                })
            }
        } else {
            if (this.state.enableSubmit) {
                this.setState({
                    enableSubmit: false
                })
            }
        }
    }

    render() {
        const { email, password, enableSubmit } = this.state
        return (
            <>
                <div className={css(styles.AppBody)}>
                    <p>Login to access the full dashboard</p>
                    <form action="" onSubmit={this.handleLoginSubmit} className={css(styles.form)}>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" value={email} onChange={this.handleChangeEmail} />
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" value={password} onChange={this.handleChangePassword} />
                        <input type="submit" value="Ok" disabled={!enableSubmit} />
                    </form>
                </div>
            </>
        );
    }
}

export default withLogging(Login)
