import React from 'react';
import Header from './LAB15_h';
import Content from './LAB15_c';
import Footer from './LAB15_f';
import StyledButtonInline from './LAB15_sbil';
import StyledButtonInternal from './LAB15_sbit';
import StyledButtonExternal from './cLAB15_sbe';
import LifecycleDemo from './LAB15_lcd';
import Parent from './LAB15_p';
import CounterUseState from './LAB15_cus';
import CounterUseReducer from './LAB15_cur';
import JokeFetcher from './LAB15_jf';
import FocusForm from './LAB15_ff';
import { ThemeProvider, ThemedComponent } from './LAB15_tc';
import FormUseState from './LAB15_fus';
import FormUseRef from './LAB15_fur';

const App = () => {
  const [showLifecycle, setShowLifecycle] = React.useState(true);

  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <Header title="Welcome to the Joke App" />
        <Content />
        <Footer />

        <h2>Styled Buttons</h2>
        <StyledButtonInline />
        <StyledButtonInternal />
        <StyledButtonExternal />

        <h2>Lifecycle Demo</h2>
        <button onClick={() => setShowLifecycle(prev => !prev)}>
          {showLifecycle ? "Unmount Component" : "Mount Component"}
        </button>
        {showLifecycle && <LifecycleDemo />}

        <h2>Props & PropTypes</h2>
        <Parent />

        <h2>Counter with useState</h2>
        <CounterUseState />
        <h2>Counter with useReducer</h2>
        <CounterUseReducer />

        <h2>Joke API Fetcher</h2>
        <JokeFetcher />

        <h2>Focus Form (useRef)</h2>
        <FocusForm />

        <h2>Theme Context (useContext)</h2>
        <ThemedComponent />

        <h2>Form using useState</h2>
        <FormUseState />

        <h2>Form using useRef</h2>
        <FormUseRef />
      </div>
    </ThemeProvider>
  );
};

export default App;
