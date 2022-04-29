export const ChildComponent = ({ greetHandler }) => {
  return (
    <div>
      <button onClick={() => greetHandler('child')}>Greet Parent</button>
    </div>
  );
};
