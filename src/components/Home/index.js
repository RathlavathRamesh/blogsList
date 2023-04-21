import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

class Home extends Component {
  state = {userInfo: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({userInfo: formattedData, isLoading: false})
  }

  render() {
    const {userInfo, isLoading} = this.state
    return (
      <div data-testid="loader">
        <div className="home-container">
          <UserInfo />
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <BlogList userInfo={userInfo} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
