export default function ProductRow({setSelectedProductId, product}) {
    return (
        <tr onClick={() => {setSelectedProductId(product.id)}}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            {/* <td>{product.category}</td>
            <td>{product.description}</td> */}
            <td>{product.image}</td>
        </tr>
    );
}