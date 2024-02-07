export default function Produltreviews(
    { params }:{
        params : { productid: String };
    }
    ) {
    return (
        <>
            <h1>Product reviews for {params.productid}</h1>
            <ul>
                <li>Review 1</li>
                <li>Review 1</li>
                <li>Review 1</li>
                <li>Review 1</li>
                <li>Review 1</li>
            </ul>
        </>
    )
}
