import Image from "next/image";

const Icons = () => {
    return (
        <div
            className="w-[1440px] h-[316px] top-[100px] absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/2nd-page-pics/shop-pic.jpg')", opacity: 0.50 }}
        >
            <div className="flex flex-col items-center">
                <Image
                    src="/2nd-page-pics/Meubel House_Logos-05.png"
                    width={77}
                    height={77}
                    alt="iconImage"
                />
                <div className="font-medium text-[48px] leading-[72px]">Shop</div>
                <div className="font-medium text-[16px] leading-[24px]">Home Shop</div>
            </div>
        </div>
    );
};

export default Icons;