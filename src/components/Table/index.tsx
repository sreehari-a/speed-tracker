import { Button, Tooltip } from "antd";
import { CSVLink } from "react-csv";
import stylize from "../../utils/stylize";
import styles from "./styles";

type Props = {
  classes: any;
  data: {
    headers: any[];
    rowData: any[];
  };
};

function Table(props: Props) {
  const { data: { headers, rowData } = {}, classes } = props;
  return (
    <div className={classes.container}>
      <table>
        <tr>
          {headers?.map(({ label }: any) => {
            return <th>
              <Tooltip placement="topLeft" title={label}>
              <span>{label}</span>
              </Tooltip>
            </th>;
          })}
        </tr>
        {rowData?.map((data: any) => {
          return (
            <tr>
              {headers?.map(({ key }: any) => {
                return <td>
                  <Tooltip placement="topLeft" title={data[key]}>
                  <span>{data[key]}</span>
                  </Tooltip>
                  </td>;
              })}
            </tr>
          );
        })}
      </table>
      <div className={classes.formItem}>
        {
          <CSVLink
            //@ts-ignore
            data={rowData}
            filename={`performance-data`}
            headers={headers}
          >
            <Button>Download Excel</Button>
          </CSVLink>
        }
      </div>
    </div>
  );
}

export default stylize(Table, styles);
