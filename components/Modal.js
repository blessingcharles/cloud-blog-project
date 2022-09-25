const styles = {};
const Modal = (props) => {
    if(!props.show){
        return null ;
    }
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-slate-500 flex items-center justify-center">
            <div className="w-[40rem] bg-slate-50">
                    {...props}            
                <div className="p-3 border-t-2 border-solid">
                    <button>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
