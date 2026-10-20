import { Dashboard } from "./components/DashBoard/DashBoard.jsx";
import { Calendar } from "./components/Calendar/Calendar.jsx";
import { BookForm } from "./components/BookForm/BookForm.jsx";
import { BookFilter } from "./components/BookFilter/BookFilter.jsx";
import { BookList } from "./components/BookList/BookList.jsx";

import { GlobalStyle } from "./styes/GlobalStyle.jsx";
import { AppContainer } from "./App.styled.js";

function App() {
  return (
    <>
      <GlobalStyle />

      <AppContainer>
        <h1>Book Library</h1>

        <Dashboard />

        <Calendar />

        <BookForm />

        <BookFilter />

        <BookList />
      </AppContainer>
    </>
  );
}

export default App;
