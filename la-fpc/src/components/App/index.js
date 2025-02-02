import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage'
import SignIn from '../SignIn';
import AddAdmin from '../addAdmin'
import Affordable from '../Affordable';
import Healthy from '../Healthy';
import Fair from '../Fair';
import Sustainable from '../Sustainable';


class App extends Component {

  state = {
    user: null,
    laoding: true,
    isLogged: false
  }

  register = async (data) => {
    console.log("hitting")
    try {
      const registerResponse = await fetch(`http://localhost:3030/admin/register-admin`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await registerResponse.json()

      this.setState({
        user: parsedResponse.data,
        laoding: false
      })

    } catch(err) {
      console.log(err, 'this is error from register')
    }
  }



    render() {
  
      console.log(this.props)
        return (
          <div>
            <div>NAV BAR</div>
            <Switch>
              <Route exact path='/' render={(props) =>  <AddAdmin register={this.register}  {...props} />} />
              <Route exact path='/home' render={(props) =>  <Homepage {...props} />}  />
              <Route exact path='/affordable' render={() => <Affordable />}/>
              <Route exact path='/healthy' render={() => <Healthy />}/>
              <Route exact path='/fair' render={() => <Fair />}/>
              <Route exact path='/sustainable' render={() => <Sustainable />}/>
            </Switch>
          </div>
        )
    }
}

export default App