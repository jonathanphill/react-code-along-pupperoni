const Pic = ({src, alt})=>{
    return (
      
      <li className="photo-container">
        <img src={src} alt={alt} />
      </li>
    );

   
}
export default Pic;