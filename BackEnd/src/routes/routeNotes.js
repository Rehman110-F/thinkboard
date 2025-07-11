import express from "express"
import {createnote ,getNoteByID, deletenote, updatenote , sendnote} from "../controllers/controls.js"
const router =  express.Router();


router.get("/" , sendnote );
router.get("/:id", getNoteByID);
router.post("/" , createnote);
router.put("/:id", updatenote );
router.delete("/:id" , deletenote);

export default router; 