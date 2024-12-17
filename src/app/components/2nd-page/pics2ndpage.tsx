import Image from "next/image";


interface IPicProps {
    id: number,
    image: string,
    paragraph?: string
    price?: string | number


}


const pics: IPicProps[] = [
    {
        id: 1,
        image: "/2nd-page-pics/1stpic.png",
        paragraph: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",

    },
    {
        id: 2,
        image: "/2nd-page-pics/2ndpic.png",
        paragraph: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
    }]



const FirstShop = () => {
    return <>
        {pics.map((props: IPicProps) => {
            const { id, image, paragraph, price } = props;
            return (
                // <div key={id} className="h-[287px] w-[100%] flex " >
                <div key={id} className=" h-[1791px] w-[1242px] flex flex-col gap-[33px] items-center">
                    <Image
                        src={image}
                        alt="furniture"
                        width={287}
                        height={287}
                        className="w-[287px] h-[287px] object-none rounded-[10px] overflow-hidden" />
                    <p className="font-regular text-left text-[16px]">{paragraph} </p>
                    <p className="font-medium  text-left text-[24px]">{price}</p>

                </div>
            )
        })};
    </>
};

export default FirstShop;