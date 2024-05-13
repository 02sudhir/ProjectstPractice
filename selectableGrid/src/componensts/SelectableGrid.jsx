

const SelectableGrid = ({rows=10,cols=10}) => {
  return (
    <div className="grid" >
    {[...Array(rows*cols).keys()].map((_,i) => (
        
        <div key={i} className={'box'}>{i+1}</div>
        
    )) }
    </div>
  );
};

export default SelectableGrid;