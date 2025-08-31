
import ParentList from "./ParentList";
import Heading from "./Heading";
import useFetch from "./useFetch";
import { NavLink } from 'react-router-dom';

const Parents = () => {
  const { error, isPending, data: parents } = useFetch('http://localhost:5000/api/parents')

  return (
    <div className="parents">
      <Heading title="Parents" />
      <NavLink to="add-parent" class="btn btn-success mb-2">Add Parent</NavLink>

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { parents && <ParentList parents={parents} /> }
    </div>
  );
}
 
export default Parents;
