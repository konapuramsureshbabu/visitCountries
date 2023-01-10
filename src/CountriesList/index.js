import './index.css'

const CountriesList = props => {
  const {eachData, onChangeVisit} = props
  const {id, name, isVisited} = eachData

  const onClickVisited = () => {
    onChangeVisit(id)
  }

  return (
    <>
      <li className="list-class" key={id}>
        <p className="countries-name">{name}</p>
        {isVisited ? (
          <p className="visited">Visited</p>
        ) : (
          <button
            type="button"
            className="button-class"
            onClick={onClickVisited}
          >
            Visit
          </button>
        )}
      </li>
    </>
  )
}

export default CountriesList
