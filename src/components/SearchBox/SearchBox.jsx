import s from "./SearchBox.module.css"

function SearchBox({ searchStr, setSearch }) {
    return (
        <div className={s.wrapper}>
            <h2>Find contacts by name</h2>
            <input
                value={searchStr}
                onChange={e => setSearch(e.target.value)}
                type='text'
                className='input'
                placeholder='Enter name...'
            />
            {searchStr && (
                <button className={s.btn} onClick={() => setSearch('')}>
                    Reset
                </button>
            )}
        </div>
    )
}

export default SearchBox