function History(props) {
  return (

    <section className="history">
      <h3 className="h3-history">Pending History: </h3>

      {(props.history.map((reqHistory, index) =>
      
        <div className="history" key={index} >
          <span>{reqHistory.method}</span>
          <p>{reqHistory.url}</p>
        </div>
      ))}
    </section>
  );
}

export default History;


// { apiResultsHistory }
// data={apiResultsHistory}
