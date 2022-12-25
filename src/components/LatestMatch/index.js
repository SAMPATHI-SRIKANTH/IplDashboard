// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-logo-container">
          <div className="latest-match-details-1">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="latest-match-label">First Innings</p>
          <p className="latest-match-value">{firstInnings}</p>
          <p className="latest-match-label">Second Innings</p>
          <p className="latest-match-value">{secondInnings}</p>
          <p className="latest-match-label">Man Of The Match</p>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <p className="latest-match-label">Umpires</p>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
