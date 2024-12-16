import Image from "next/image";


interface IPicProps {
    id: number,
    image: string,
}


const pics: IPicProps[] = [
    {
        id: 1,
        image: "/1st page pics/image1.jpg",
    },
    {
        id: 2,
        image: "/1st page pics/image2.jpg",
    },
    {
        id: 3,
        image: "/1st page pics/image3.jpg",
    }]



const First = () => {
    return <>
        {pics.map((props: IPicProps) => {
            const { id, image } = props;
            return (
                // <div key={id} className="h-[287px] w-[100%] flex " >
                <div key={id} className=" h-[554px] w-[393px] flex flex-col gap-[33px] items-center">
                    <Image
                        src={image}
                        alt="furniture"
                        width={393}
                        height={393}
                        className="w-[393px] h-[393px] object-none rounded-[10px] overflow-hidden" />
                    <div className="flex flex-col gap-[10px] items-center">
                        <p className="font-normal  text-[20px] leading-[30px] ">Going all-in with millennial design</p>
                        <p className="font-medium  text-[24px] leading-[36px] ">Read More</p>
                        <div className="w-[115px] border-2 border-black mb-[9px]"></div>
                            <div className="flex justify-between items-center w-[223px] ">
                                <div className="flex gap-[10px] ">
                                    <Image src="/Group.png" alt="TIME" width={18} height={18}  />
                                    <p>5 min</p>
                                </div>
                                <Image src="/Vector.png" alt="callender" width={22} height={22} />
                                <p>12th Oct 2022</p>
                                <div>
                            </div>
                        </div>
                    </div>
                </div>


            )
        })};
    </>
};

export default First;