var React = require('react')

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this) // SOLUTION return a brand new function with the this keyword bound to that function with whatever we pass in the bind method. WHAT WE ARE DOING IS we are saying to this.updateLanguage we want you to be a function so your this keyword, no matter what is always going to be bound to the this keyword inside the bind method.
  }

  updateLanguage (lang) {
    // Number 1 problem is that we do not know what the .this keyword is going to be bind to until the  updateLanguage is invoked
    this.setState(function () {
      return { selectedLanguage: lang }
    })
  }
  render () {
    let languages = [ 'All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python' ]

    return (
      <ul className='languages'>
        <p>Selected Language: {this.state.selectedLanguage} </p>
        {languages.map(function (lang) {
          return (
            <li onClick={this.updateLanguage.bind(null, lang)} key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul> // map allows us to add a second argument which in this case we will pass in this so now this keyword inside of it will be the same as this keyword thats outside of it
    )
  }
}

module.exports = Popular
