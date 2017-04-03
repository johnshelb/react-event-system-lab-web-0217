const React = require('react')

class EyesOnMe extends React.Component{
  constructor(){
    super()
    this.focusing = this.focusing.bind(this)
    this.blurring = this.blurring.bind(this)
  }

  focusing(){
    console.log ("Good!")
  }

  blurring(){
    console.log ("Hey! Eyes on me!")
  }

  render(){
    return (
      <button onFocus={this.focusing} onBlur={this.blurring}/>
    )
  }
}

module.exports = EyesOnMe
