import Image from "next/image";
export default function IconDefault() {
    return (
        <>
            <Image
            src="/images/logo/tugaskita.png"
            alt="Tugaskita Logo"
            width={130}
            height={70} 
            priority={true}
            />
        </>
    )
}