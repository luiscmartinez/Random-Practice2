var React = require('react')
var PropTypes = require('prop-types')

const SelectedLanguage = (props) => {
  let languages = [ 'All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python' ]
  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            style={
              lang === props.selectedLanguage ? { color: '#790101' } : null
            }
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
          >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequried,
  onSelect: PropTypes.func.isRequried
}
class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (lang) {
    this.setState(() => {
      return { selectedLanguage: lang }
    })
  }
  render () {
    return (
      <div>
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular
