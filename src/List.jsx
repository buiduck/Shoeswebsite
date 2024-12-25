import PropTypes from 'prop-types';
function List(props){
    const category = props.category;
    const itemList = props.items;
       //  fruits.sort((a,b) => a.calories -b.calories); // sort numeric
    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;{item.calories}
        </li>);
        
    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}
// Xác thực kiểu của các props
List.propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired
};
export default List