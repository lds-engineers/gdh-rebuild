export default function ProdultDetails(
    { params }:{
        params : { productid: String };
    }
    ) {
    return (
        <>
            <h1>Product detail for {params.productid}</h1>
        </>
    )
}