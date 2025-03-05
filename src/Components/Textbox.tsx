import { useEffect, useState } from "react";

function Textbox() {
    const [text, setText] = useState(localStorage.getItem("answer") || "");
    const [files, setFiles] = useState([]); // Store files as an array
    // Auto-save text to localStorage every 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("answer", text);
        }, 2000);

        return () => clearTimeout(timer);
    }, [text]);

    // Handle file selection
    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    // Handle text change
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    // Handle drag & drop
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    // Prevent default drag behavior
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Remove a file
    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="question-box">
            <h1>Please Answer Here...</h1>
            
            {/* Textarea with Drag & Drop */}
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Answer here..."
                rows="4"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            />

            {/* File Upload Button */}
            <div className="file-upload">
                <label htmlFor="fileInput" className="custom-file-button">
                    Choose File
                </label>
                <input
                    id="fileInput"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: "none" }} // Hides default file input
                />
                <span className="file-name">
                    {files.length > 0 ? files.map((file) => file.name).join(", ") : "No file chosen"}
                </span>
            </div>

            {/* Display Uploaded Files */}
            <div className="file-preview">
                {files.length > 0 ? (
                    files.map((file, index) => (
                        <div key={index} className="file-item">
                            {file.type.startsWith("image/") ? (
                                <img src={URL.createObjectURL(file)} alt="preview" width="100" />
                            ) : (
                                <p>{file.name}</p>
                            )}
                            <button className="remove-btn" onClick={() => removeFile(index)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>No files uploaded</p>
                )}
            </div>

            <button className="submit-btn">Submit</button>
        </div>
    );
}

export default Textbox;
