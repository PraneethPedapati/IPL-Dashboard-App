import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import TeamCard from '../TeamCard/index'

class Home extends Component {
  state = {teamsList: [], isLoaded: false}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const convertedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsList: convertedData, isLoaded: true})
  }

  render() {
    const {teamsList, isLoaded} = this.state

    const getLoader = () => (
      <div testid="loader" className="loader-spinner">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )

    const getTeamsData = () => (
      <ul className="team-card-container">
        {teamsList.map(eachItem => (
          <TeamCard teamCard={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoaded ? getTeamsData() : getLoader()}
      </div>
    )
  }
}

export default Home
