import "./listPage.scss"
import Card from "../../compoenents/card/Card";
import { listData } from './../../lib/dummydata';
import Filter from "../../compoenents/filter/Filter";
import Map from "../../compoenents/map/Map";
import { useLoaderData } from "react-router-dom";
function ListPage(){
    const posts=useLoaderData()
    return (
        <div className="listPage">
          
            <div className="listContainer">list
                <div className="wrapper">
                    <Filter/>
                    {posts.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
                </div>
            </div>
            <div className="mapContainer"><Map items={posts}/></div>
        </div>
    )
}
export default ListPage;