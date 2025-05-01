// TODO: Workaround for the issue with the route loader not being able to access the params
import type { Route } from '.react-router/types/app/+types/product';

export async function loader({ params }: Route.LoaderArgs) {
    let product = { name: "Product Name", pid: params.pid };
    return { product };
}

export default function Product({
    loaderData,
}: Route.ComponentProps) {
    return <div>{loaderData.product.name}</div>;
}