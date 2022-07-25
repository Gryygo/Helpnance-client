import { Summary } from "../Summary";
import { Table } from "../Table";
import { DBContainer } from "./styles";

export const Dashboard = () => {
  return (
    <DBContainer>
      <Summary />
      <Table />
    </DBContainer>
  );
};
