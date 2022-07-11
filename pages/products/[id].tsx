import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useGetPokemon } from "../../api/useGetPokemon";
import styles from "../../styles/productDetails.module.css";
import AddToCartButton from "../../components/AddToCartButton";
import Nav from "../../components/Nav";

const product = ({ id }: { id: number }) => {
  if (isNaN(id)) return <p>Invalid id</p>;

  const { loading, error, products } = useGetPokemon([id], true);
  const pokemon = products[0];

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
          <div className={styles.productSection}>
            <div>
              <img src={pokemon.sprite} alt="" className={styles.productImg} />
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

export default product;

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
      id: parseInt(params!.id as string),
    },
  };
};
