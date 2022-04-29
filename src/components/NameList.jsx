export const NameList = () => {
  const names = ['Tanaka', 'Yamada', 'Sato'];

  return (
    <div>
      {names.map((name, index) => {
        return (
          <>
            <h2 key={index}>
              {name}: Length is {name.length}
            </h2>
          </>
        );
      })}
    </div>
  );
};
