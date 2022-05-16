import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch/index'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const dataList = [data]
    const convertedData = dataList.map(eachItem => ({
      latestMatchDetails: eachItem.latest_match_details,
      recentMatches: eachItem.recent_matches,
      teamBannerUrl: eachItem.team_banner_url,
    }))

    const {latestMatchDetails, recentMatches, teamBannerUrl} = convertedData[0]
    const latestMatchDetailsList = [latestMatchDetails]
    const convertedLatestMatchDetails = latestMatchDetailsList.map(
      eachItem => ({
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        date: eachItem.date,
        firstInnings: eachItem.first_innings,
        id: eachItem.id,
        manOfTheMatch: eachItem.man_of_the_match,
        matchStatus: eachItem.match_status,
        result: eachItem.result,
        secondInnings: eachItem.second_innings,
        umpires: eachItem.umpires,
        venue: eachItem.venue,
      }),
    )
    const convertedRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    const teamDetails = {
      latestMatchDetails: convertedLatestMatchDetails[0],
      recentMatches: [...convertedRecentMatches],
      teamBannerUrl,
    }

    this.setState({teamData: teamDetails, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    const getLoader = () => (
      <div testid="loader" className="loader-spinner">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )

    return (
      <div className="team-matches-container rcb-background">
        {isLoading ? getLoader() : <LatestMatch teamData={teamData} />}
      </div>
    )
  }
}

export default TeamMatches
