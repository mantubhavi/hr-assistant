import { Button } from "@components";
import { useState } from "react";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  const fetchData = async () => {
    const result = await fetch("http://localhost:5105/api/department", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    setEmployee(data.data);
  };

  return (
    <>
      <Button type="button" variant="primary" onClick={fetchData}>
        List Departments
      </Button>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          // display: "flex",
          // flexDirection: "column",
          // flexWrap: "wrap",
          gap: "18px",
        }}
      >
        {employee?.map((emp) => (
          <div
            key={emp.id}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
              transition: "all 0.2s ease",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    marginBottom: "4px",
                  }}
                >
                  Department Code
                </div>

                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  {emp.code}
                </div>
              </div>

              {/* Status */}
              <span
                style={{
                  padding: "5px 10px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: "600",
                  background: emp.isActive ? "#dcfce7" : "#fee2e2",
                  color: emp.isActive ? "#166534" : "#991b1b",
                }}
              >
                {emp.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "#f3f4f6",
                marginBottom: "16px",
              }}
            />

            {/* Name */}
            <div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                  marginBottom: "5px",
                }}
              >
                Department Name
              </div>

              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                {emp.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
