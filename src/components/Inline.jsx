export const Inline = () => {
  const heading = {
    fontSize: '72px',
    color: 'blue',
  };
  return (
    <>
      <h1 className="error">Error</h1>
      <h1 className={heading}>-Success</h1>
    </>
  );
};
