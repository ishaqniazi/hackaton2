interface LineProps {
    heading?:string;
    line?:string;
}

const Line = (props : LineProps)=>
{
    const {heading , line} = props;
    return(
        <div>
            <p className="pt-[35px] pb-3 text-2xl font-medium leading-9 text-left">{heading}</p>
            <div className="border-2 w-[121px] border-black" >{line} </div>
        </div>
    )
}
export default Line;