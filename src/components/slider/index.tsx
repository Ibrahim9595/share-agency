import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./index.css";
import { useQuery } from "react-query";
import Loading from "../../components/loading/index.tsx";

import axios from "axios";
const Slider = () => {
  const { isLoading, error, data } = useQuery("companies", () =>
    axios(`https://share-agency.herokuapp.com/api/rest/companies`, {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": "Ahmed2771995",
      },
    })
  );

  const [minIndex, setMin] = useState(data?.data.companies.length - 1);
  const [maxIndex, setMax] = useState(4);
  const visibleCompanies = useMemo(
    () => data?.data.companies.filter((cmp) => cmp.visible),
    [data?.data.companies]
  );
  const activeCompanies =  useMemo(
    () => visibleCompanies === undefined ? []:visibleCompanies.slice(0, 4),
    [visibleCompanies]
  );
  const next = useCallback(() => {
    maxIndex === visibleCompanies.length - 1
      ? setMax(0)
      : setMax(maxIndex + 1);
    minIndex === visibleCompanies.length - 1
      ? setMin(0)
      : setMin(minIndex + 1);
    activeCompanies.shift();
    activeCompanies.push(visibleCompanies[maxIndex]);
  }, [
    setMax,
    setMin,
    activeCompanies,
    visibleCompanies,
    maxIndex,
    minIndex,
  ]);
  // const prev = useCallback(() => {
  //     console.log(activeCompanies)
  //     maxIndex === 0 ? setMax(data?.data.companies.length - 1) : setMax(maxIndex - 1)
  //     minIndex === 0 ? setMin(data?.data.companies.length - 1) : setMin(minIndex - 1)
  //     activeCompanies.pop()
  //     activeCompanies.unshift(data?.data.companies[minIndex])
  //     console.log(activeCompanies)
  // }, [setMax, setMin, activeCompanies, data?.data.companies, maxIndex, minIndex])
  useEffect(() => {
    const intervalId = setInterval(next, 3000);
    return () => clearInterval(intervalId);
  }, [next]);

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <div className="slider-container">
      <img
        className="prev"
        alt="arrow"
        src="./resources/images/arrow.png"
        onClick={next}
      />
      <div className="companies">
        {activeCompanies.map((currentCompany, i) => {
          return currentCompany.visible ? (
            <img
              src={currentCompany.logo}
              alt="companylogo"
              key={i}
              className="company"
            />
          ) : undefined;
        })}
      </div>
      <img
        className="next"
        alt="arrow"
        src="./resources/images/arrow.png"
        onClick={next}
      />
    </div>
  );
};

export default Slider;
