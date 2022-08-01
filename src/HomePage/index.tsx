/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { Button, Input, InputNumber } from "antd";
import React, { useState } from "react";
import stylize from "../utils/stylize";
import styles from "./styles";
import Loader from "../components/loader";
import Table from "../components/Table";

type Props = {
  classes: any;
  performance: any;
  getPerformance: Function;
  loading: boolean;
  resetTable: Function;
};
type Form = {
  url?: string;
  iterationCount?: number;
};
export function HomePage({
  classes,
  performance,
  getPerformance,
  loading,
  resetTable,
}: Props) {
  const [form, setForm] = useState<Form>({});
  const { rowData } = performance || {};
  const updateForm = (event: any) => {
    const { target: { id = "", value = "" } = {} } = event;
    const updatedForm = { ...form, [id]: value };
    id && setForm(updatedForm);
  };
  const updateIterationCount = (value: any) => {
    updateForm({ target: { id: "iterationCount", value } });
  };
  const readPerformanceData = () => {
    resetTable?.();
    const urls = form.url?.split(",");
    urls?.forEach((url) => {
      getPerformance({
        url,
        iterationCount: form.iterationCount || 5,
      });
    });
  };
  return (
    <div className={classes.formWrapper}>
      <div className={`${classes.aboutText} caligraphy`}>
        Runs performance audits and analyses the result
      </div>
      {!loading && (
        <>
          <div className={classes.formItem}>
            <div className={classes.label}>{"URL(s)"}</div>
            <Input
              id="url"
              placeholder="Enter url or multiple urls separated by comma"
              value={form.url}
              onChange={updateForm}
            />
          </div>
          <div className={classes.formItem}>
            <div className={classes.label}>{"No. of samples to be taken"}</div>
            <InputNumber
              id="iterationCount"
              placeholder="Enter no. of samples of each url to be analyzed defaults to 5 to a max of 10"
              value={form.iterationCount}
              onChange={updateIterationCount}
              min={1}
              max={10}
            />
          </div>
          <div className={classes.formItem}>
            <Button onClick={readPerformanceData}>Get Performance Data</Button>
          </div>
        </>
      )}
      {rowData.length && !loading && (
        //@ts-ignore
        <Table data={performance} />
      )}
      {
        //@ts-ignore
        <Loader loaderText={"Please wait while we analyze your page......"} />
      }
    </div>
  );
}

export default stylize(HomePage, styles);
