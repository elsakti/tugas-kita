export default function Search() {
    return (
        <>
            <form method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                <div className="input-group input-group-lg">
                    <span className="input-group-text bi-search" id="basic-addon1">

                    </span>

                    <input
                        name="keyword"
                        type="search"
                        className="form-control"
                        id="keyword"
                        placeholder="Design, Code, Marketing, Finance ..."
                        aria-label="Search"
                    />

                    <button type="submit" className="form-control">Search</button>
                </div>
            </form>
        </>
    )
}