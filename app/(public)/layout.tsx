import { Navbar } from "@/components/composite";

export default function PublicLayout({
    children
}: {children:React.ReactNode }){
    return (
        <>
         <Navbar />
        <p className="text-center">Bienvenidos a</p>
        {children}
        </>
    )
}