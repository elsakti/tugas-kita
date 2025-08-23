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
                        placeholder="Cari template untuk posisi impian kamu..."
                        aria-label="Search"
                    />

                    <button type="submit" className="form-control">Cari</button>
                </div>
            </form>
        </>
    )
}