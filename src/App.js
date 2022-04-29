import './App.css';
import './appStyles.css';
// import styles from './appstyles.module.css';
// import { Greet } from 'components/Greet';
// import { Message } from 'components/Message';
// import { ClickHandler } from 'components/ClickHandler';
// import { ParentComponent } from 'components/ParentComponent';
// import { UserGreeting } from 'components/UserGreeting';
// import { NameList } from 'components/NameList';
// import { Stylesheet } from 'components/Stylesheet';
// import { Inline } from 'components/Inline';
// import { Form } from 'components/Form';
// import { PostList } from 'components/PostList';
// import { PostForm } from 'components/PostForm';
import NAMES from 'components/data.json';
import { useState, useTransition } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    startTransition(() => setQuery(e.target.value));
  };
  const filteredNames = NAMES.filter((name) => {
    return name.first_name.includes(query) || name.last_name.includes(query);
  });

  return (
    <div className="App">
      {/* <Greet
        name="Aoki"
        heroName="青木"
      />
      <Greet
        name="Kato"
        heroName="加藤"
      >
        <button>Action</button>
      </Greet>
      <Greet
        name="Satake"
        heroName="佐竹"
      />
      <Greet>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <PostForm />
      <PostList /> */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      {isPending && <p>Updataing list...</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
}

export default App;
