export default function PublicLayout({
    children
}: {children:React.ReactNode }){
    return (
        <>
        <p className="text-center">ESTE ES EL CHILDREN GENERAL</p>
        {children}
        </>
    )
}