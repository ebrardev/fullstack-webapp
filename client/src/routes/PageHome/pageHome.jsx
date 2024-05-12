
import SearchBar from "../../components/searchBar/SearchBar";
import "./pageHome.scss";

const PageHome= () => {
    return (
       <div className="homePage">
     <div className="textContainer">
<div className="wrapper">
<h1 className="title">  Find real estate & get your dream place  </h1>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
<SearchBar />
<div className="boxes">
    <div className="box">
        <h1>16+</h1>
        <h2>Years of Experience</h2>
    </div>
    <div className="box">
        <h1>290</h1>
        <h2>Award Gained</h2>
    </div>
    <div className="box">
        <h1>12000</h1>
        <h2>Property Ready</h2>
    </div>
</div>
</div>
     </div>
        <div className="imageContainer">
            <img src="/bg.png" alt="bg" />
            </div>
       </div>
    )
}
export default PageHome;