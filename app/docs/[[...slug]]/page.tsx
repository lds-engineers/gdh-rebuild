export default function Docs(
    {
        params,
    }: {
        params: {
            slug: String[]
        }
    }
) {
    if(params.slug?.length == 2){
        return <>
            <h1>Docs page for a1:{params.slug[0]} and a2: {params.slug[1]}</h1>
        </>
    } else if(params.slug?.length == 1){
        return <>
            <h1>Docs page for one params:{params.slug[0]}</h1>
        </>
    }
    return <>
        <h1>Docs page without params</h1>
    </>
}