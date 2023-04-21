// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class BlogItem extends Component {
  render() {
    const {Item} = this.props
    const {id, imageUrl, avatarUrl, topic, title, author} = Item
    return (
      <Link to={`/blogs/${id}`}>
        <div className="BlogItem">
          <img src={imageUrl} alt="imgae" className="image" />
          <div className="content">
            <p className="user-designation">{topic}</p>
            <h1 className="user-name">{title}</h1>
            <div className="avararcard">
              <img src={avatarUrl} alt="avatar" className="avatar" />
              <p className="user-designation">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default BlogItem
