/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import stylize from "../utils/stylize";
import styles from "./styles";
import { CSVLink } from "react-csv";
import Loader from "../components/loader";

export function HomePage({ classes, performance, getPerformance, loading, resetTable }) {
  const [form, setForm] = useState({});
  const [perfData, setPerfData] = useState(null);
  useEffect(() => {
    setPerfData(performance);
  }, [performance]);
  const { rowData, headers } = performance || {};
  const updateForm = (event) => {
    const { target: { id = "", value = "" } = {} } = event;
    const updatedForm = { ...form, [id]: value };
    id && setForm(updatedForm);
  };
  const readPerformanceData = () => {
    resetTable?.();
    const urls = form.url.split(',');
    urls.forEach(url => {
      getPerformance({
        API_KEY: form.API_KEY,
        url,
      })
    })
    // getPerformance(form);
  };
  return (
    <div className={classes.formWrapper}>
      {!loading && (
        <>
          <div className={classes.formItem}>
            <Input
              id="API_KEY"
              placeholder="Enter Google API Key"
              value={form.API_KEY}
              onChange={updateForm}
            />
          </div>
          <div className={classes.formItem}>
            <Input
              id="url"
              placeholder="Enter url or multiple urls separated by comma"
              value={form.url}
              onChange={updateForm}
            />
          </div>
          <div className={classes.formItem}>
            <Button onClick={readPerformanceData}>Get Performance Data</Button>
          </div>
        </>
      )}
      {rowData && !loading && (
        <>
          <table>
            <tr>
              {headers.map(({ label }) => {
                return <th>{label}</th>;
              })}
            </tr>
            {rowData.map((data) => {
              return (
                <tr>
                  {headers.map(({ key }) => {
                    return <td>{data[key]}</td>;
                  })}
                </tr>
              );
            })}
          </table>
          <div className={classes.formItem}>
            <CSVLink
              data={rowData}
              fileName={`performance-data`}
              headers={headers}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Button>Download Excel</Button>
            </CSVLink>
          </div>
        </>
      )}
       <Loader loaderText={'Please wait until we analyze your page......'} />
    </div>
  );
}

export default stylize(HomePage, styles);
