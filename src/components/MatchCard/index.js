import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchCard

  const matchStatusClassName = matchStatus === 'Won' ? 'won-text' : 'lost-text'

  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-list-item-img"
      />
      <p className="competing-team-list-item-name">{competingTeam}</p>
      <p className="competing-team-list-item-result">{result}</p>
      <p className={`competing-team-list-item-status ${matchStatusClassName}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
