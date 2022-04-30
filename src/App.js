import AuthContext from './context/AuthProvider'

const App = () => {
  return (
    <AuthContext>
      <h1>Hello World</h1>
    </AuthContext>
  );
};

export default App;
