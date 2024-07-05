import "./UploadButton.css"

export default function UploadBtton(props) {

    return (
        <div class="upload">
            <button type = "button" class = "btn-warning">
                <i class = "fa fa-upload"></i>{props.text}
                <input type="file" accept="image/*" />
            </button>
        </div>
    )
}