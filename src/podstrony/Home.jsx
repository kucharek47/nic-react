import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Czym jest nic?</h1>
      <p>
        Nic to pojęcie z pozoru oczywiste, a jednak trudne do zdefiniowania. W potocznym rozumieniu oznacza brak czegoś, pustkę, zerowy stan. Ale czy naprawdę jesteśmy w stanie doświadczyć absolutnego "nic"? Nawet w przestrzeni kosmicznej istnieją cząsteczki, promieniowanie czy pole kwantowe.
      </p>

      <div className="linki">
        <Link to="/nic_fizyka">Nic jako fizyka</Link>
        <Link to="/nic_bank">Nic na koncie bankowym</Link>
        <Link to="/nic_nierobienie">Nic nie robienie</Link>
      </div>
    </>
  );
}
