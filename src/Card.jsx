import profilePic from './assets/catRJS.jpg'
function Card()
{
   return(
    <div className="card">
         <img className="card-image" src={profilePic} alt="profile picture"></img>
         <h2 className="card-title">Pro code</h2>
         <p className="card-text"> i study english and play video games</p>
    </div>
   )
}
export default Card