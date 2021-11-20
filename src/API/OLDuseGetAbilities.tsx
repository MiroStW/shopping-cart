import { useState, useEffect } from "react";
import useGetRemoteData from "./OLDuseGetRemoteData";

interface Abilities {
  [index: string]: any;
}
[];

type DataReturnType = {
  isLoading: boolean;
  error: string | null;
  abilities: Abilities | null;
};

const useGetAbilities = (urls: string[] | null): DataReturnType => {
  const { isLoading, error, data } = useGetRemoteData(urls ? urls : []);
  const [abilities, setAbilities] = useState<Abilities | null>(null);

  useEffect(() => {
    if (data) {
      // console.log(data);
      setAbilities(
        data.map((ability) => ({
          name: ability.names.filter(
            (entry: { [index: string]: any }) => entry.language.name === "en"
          )[0].name,
          effect: ability.effect_entries.filter(
            (entry: { [index: string]: any }) => entry.language.name === "en"
          )[0].effect,
        }))
      );
    }
  }, [data, setAbilities]);

  // useEffect(() => {
  //   console.log(abilities);
  // }, [abilities]);

  // useEffect(() => {
  //   console.log(urls);
  // });

  return { isLoading, error, abilities };
};

export default useGetAbilities;
