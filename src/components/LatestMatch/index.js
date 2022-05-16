import './index.css'
import MatchCard from '../MatchCard'

const LatestMatch = props => {
  const {teamData} = props
  const {latestMatchDetails, recentMatches, teamBannerUrl} = teamData
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  console.log(recentMatches)

  return (
    <div>
      <img src={teamBannerUrl} alt="team banner" className="banner-img" />
      <p className="latest-match-heading">Latest Matches</p>

      <div className="latest-match-container">
        <div className="latest-match-header-container">
          <div className="latest-match-text-container">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="competing-date">{date}</p>
            <p className="rest-text">{venue}</p>
            <p className="rest-text">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr className="break-line" />
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="hide-image"
        />
        <div className="latest-match-footer-container">
          <p className="details-heading">First Innings</p>
          <p className="details-text">{firstInnings}</p>
          <p className="details-heading">Second Innings</p>
          <p className="details-text">{secondInnings}</p>
          <p className="details-heading">Man of the Match</p>
          <p className="details-text">{manOfTheMatch}</p>
          <p className="details-heading">Umpires</p>
          <p className="details-text">{umpires}</p>
        </div>
      </div>
      <ul className="match-card-list-container">
        {recentMatches.map(eachItem => (
          <MatchCard matchCard={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default LatestMatch
