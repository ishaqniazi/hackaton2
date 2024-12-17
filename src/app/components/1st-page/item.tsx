interface ICardProps {
    image:string,
    paragraph:string,
    price:string|number
 }
 const items= (props : ICardProps )=> {
     const { image , paragraph , price } =props;
     return(
         <>
 
               <div className="">{image}</div>
               <div className="  ">{paragraph}</div>
               <div className="  ">{price}</div>
         </>
     )
 }
 export default items