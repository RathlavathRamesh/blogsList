// Write your JS code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogDetails: {}}

  componentDidMount() {
    this.getblogIem()
  }

  getblogIem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    //   const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({isLoading: false, blogDetails: updatedData})
  }

  renderDetails = () => {
    const {blogDetails} = this.state
    const {title, imageUrl, author, content, avatarUrl} = blogDetails
    console.log(blogDetails)
    return (
      <div className="ItemsCard">
        <h1 className="title">{title}</h1>
        <div className="avararcard">
          <img src={avatarUrl} alt="avatar" className="avatar" />
          <p className="user-desi">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="detailImg" />
        <p className="cont">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
