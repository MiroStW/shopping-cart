import { GetServerSideProps } from "next";
import ProductThumb from "../../components/ProductThumb";
import styles from "../../styles/products.module.css";
import { useGetPokemon } from "../../api/useGetPokemon";
import Nav from "../../components/Nav";
import { PokemonType } from "../../types";

export const getServerSideProps: GetServerSideProps = async () => {
  const ids = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 897 + 1)
  );
  return {
    props: {
      ids,
    },
  };
};

const Products = ({ ids }: { ids: number[] }) => {
  const { loading, error, products } = useGetPokemon(ids);

  if (error) {
    console.error(error);

    return <div>Oops, something went wrong, check console</div>;
  }

  return (
    <>
      <Nav />
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.productOverview}>
          {products.map((product: PokemonType, i: number) => (
            <ProductThumb key={i} product={product} sprite={product.sprite} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;

// possible addition: use graphQL pagination to paginate through all available
// pokemons
