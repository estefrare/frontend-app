import React from 'react'
import css from './home.module.css'

class Home extends React.Component {
  render = () => {
    return (
      <div className={css.container}>
        <div className={css.title}>
          Hola {this.props.userName}
        </div>
      </div>
    )
  }
}

export default Home