export default async function Page() {
    const API = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
        const response = await fetch(`${API}/prod`, { cache: 'no-store' });
        if (!response.ok) throw new Error("Error al cargar productos");

        const productos = await response.json();

        return (
            <div>
                <h1>PRODUCTOS</h1>
                {productos.map((prod: any) => (
                    <div key={prod.id}>
                        <h1>{prod.name}</h1>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        return <div>Error cargando productos. Revisa si el backend está activo.</div>;
    }
}