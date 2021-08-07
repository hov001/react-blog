import React from 'react'
import { useParams } from 'react-router-dom'
import PropsTypes from 'prop-types'

class SinglePage extends React.Component {
  constructor(props) {
    super(props)
    const { id } = props

    this.state = {
      uid: id,
    }
  }

  render() {
    const { uid } = this.state

    return (
      <div>
        <h1>single-working {uid}</h1>
      </div>
    )
  }
}

SinglePage.propTypes = {
  id: PropsTypes.string,
}

export default () => {
  const { id } = useParams()

  return <SinglePage id={id} />
}
