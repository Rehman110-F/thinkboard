import Note from "../models/Notes.js"
export async function sendnote(req,res) {
    
    try {
        
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        
        console.error("Your Function sendnote do not working",error);
        res.status(500).json({message:"Server is failed."});
    }
    
};

export async function getNoteByID(req , res) {
    try {
        const findnote=await Note.findById(req.params.id);
        if(!findnote){
            res.status(404).json({message:"No note exist on this id."});
        }
        res.status(200).json(findnote);
    } catch (error) {
        console.error("Your Function getNoteByID do not working",error);
        res.status(500).json({message:"Server is failed."});
    }
    
};
export async  function  createnote(req,res) {
    
    try {
        const {title , content} =  req.body
        const newNote = new Note({title:title, content:content});

        await newNote.save()
        res.status(201).json({message : "New Note has been created."});
    } catch (error) {
        console.error("Your Function createnote do not working",error);
        res.status(500).json(newNote);
    }

};

export async function  updatenote (req,res) {
    try {
        const {title, content} = req.body
        const updatedNote=await Note.findByIdAndUpdate(req.params.id , {title,content},{new:true});
        if (!updatedNote) {
            res.status(404).json({message:"Note not found."});
        };
        res.status(200).json({message:"Note Updated Successfully."});
    } catch (error) {
        console.error("Your Function updatenote do not working",error);
        res.status(500).json({message:"Server is failed."});
    }
};

export async function  deletenote (req,res) {
    try {
        const {title, content} = req.body
        const deletednote =  await Note.findByIdAndDelete(req.params.id , {title,content});
        
        if (!deletednote){
            res.status(404).json({message:"Not found ."});
        }
        res.status(200).json({message:"Node has been deleted."});
    } catch (error) {
        console.error("Your Function deletenote do not working",error);
        res.status(500).json({message:"Server is failed."});
    }
};
//YW4C8Cegumj3A9j4
