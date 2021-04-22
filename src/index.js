import "./styles.css";
import SingleLinkedList from "./LinkedList/singlyLinkedList";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let sl1 = new SingleLinkedList();
sl1.push(10);
sl1.push(11);
sl1.push(12);
sl1.push(13);
sl1.push(14);

// sl1.print(sl1);
sl1.delete(2);
sl1.print(sl1);
console.log(sl1);
