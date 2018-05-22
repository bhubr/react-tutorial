import React from 'react'
import Markdown from 'react-markdown'

class MdJs extends React.Component {
  constructor(props) {
    super(props)
    const { params: { app }, url } = this.props.match
    this.state = { app, md: '' }
  }
  componentDidUpdate() {
    // Re-highlight with Prism
    Prism.highlightAll();
  }
  componentWillReceiveProps(nextProps) {
    const { app, step } = nextProps.match.params
    if(app !== this.state.app || step !== this.state.step) {
      const { md } = this.state
      this.fetchMarkdown(app, step)
    }
  }
  fetchMarkdown(app, step) {
    const url = `/${app}/instructions/step1.md`
    fetch(url)
    .then(res => res.text())
    .then(md => {
      this.setState((prevState, props) => {
        return { md, app } // , step }
      })
    })
  }
  componentWillMount() {
    const { app, step } = this.state
    this.fetchMarkdown(app, step)
  }
  render() {
    const { params: { app, step } } = this.props.match
    const { md } = this.state
    return(
      <Markdown source={md} escapeHtml={false} />
    )
  }
}

export default MdJs
