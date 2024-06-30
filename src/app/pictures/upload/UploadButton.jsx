import "./UploadButton.css"

export default function UploadBtton(props) {

    return (
        <div class="upload">
            <form action={props.action}>
                <button type = "button" class = "btn-warning">
                    <i class = "fa fa-upload"></i> Upload File
                    <input type="file" />
                </button>
            </form>
            
        </div>
    )
    
}