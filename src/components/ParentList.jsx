
import { Link } from 'react-router-dom';

const ParentList = ({ parents }) => {
/*
    "id": p.id,
    "parent_id": p.parent.id,
    "first_name": p.first_name,
    "last_name": p.last_name,
    "email": p.email,
    "phone": p.phone
*/
  const handelKeyUpFilter = (e) => {
    console.log(e.target.value);
  }
  

  return (
    <div id="parent-list">
        <input type="text" id="search" onKeyUp={handelKeyUpFilter} placeholder="Search for names.." />
        <table className="table table-bordered table-striped" id="filteredTable" >
          <thead>
            <tr>
              <th onClick="sortTable(0)">Name</th>
              <th onClick="sortTable(1)">Email</th>
              <th onClick="sortTable(2)">Phone</th>
              <th onClick="sortTable(3)">Players</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
           {parents.map(parent => (
                <tr key={parent.id}>
                  <td>{ parent.first_name } { parent.last_name }</td>
                  <td>{ parent.email }</td>
                  <td>{ parent.phone }</td>
                  <td>{ parent.parent_id}</td>
                  <td><Link to="{parent.parent_id}" class="btn btn-sm btn-primary">Edit</Link>
                    <Link to="{parent.coach_id}" class="btn btn-sm btn-primary">Edit Coach</Link>
                   </td>
                </tr>
            ))}
          </tbody>
        </table>
     </div>
  );
}
 
export default ParentList;