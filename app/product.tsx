// https://github.com/remix-run/react-router/issues/12841 - it hapens with pnpm
import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
    let product = { name: "Mac Mini m4", pid: params.pid };
    return { product };
}

export default function Product({
    loaderData,
}: Route.ComponentProps) {
    return (
        <div className='py-8 px-30'>
            <h1 className='text-2xl font-bold'>Product &nbsp;({loaderData.product.pid})</h1>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-blue-400 font-bold">ID</div>
                <div className="italic">{loaderData.product.pid}</div>
                <div className="text-blue-400 font-bold">Name</div>
                <div className="italic">{loaderData.product.name}</div>
            </div>
        </div>
    );
}