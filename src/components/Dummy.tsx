/*
interface DummyProps {
  message: string
}

const Dummy = ({ message }: DummyProps): React.JSX.Element => {
*/

const Dummy = ({ message }: { message: string }): React.JSX.Element => {
  return (
    <h1>{message}</h1>
  );
};

export default Dummy;
