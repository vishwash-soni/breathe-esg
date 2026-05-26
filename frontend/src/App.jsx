import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [records, setRecords] = useState([]);

  const [sourceType, setSourceType] = useState("SAP");


  // Fetch records
  const fetchRecords = async () => {

    try {

      const res = await axios.get(
        "http://127.0.0.1:8000/records/"
      );

      setRecords(res.data);

    } catch (err) {

      console.log(err);
    }
  };


  useEffect(() => {
    fetchRecords();
  }, []);


  // Upload file
  const handleUpload = async () => {

    try {

      const fileInput =
        document.getElementById("fileInput");

      const file = fileInput.files[0];

      if (!file) {

        alert("Please select a file");

        return;
      }

      const formData = new FormData();

      formData.append("file", file);

      formData.append("source_type", sourceType);

      console.log("Uploading:", sourceType);

      await axios.post(
        "http://127.0.0.1:8000/upload/",
        formData
      );

      alert("Uploaded Successfully");

      fetchRecords();

    } catch (err) {

      console.log(err);

      alert("Upload Failed");
    }
  };


  // Approve
  const approveRecord = async (id) => {

    await axios.post(
      `http://127.0.0.1:8000/approve/${id}/`
    );

    fetchRecords();
  };


  // Reject
  const rejectRecord = async (id) => {

    await axios.post(
      `http://127.0.0.1:8000/reject/${id}/`
    );

    fetchRecords();
  };


  return (

    <div style={{ padding: "20px" }}>

      <h1>Breathe ESG Dashboard</h1>


      {/* Upload Section */}

      <div style={{ marginBottom: "20px" }}>

        <select
          value={sourceType}
          onChange={(e) => setSourceType(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px"
          }}
        >

          <option value="SAP">SAP</option>

          <option value="UTILITY">UTILITY</option>

          <option value="TRAVEL">TRAVEL</option>

        </select>


        <input
          type="file"
          id="fileInput"
        />


        <button
          onClick={handleUpload}
          style={{
            padding: "10px",
            marginLeft: "10px",
            cursor: "pointer"
          }}
        >
          Upload
        </button>

      </div>


      {/* Records */}

      <h2>Total Records: {records.length}</h2>


      {records.map((record) => (

        <div
          key={record.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            backgroundColor: record.suspicious
              ? "#811919"
              : "#1e1e1e"
          }}
        >

          <p><b>Source:</b> {record.source_type}</p>

          <p><b>Activity:</b> {record.activity_type}</p>

          <p><b>Quantity:</b> {record.quantity}</p>

          <p><b>Status:</b> {record.status}</p>

          <p>
            <b>Suspicious:</b>
            {record.suspicious ? "YES" : "NO"}
          </p>


          <button
            onClick={() => approveRecord(record.id)}
            style={{
              padding: "8px",
              cursor: "pointer"
            }}
          >
            Approve
          </button>


          <button
            onClick={() => rejectRecord(record.id)}
            style={{
              padding: "8px",
              marginLeft: "10px",
              cursor: "pointer"
            }}
          >
            Reject
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;