export const Greet = ({ name = 'No name', heroName = 'No hero', children = [] }) => {
  return (
    <>
      <h1>
        My name is {name}. Your {heroName}!
      </h1>
      {children}
    </>
  );
};
