import "./listPage.scss"
import Card from "../../compoenents/card/Card";
import { listData } from './../../lib/dummydata';
import Filter from "../../compoenents/filter/Filter";
function ListPage(){
    const data = listData;
    return (
        <div className="listPage">
          
            <div className="listContainer">list
                <div className="wrapper">
                    <Filter/>
                    {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
                </div>
            </div>
            <div className="mapContainer">map</div>
        </div>
    )
}
export default ListPage;