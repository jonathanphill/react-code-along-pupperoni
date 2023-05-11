const Pic = ({src, alt})=>{
  console.log(src, alt);
    return (
      
      <li className="photo-container">
        <img src={src} alt={alt} />
      </li>
    );

   
}
export default Pic;