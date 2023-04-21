// Write your JS code here
import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {userInfo} = this.props
    return (
      <ul>
        {userInfo.map(each => (
          <BlogItem Item={each} key={each.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
