export default function Buttonsm(props: { name: string; id: string; color: string; textcolor:string }) {
  return (
    <button id={props.id} className="card-button" style={{color:props.textcolor, backgroundColor: props.color }}>
      {props.name}
    </button>
  );
}
