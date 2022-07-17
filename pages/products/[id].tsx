import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { useGetPokemon } from "../../api/useGetPokemon";
import styles from "../../styles/productDetails.module.css";
import AddToCartButton from "../../components/AddToCartButton";
import Nav from "../../components/Nav";

const Product = ({ id }: { id: number }) => {
  const { loading, error, products } = useGetPokemon([id], true);
  const pokemon = products[0];

  if (Number.isNaN(id)) return <p>Invalid id</p>;
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.dir(error);
    return <p>Oops, something went wrong, check console</p>;
  }

  return (
    <>
      <Nav />
      {!loading && (
        <>
          <div>
            <Link href={`/products`}>
              <span style={{ textDecoration: "underline" }}>
                Back to products
              </span>
            </Link>
          </div>
          <h1>{pokemon.name}</h1>
          <p>
            This page is statically generated without requiring additional API
            calls.
          </p>
          <div className={styles.productSection}>
            <div>
              <Image src={pokemon.sprite} width="174" height="174" />
            </div>
            <div>
              <p>
                <b>Height:</b> {pokemon.height}
              </p>

              <div>
                {pokemon.abilities?.map((ability, i) => (
                  <div key={i}>
                    <p>
                      <b>{ability.name}</b>
                    </p>
                    <p>{ability.effect}</p>
                  </div>
                ))}
              </div>
              <AddToCartButton product={pokemon} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = Array.from({ length: 897 }, (e, i) => (i + 1).toString());
  return {
    paths: ids.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: parseInt(params?.id as string, 10),
    },
  };
};
