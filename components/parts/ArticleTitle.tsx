export const ArticleTitle = (Props: any) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        backgroundColor: "#E8E4DE",
      }}
    >
      <div style={{ borderBottom: "double 5px red", padding: "5px 15px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "larger",
          }}
        >
          {Props.title}
        </h2>
      </div>
    </div>
  );
};
