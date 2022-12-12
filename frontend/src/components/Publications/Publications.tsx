import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Publication } from "./Publication/Publication";
import { IPublication } from "./interfaces";

export const Publications = () => {
  const [publications, setPublications] = useState<IPublication[]>([]);
  const HOST = "http://localhost:8000";

  useEffect(() => {
    axios
      .get(HOST + "/v1/publications/", {
        headers: { Authorization: "Token " + localStorage.getItem("token") },
      })
      .then((response: AxiosResponse) => {
        console.log(response);
        setPublications(
          response.data.map((publication: any) => {
            return { ...publication, dataEdicao: publication.data_edicao };
          })
        );
      })
      .catch((error: any) => {
        alert("Ocorreu um erro ao buscar as publicações.");
      });
  }, []);

  return (
    <div
      style={{
        marginTop: 24,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, max(345px))",
        gap: 20,
      }}
    >
      {publications.map((publication: IPublication) => (
        <Publication publication={publication} />
      ))}
    </div>
  );
};
