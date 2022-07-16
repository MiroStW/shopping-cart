import { GetServerSideProps } from "next";
import ProductThumb from "../../components/ProductThumb";
import styles from "../../styles/products.module.css";
import { useGetPokemon } from "../../api/useGetPokemon";
import Nav from "../../components/Nav";
import { PokemonType } from "../../types";

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
        <>
          <p>This Reload the page to fetch some other random pokemons.</p>
          <div className={styles.productOverview}>
            {products.map((product: PokemonType, i: number) => (
              <ProductThumb key={i} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const ids = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 897 + 1)
  );
  return {
    props: {
      ids,
    },
  };
};

// possible addition: use graphQL pagination to paginate through all available
// pokemons
