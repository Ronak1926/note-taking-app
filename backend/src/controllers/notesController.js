export const getAllNotes=(req, res) =>{
    res.status(200).send("you got notes");
}


export const createNote = (req,res) =>{
    res.status(201).json({msg : "Note created successfully!"})
}

export const updateNote =(req,res) =>{
    res.status(200).json({msg : "Note updated successfully!"})
}

export const deleteNote =(req,res) =>{
    res.status(200).json({msg : "Note deleted successfully!"})
}