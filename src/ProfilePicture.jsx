function ProfilePicture (){
    const imgurl = './src/assets/catRJS.jpg';
    const handleclick = (e) => e.target.style.display ="none";
    return(
        <img onClick={(e) => handleclick(e)} src={imgurl}></img>
    );
}

export default ProfilePicture