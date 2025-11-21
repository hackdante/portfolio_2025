export default function PublicLayout({
    children
}: {children:React.ReactNode }){
    return (
        <>
        <p>ESTE ES EL CHILDREN GENERAL</p>
        {children}
        </>
    )
}