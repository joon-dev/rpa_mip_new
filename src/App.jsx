import { Book } from './components/Book';
import { Nav } from './components/Nav';
import { useData } from './hooks/data-context';

function App() {
  const { data, addBook } = useData();

  return (
    <div className='bg-cyan-100x h-screen  w-full overflow-y-hidden overflow-x-scroll'>
      <header>
        <Nav />
      </header>

      {/* <Book
                key={book.id}
                book={book}
                saveBook={saveBook}
                removeBook={removeBook}
              /> */}
      <main>
        <div className='flex items-start p-4'>
          {data.books
            .sort((a, b) =>
              a.id === 0 ? Number.MAX_SAFE_INTEGER : a.id - b.id
            )
            .map((book) => (
              <Book key={book.id} book={book} />
            ))}
          <div>
            {data.books.find((book) => !book.id) ? (
              ''
            ) : (
              <button
                onClick={addBook}
                className='mr-2 w-64 rounded-md bg-cyan-400 px-5 py-1 text-xl font-bold text-white hover:bg-cyan-500'
              >
                + Add Book
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className='text-center text-slate-500'>
        &#169; Indiflex - Senior Coding 2022
      </footer>
    </div>
  );
}

export default App;
