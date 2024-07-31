import "./topdeals.scss"
import { topDealUsers } from "../../data"

function Topdeals() {
  return (
    <div className="topdeals">
        <h1>Top Deals</h1>
        {topDealUsers.map(user => (<div className="deals-container" key={user.id}>
            <img src={user.img} alt="" />
            <div className="name">
                <h5>{user.username}</h5>
                <p>{user.email}</p>
            </div>
            <h4 className="price">${user.amount}</h4>
        </div>))}
      
    </div>
  )
}

export default Topdeals
