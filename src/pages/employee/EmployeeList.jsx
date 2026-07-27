import { Button } from "@/components";

const EmployeeList = () => {
  return (
    <>
      <Button
        type="submit"
        variant="primary"
        onClick={() => {
          alert("hello");
        }}
      >
        Add Employee
      </Button>
    </>
  );
};

export default EmployeeList;
