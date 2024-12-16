interface LineProps {
    heading?:string;
    paragraph?:string
    line?:string;
}

const Line1 = (props : LineProps)=>
{
    const {heading , paragraph , line} = props;
    return(
        <div className="">
            <p className="text-4xl font-medium leading-[54px] text-left">{heading}</p>
            <p className="text-2xl font-medium pt-[23px] pb-[13px] text-left" >{paragraph}</p>
            <div className="border-2 w-[121px] border-black" >{line} </div>
        </div>
    )
}
export default Line1;