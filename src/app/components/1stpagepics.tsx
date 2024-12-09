import Image from "next/image"
import path from "path"
interface ICardProps {
    image:any,
    paragraph:string,
    price:string|number

const PagePicsProps = [
    {
        id: 1,
        Image: "src/app/assets/Trenton modular sofa_3 1.png",
        paragraph: "Trenton modular sofa_3",
        price: "Rs. 25,000.00"


    }]
// {
//     id: 2,
// paragraph: "ishaq",
// heading: "hello student"
// }]




const PagePics = () => {
    return <div>
        {PagePics.map((props: PagePicsProps) => {
            const { image, paragraph, price } = props;
            return
            <div key={"id"} className="h-[287px] w-[397]" >
                <Image
                    src={image}
                    alt="furniture"
                    width={287}
                    height={287}
                    className="h-[287px] w-[287] object-cover overflow-hidden" />
                < p className="h-6 pt-[14px] text-base font-normal leading-6 text-left" > {paragraph} </p>
                < div className="pt-[11px] text-2xl font-medium leading-9 text-left" > {price} </div>
            </div>;
        
        })};
</div>}

{/* 
export default PagePics; */}

{/* 
        const data = [
        {
            id: 1,
        paragraph: 'saeef',
        heading: "hello boss"
    }
        ,
        {
            id: 2,
        paragraph: "ishaq",
        heading: "hello student"
    }]

        export default function home() {
    return (
        <>
            {data.map((elem) => {
                return (
                    <Card
                        key={elem.id}
                        img={elem.Image}
                        paragraph,
                    price
        heading = { elem.heading }
                paragraph = { elem.paragraph } />
      )

            })}
            <div className=" bg-yellow-400 p-5">
                <div className="bg-purple-600 flex">
                    <Mage Image=
                        "./app/assets/1.jpg" />
                </div>
                <Button />
            </div>

        </>
        )
} */}