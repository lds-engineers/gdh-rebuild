export default function ProdultDetails(
    { params }:{
        params : { productid: String, reviewid: String };
    }
    ) {
    return (
        <>
            <h1>For Product {params.productid} Review {params.reviewid}</h1>
        </>
    )
}