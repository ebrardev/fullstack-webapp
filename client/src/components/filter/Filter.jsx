import "./filter.scss"

function Filter() {
  return (
<div className="filter">
    <h1>Search  results for <b>London</b></h1>
    <div className="top">
        <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id="city" placeholder="City" />
        </div>
    </div>
    <div className="bottom">
    <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
            <option value="">Any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                </select>
        </div>
        <div className="item">
            <label htmlFor="property">property</label>
            <select name="property" id="property">
            <option value="">Any</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
                </select>
        </div>
        <div className="item">
            <label htmlFor="minPrice">MinPrice</label>
            <input type="number" id="minPrice" name="minPrice" placeholder="any" />
        </div>
        <div className="item">
            <label htmlFor="maxPrice">MaxPrice</label>
            <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>
        <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input type="text" id="bedrooö" name="bedroom" placeholder="any" />
        </div>
        <button>
            <img src="/search.png"/>
        </button>
    </div>
</div>
  )
}

export default Filter