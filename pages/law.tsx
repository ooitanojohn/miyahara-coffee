/* eslint-disable react/jsx-key */
import { ArticleTitle } from "@/components/parts/ArticleTitle";
import { tableList } from "@/data/law";

const Law = () => {
  return (
    <div>
      <ArticleTitle title="特定取引商法に基づく表示" />
      <Table />
      <div
        style={{
          backgroundColor: "rgb(232, 228, 222)",
          width: "100%",
          height: "100px",
        }}
      ></div>
    </div>
  );
};

const Table = () => {
  return (
    <table
      style={{
        border: "black solid 1px",
        borderCollapse: "collapse",
        width: "60%",
        margin: "0 auto",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      {tableList.map((ele, index) => (
        <tr key={index}>
          <th
            style={{
              border: "black solid 1px",
              backgroundColor: "rgb(232, 228, 222)",
              width: "200px",
              textAlign: "center",
              verticalAlign: "middle",
              padding: "3px",
            }}
            align="center"
            key={index}
          >
            {ele.tr}
          </th>
          <td style={{ border: "black solid 1px", padding: "3px" }}>
            {ele.td}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Law;
