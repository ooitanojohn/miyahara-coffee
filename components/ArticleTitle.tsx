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
      <h2
        style={{
          borderBottom: "double 5px red",
          width: "60%",
          textAlign: "center",
        }}
      >
        <span>{Props.title}</span>
      </h2>
    </div>
  );
};
