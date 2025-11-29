interface PortfolioPageIdProps {
  params: Promise< {
    id: string;
  }>
}

export default async function PortfolioPageId({params} : PortfolioPageIdProps) {
 
 const {id} = await params;
 
  return (
    <>
      <h2>Página de portafolio: {id}</h2>
    </>
  );
}