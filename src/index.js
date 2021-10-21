import 'lodash';
import './style.css';
import listArr from './list.js';

const buildtable = (item) => {
  const table = document.getElementById('myTable');
  for (let i = 0; i < item.length; i += 1) {
    const row = `<tr> 
                  <td>${item[i].Name} : ${item[i].score}</td>
                  
                
                  </tr>`;
    table.innerHTML += row;
  }
};

buildtable(listArr);
